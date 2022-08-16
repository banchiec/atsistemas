import { Link, useHistory } from 'react-router-dom'
import {ContainerHeader} from './headerStyled'

const Header = () => {
  const history = useH
  const handleClick = () => {
    console.log("object");
  }
	return(
    <ContainerHeader>
        <div>
          <h2>AtSistemas</h2>
        </div>
        <div>
          <button onClick={handleClick}>Registrar Sitio</button>
        </div>
    </ContainerHeader>
	)
}
export default Header