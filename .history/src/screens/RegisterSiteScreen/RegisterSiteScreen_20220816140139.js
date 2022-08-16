import { ContainerRegisterSiteScreen, FormControl } from "./registerSiteScreenStyled"

const RegisterSiteScreen = () => {

	const handleSubmit = () => {
		console.log("object");
	}
	return(
		<ContainerRegisterSiteScreen>
			<FormControl>
				<form onSubmit={handleSubmit}>
					<input type="text" />
				</form>
				<h1>Register</h1>
			</FormControl>
		</ContainerRegisterSiteScreen>
	)
}
export default RegisterSiteScreen