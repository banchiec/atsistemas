import styled from 'styled-components'

const ContainerHeader = styled.div`
	display: flex;
	flex-direction: row;
	border-bottom: 1px solid whitesmoke;
	justify-content: space-around;
	div {
		padding: 10px;
		button{
			border-radius: 5px;
			padding: 5px;
			border: none;
			margin: 0px 10px 0px 10px;
		}
	}
`
export {
	ContainerHeader
}
