import { useState } from "react"
import { ContainerRegisterSiteScreen, FormControl, Input, Label, Message } from "./registerSiteScreenStyled"

const RegisterSiteScreen = () => {
	const [name, setName]  = useState()
	const [description, setDescription]  = useState()
	const [key, setKey]  = useState()
	const [path, setPath]  = useState()
	const [publicPath, setPublicPath]  = useState()
	const [site, setSite]  = useState()
	console.log(name);
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log("");
	}
	return(
	  <form onSubmit={handleSubmit}>
			<ContainerRegisterSiteScreen>
				<FormControl>
					<Label htmlFor="name">Nombre</Label>
					<Input id='name' onChange={(e)=> setName(e.target.value)}/>
					<Message>Introduce nombre</Message>
				</FormControl>
				<FormControl>
					<Label htmlFor="label">Descripción</Label>
					<Input id='description'/>
					<Message>Introduce descripción</Message>
				</FormControl>
				<FormControl>
					<Label htmlFor="label">key</Label>
					<Input id='key'/>
					<Message>Introduce key</Message>
				</FormControl>
				<FormControl>
					<Label htmlFor="label">Path</Label>
					<Input id='path'/>
					<Message>Introduce Path</Message>
				</FormControl>
				<FormControl>
					<Label htmlFor="label">Public Path</Label>
					<Input id='publicPath'/>
					<Message>Introduce PublicPath</Message>
				</FormControl>
				<FormControl>
					<Label htmlFor="label">Sitio</Label>
					<Input id='site'/>
					<Message>Introduce sitio</Message>
				</FormControl>
				<FormControl>
					<button type='submit'> Registrar</button>
				</FormControl>
			</ContainerRegisterSiteScreen>
		</form>
	)
}
export default RegisterSiteScreen