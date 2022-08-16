import { useHistory } from 'react-router-dom'
import {ContainerHeader} from './headerStyled'

const Header = () => {
  const history = useHistory()

  const handleClick = () => {
    history.push("/site/register-site")
  }

	return(
    <ContainerHeader>
        <div>
          <h2>AtSistemas</h2>
        </div>
        <div>
          <button type='button' onClick={handleClick}>Registrar Sitio</button>
        </div>
    </ContainerHeader>
	)
}
export default Header