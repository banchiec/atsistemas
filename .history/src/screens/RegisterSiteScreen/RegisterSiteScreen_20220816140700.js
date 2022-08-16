import { ContainerRegisterSiteScreen, FormControl, Label } from "./registerSiteScreenStyled"

const RegisterSiteScreen = () => {

	const handleSubmit = () => {
		console.log("object");
	}
	return(
		<ContainerRegisterSiteScreen>
			<FormControl>
				<Label htmlFor="label">
					Label
				</Label>
				<Input>

				</Input>
				<form onSubmit={handleSubmit}>
				</form>
				<h1>Register</h1>
			</FormControl>
		</ContainerRegisterSiteScreen>
	)
}
export default RegisterSiteScreen