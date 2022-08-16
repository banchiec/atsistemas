import { Link } from 'react-router-dom'
import {ContainerHeader} from './headerStyled'

const Header = () => {
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