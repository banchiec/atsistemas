import { Link, useHistory } from 'react-router-dom'
import {ContainerHeader} from './headerStyled'

const Header = () => {
  let history = useHistory()

  const handleClick = () => {
    history.push('./sites/register-site')
  }

	return(
    <ContainerHeader>
        <div>
          <h2>AtSistemas</h2>
        </div>
        <Link to='/sites/register-site'>
          <button type='button' onClick={handleClick}>Registrar Sitio</button>
        </Link>
    </ContainerHeader>
	)
}
export default Header