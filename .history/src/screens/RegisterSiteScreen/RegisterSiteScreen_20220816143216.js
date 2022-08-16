import { ContainerRegisterSiteScreen, FormControl, Input, Label, Message } from "./registerSiteScreenStyled"

const RegisterSiteScreen = () => {
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log("object");
	}

	return(
	  <form onSubmit={handleSubmit}>
			<ContainerRegisterSiteScreen>
				<FormControl>
					<Input id='name'/>
					<Message>Introduce nombre</Message>
				</FormControl>
				<FormControl>
					<Input id='description'/>
					<Message>Introduce descripción</Message>
				</FormControl>
				<FormControl>
					<Input id='key'/>
					<Message>Introduce key</Message>
				</FormControl>
				<FormControl>
					<Input id='path'/>
					<Message>Introduce Path</Message>
				</FormControl>
				<FormControl>
					<Input id='publicPath'/>
					<Message>Introduce PublicPath</Message>
				</FormControl>
				<FormControl>
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