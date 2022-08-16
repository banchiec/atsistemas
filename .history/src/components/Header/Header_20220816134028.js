import { Link, Redirect, Router, useHistory } from 'react-router-dom'
import {ContainerHeader} from './headerStyled'

const Header = () => {
  const history = useHistory()
  const handleClick = () => {
  }
	return(
    <ContainerHeader>
      <div>
        <h2>AtSistemas</h2>
      </div>
      <Redirect to={{
        pathname: '/'
      }}>AtSistemas</Redirect>
      <div>
        <button onClick={handleClick}>Registrar</button>
      </div>
    </ContainerHeader>
	)
}
export default Header