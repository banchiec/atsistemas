import { ContainerRegisterSiteScreen, FormControl, Input, Label, Message } from "./registerSiteScreenStyled"

const RegisterSiteScreen = () => {
	return(
		<ContainerRegisterSiteScreen>
			<form>
				<FormControl>
					<Label htmlFor="name">Nombre</Label>
					<Input id='name'/>
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
			</form>
		</ContainerRegisterSiteScreen>
	)
}
export default RegisterSiteScreen