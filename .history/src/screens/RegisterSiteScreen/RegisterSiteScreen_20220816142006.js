import { ContainerRegisterSiteScreen, FormControl, Input, Label, Message } from "./registerSiteScreenStyled"

const RegisterSiteScreen = () => {
	return(
		<ContainerRegisterSiteScreen>
			<FormControl>
				<Label htmlFor="label">Nombre</Label>
				<Input id='label'/>
				<Message>Introduce nombre</Message>
			</FormControl>
			<FormControl>
				<Label htmlFor="label">Descripción</Label>
				<Input id='label'/>
				<Message>Introduce descripción</Message>
			</FormControl>
			<FormControl>
				<Label htmlFor="label">Descripción</Label>
				<Input id='label'/>
				<Message>Introduce descripción</Message>
			</FormControl>
		</ContainerRegisterSiteScreen>
	)
}
export default RegisterSiteScreen