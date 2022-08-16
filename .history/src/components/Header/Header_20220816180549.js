import { Link } from 'react-router-dom';
import { ContainerHeader } from './headerStyled'

const Header = () => {
  function handleClick() {
    console.log("Object");
  }
  return (
    <ContainerHeader>
      <div>
        <Link to='/site/register-site'>
          <h2>AtSistemas</h2>
        </Link>
      </div>
      <div>
        <Link to='/site/register-site'>
          <button onClick={handleClick}>Registrar</button>
        </Link>
      </div>
    </ContainerHeader>
  )
}
export default Header