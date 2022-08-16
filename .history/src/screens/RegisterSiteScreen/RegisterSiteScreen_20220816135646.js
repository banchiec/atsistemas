import { ContainerRegisterSiteScreen } from "./registerSiteScreenStyled"

const RegisterSiteScreen = () => {

	const handleSubmit = () => {
		console.log("object");
	}
	return(
		<ContainerRegisterSiteScreen>
			<form onSubmit={handleSubmit}>
			</form>
			<h1>Register</h1>
		</ContainerRegisterSiteScreen>
	)
}
export default RegisterSiteScreen