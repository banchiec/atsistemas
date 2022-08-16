import styled from "styled-components";

export const ContainerRegisterSiteScreen = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
export const FormControl = styled.div`
  border: 1px solid green;
	color: palevioletred;
	display: block;
	width: 50%;
	margin-top: 2em;
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