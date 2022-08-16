import { ContainerRegisterSiteScreen } from "./registerSiteScreenStyled"

const RegisterSiteScreen = () => {

	const handleSubmit = () => {
		console.log("object");
	}
	return(
		<ContainerRegisterSiteScreen>
			<form onSubmit={handleSubmit}>
				<input></input>
			</form>
			<h1>Register</h1>
		</ContainerRegisterSiteScreen>
	)
}
export default RegisterSiteScreen