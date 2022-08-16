import { useHistory } from 'react-router-dom'
import {ContainerHeader} from './headerStyled'

const Header = () => {
  const history = useHistory()
	return(
    <ContainerHeader>
        <div>
          <h2>AtSistemas</h2>
        </div>
        <div>
          <button onClick={() =>{history.get('/site/register-site')}}>Registrar Sitio</button>
        </div>
    </ContainerHeader>
	)
}
export default Header