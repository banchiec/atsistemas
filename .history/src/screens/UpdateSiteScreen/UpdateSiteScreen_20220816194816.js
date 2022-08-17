import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { removeSelectedSite, selectedSite } from "../../redux/actions/sitesActions"
import { ContainerRegisterSiteScreen, FormControl, Input, Label, Message } from "./updateSiteScreenStyled"

const UpdateSiteScreen = () => {

  const { id } = useParams()
  const dispatch = useDispatch();
  const site = useSelector((state) => state.site);
  const [updateSite, setUpdateSite] = useState(site)

  const fetchSiteDetail = async (id) => {
    const response = await axios
      .get(`https://interview.staging.atresplayer.com/site/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedSite(response.data));
  };

  useEffect(() => {
    if (id && id !== "") fetchSiteDetail(id);
    return () => {
      dispatch(removeSelectedSite());
    };
  }, [id]);
  const registerSite = async (site) => {
    const response = await axios
      .post('https://interview.staging.atresplayer.com/site', site)
      .catch((error) => {
        console.log("Error", error)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newSite = {
    }
    registerSite(newSite)
  }

  return (
    <form onSubmit={handleSubmit}>
      <ContainerRegisterSiteScreen>
        <FormControl>
          <Label htmlFor="name">Nombre</Label>
          <Input id='name' value={name} onChange={(e) => setName(e.target.value)} required />
          <Message>Introduce nombre</Message>
        </FormControl>
        <FormControl>
          <Label htmlFor="label">Descripción</Label>
          <Input id='description' value={description} onChange={(e) => setDescription(e.target.value)} required />
          <Message>Introduce descripción</Message>
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
          <Input id='site' value={site} onChange={(e) => setSite(e.target.value)} required />
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