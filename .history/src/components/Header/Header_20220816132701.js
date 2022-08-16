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
        <div>
          <Link onClick={handleClick}/>
        </div>
    </ContainerHeader>
	)
}
export default Header