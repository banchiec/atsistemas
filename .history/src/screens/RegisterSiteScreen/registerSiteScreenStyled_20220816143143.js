import styled from "styled-components";

export const ContainerRegisterSiteScreen = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 10em;
`
export const FormControl = styled.div`
	color: palevioletred;
	display: block;
	width: 50%;
	margin-bottom: 5px;
	button {
		width: 100%;
		color: black;
		border: none;
		border-radius: 5px;
		padding: 12px 20px 12px 20px;
		:hover {
			cursor: pointer;
		}
	}
`
export const Label = styled.label`
	display: block;
	margin-bottom: 0.5em;
	color: black;
` 
export const Input = styled.input`
	padding:  0.5em;
	color: black;
	background:  papayawhip;
	border: none;
	border-radius: 3px;
	width: 100%;
`
export const Message = styled.label`
	color: palevioletred;
	display: block;
`