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
			padding: 8px 14px 8px 14px;
			border: 1px solid whitesmoke;
			margin: 0px 10px 0px 10px;
			:hover {
				background: black ;
			}
		}
	}
`
export {
	ContainerHeader
}
