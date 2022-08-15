import styled from 'styled-components'

const ContainerHeader = styled.div`
	border: 1px solid green;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	div {
		padding: 10px;
		button{
			padding: 5px;
			border: none;
			margin: 0px 10px 0px 10px;
		}
	}
`
export {
	ContainerHeader
}
