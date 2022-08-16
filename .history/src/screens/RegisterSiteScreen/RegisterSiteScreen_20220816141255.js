import { ContainerRegisterSiteScreen, FormControl, Input, Label } from "./registerSiteScreenStyled"

const RegisterSiteScreen = () => {

	const handleSubmit = () => {
		console.log("object");
	}
	return(
		<ContainerRegisterSiteScreen>
			<FormControl>
				<Label htmlFor="label">
					Name
				</Label>
				<Input id='label'/>
				<Message>Introduce nombre</Message>
				<form onSubmit={handleSubmit}>
				</form>
				<h1>Register</h1>
			</FormControl>
		</ContainerRegisterSiteScreen>
	)
}
export default RegisterSiteScreen