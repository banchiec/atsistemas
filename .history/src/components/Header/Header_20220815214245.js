import { Link, useHistory } from 'react-router-dom'
import {ContainerHeader} from './headerStyled'

const Header = () => {
	return(
    <ContainerHeader>
        <div>
          <h2>AtSistemas</h2>
        </div>
        <Link to='/sites/register-site'>
          <button type='button'>Registrar Sitio</button>
        </Link>
    </ContainerHeader>
	)
}
export default Header