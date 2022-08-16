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
        <div>
          <button onClick={handleClick}>Registrar</button>
        </div>
    </ContainerHeader>
	)
}
export default Header