import { Link, useHistory } from 'react-router-dom'
import {ContainerHeader} from './headerStyled'

const Header = () => {
  const handleClick = () => {
  }
	return(
    <ContainerHeader>
        <div>
          <h2>AtSistemas</h2>
        </div>
        <Link to="/">
          <div>
            <button onClick={handleClick}>Registrar Sitio</button>
          </div>
        </Link>
    </ContainerHeader>
	)
}
export default Header