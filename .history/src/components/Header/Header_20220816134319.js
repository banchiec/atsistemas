import { Link, Redirect, Router, useHistory } from 'react-router-dom'
import {ContainerHeader} from './headerStyled'

const Header = () => {
  const history = useHistory()
  const handleClick = () => {
    history.push('/')
  }
	return(
    <ContainerHeader>
      <div>
        <h2>AtSistemas</h2>
      </div>
      <div>
        <button onClick={handleClick}>Registrar</button>
      </div>
    </ContainerHeader>
	)
}
export default Header