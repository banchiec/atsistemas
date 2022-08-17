import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import SweetAlert from "react-bootstrap-sweetalert"
import { useParams } from "react-router-dom"
import { removeSelectedSite, selectedSite } from "../../redux/actions/sitesActions"
import { ContainerRegisterSiteScreen, FormControl, Input, Label, Message } from "./updateSiteScreenStyled"

const UpdateSiteScreen = () => {

  const { id } = useParams()

  const site = useSelector((state) => state.site)

  const [name, setName] = useState(site?.name)
  const [description, setDescription] = useState(site?.description)
  const [key, setKey] = useState(site?.key)
  const [path, setPath] = useState(site?.path)
  const [publicPath, setPublicPath] = useState(site?.publicPath)
  const [newSite, setNewSite] = useState(site.site)
  const [alert, setAlert] = useState(null)

  const [currentSite, setCurrentSite] = useState()

  const dispatch = useDispatch()

  const fetchSiteDetail = async (id) => {
    const response = await axios
      .get(`https://interview.staging.atresplayer.com/site/${id}`)
      .catch((err) => {
        console.log("Err: ", err)
      });
    dispatch(selectedSite(response.data))
  }
  useEffect(() => {
    if (site) {
      setName(site?.name)
      setDescription(site?.description)
      setKey(site?.key)
      setPath(site?.path)
      setPublicPath(site?.publicPath)
      setNewSite(site?.site)
    }
  }, [site])

  useEffect(() => {
    setCurrentSite(site)
  }, [])

  useEffect(() => {
    if (id && id !== "")
      fetchSiteDetail(id)
    return () => {
      dispatch(removeSelectedSite());
    }
  }, [id])

  const updateSite = async (site) => {
    const response = await axios
      .put(`https://interview.staging.atresplayer.com/site/${site?._id}`, site)
      .catch((error) => {
        console.log("Error", error)
      })
    if (response) {
      setTimeout(() => {

        setAlert(
          <SweetAlert
            onConfirm={handleConfirm}
            onCancel={handleConfirm}
            title={"Se actualizó  correctamente"}
          >
          </SweetAlert>
        )
      }, [])
    }
  }
  const handleConfirm = () => {
    setAlert(null)
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    const updatedSite = {
      _id: site._id,
      name,
      description,
      key,
      path,
      publicPath,
      site: newSite
    }
    updateSite(updatedSite)
  }

  return (
    <form onSubmit={handleUpdate}>
      <ContainerRegisterSiteScreen>
        <FormControl>
          <Input id='name' value={name} onChange={(e) => setName(e.target.value)} required />
          <Message>Introduce nombre</Message>
        </FormControl>
        <FormControl>
          <Input id='description' value={description} onChange={(e) => setDescription(e.target.value)} required />
          <Message>Introduce descripción</Message>
        </FormControl>
        <FormControl>
          <Input id='key' value={key} onChange={(e) => setKey(e.target.value)} required />
          <Message>Introduce key</Message>
        </FormControl>
        <FormControl>
          <Input id='path' value={path} onChange={(e) => setPath(e.target.value)} required />
          <Message>Introduce Path</Message>
        </FormControl>
        <FormControl>
          <Input id='publicPath' value={publicPath} onChange={(e) => setPublicPath(e.target.value)} required />
          <Message>Introduce PublicPath</Message>
        </FormControl>
        <FormControl>
          <Input id='site' value={newSite} onChange={(e) => setNewSite(e.target.value)} required />
          <Message>Introduce sitio</Message>
        </FormControl>
        <FormControl>
          <button className="customButton" type='submit'> Actualizar </button>
        </FormControl>
      </ContainerRegisterSiteScreen>
      {alert}
    </form>
  )
}
export default UpdateSiteScreen