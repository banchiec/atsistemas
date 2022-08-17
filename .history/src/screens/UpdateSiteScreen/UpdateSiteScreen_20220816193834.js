import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { ContainerRegisterSiteScreen, FormControl, Input, Label, Message } from "./registerSiteScreenStyled"

const UpdateSiteScreen = () => {

  const { id } = useParams();

  console.log(id)

  const [name, setName] = useState()
  const [description, setDescription] = useState()
  const [key, setKey] = useState()
  const [path, setPath] = useState()
  const [publicPath, setPublicPath] = useState()
  const [site, setSite] = useState()

  const registerSite = async (site) => {
    const response = await axios
      .post('https://interview.staging.atresplayer.com/site', site)
      .catch((error) => {
        console.log("Error", error)
      })
  }
  const handleClear = () => {
    setName('')
    setDescription('')
    setKey('')
    setPath('')
    setPublicPath('')
    setSite('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newSite = {
      name,
      description,
      key,
      path,
      publicPath,
      site
    }
    registerSite(newSite)
    handleClear()
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