import { ContainerRegisterSiteScreen, FormControl, Input, Label, Message } from "./registerSiteScreenStyled"

const RegisterSiteScreen = () => {

	const handleSubmit = () => {
		console.log("object");
	}
	return(
		<ContainerRegisterSiteScreen>
			<FormControl>
				<Label htmlFor="label">Name</Label>
				<Input id='label'/>
				<Message>Introduce nombre</Message>
			</FormControl>
			<FormControl>
				<Label htmlFor="label">Name</Label>
				<Input id='label'/>
				<Message>Introduce nombre</Message>
			</FormControl>
		</ContainerRegisterSiteScreen>
	)
}
export default RegisterSiteScreen