import { Link, Redirect, Router, useHistory, useLocation } from 'react-router-dom'
import {ContainerHeader} from './headerStyled'

const Header = () => {
  const location = useLocation()
  function handleClick(){
    console.log(location);
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