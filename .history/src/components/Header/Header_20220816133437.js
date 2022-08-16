import { Link, Router, useHistory } from 'react-router-dom'
import {ContainerHeader} from './headerStyled'

const Header = () => {
  const handleClick = () => {
  }
	return(
    <ContainerHeader>
        <div>
          <h2>AtSistemas</h2>
        </div>
        <div>
          <Router>
          <Link>
            <button onClick={handleClick}>Registrar</button>
          </Link>
          </Router>
        </div>
    </ContainerHeader>
	)
}
export default Header