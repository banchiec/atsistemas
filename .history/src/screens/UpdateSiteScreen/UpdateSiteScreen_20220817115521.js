import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
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
    console.log(site)
    const response = await axios
      .put(`https://interview.staging.atresplayer.com/site/${site?._id}`, site)
      .catch((error) => {
        console.log("Error", error)
      })
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    const updatedSite = {
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
          <Label htmlFor="name">Nombre</Label>
          <Input id='name' value={name} onChange={(e) => setName(e.target.value)} required />
          <Message>Introduce nombre</Message>
        </FormControl>
        <FormControl>
          <Label htmlFor="label">Descripci??n</Label>
          <Input id='description' value={description} onChange={(e) => setDescription(e.target.value)} required />
          <Message>Introduce descripci??n</Message>
        </FormControl>
        <FormControl>
          <Label htmlFor="label">key</Label>
          <Input id='key' value={key} onChange={(e) => setKey(e.target.value)} required />
          <Message>Introduce key</Message>
        </FormControl>
        <FormControl>
          <Label htmlFor="label">Path</Label>
          <Input id='path' value={path} onChange={(e) => setPath(e.target.value)} required />
          <Message>Introduce Path</Message>
        </FormControl>
        <FormControl>
          <Label htmlFor="label">Public Path</Label>
          <Input id='publicPath' value={publicPath} onChange={(e) => setPublicPath(e.target.value)} required />
          <Message>Introduce PublicPath</Message>
        </FormControl>
        <FormControl>
          <Label htmlFor="label">Sitio</Label>
          <Input id='site' value={newSite} onChange={(e) => setNewSite(e.target.value)} required />
          <Message>Introduce sitio</Message>
        </FormControl>
        <FormControl>
          <button type='submit'> Registrar</button>
        </FormControl>
      </ContainerRegisterSiteScreen>
    </form>
  )
}
export default UpdateSiteScreen