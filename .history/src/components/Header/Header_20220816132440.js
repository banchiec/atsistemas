import { Link, useHistory } from 'react-router-dom'
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
        <Link>
        </Link>
        <div>
          <button onClick={handleClick}>Registrar Sitio</button>
        </div>
    </ContainerHeader>
	)
}
export default Header