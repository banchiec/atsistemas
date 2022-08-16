import { Link, Redirect, Router, useHistory, useLocation } from 'react-router-dom'
import {ContainerHeader} from './headerStyled'

const Header = () => {

  function handleClick(){
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