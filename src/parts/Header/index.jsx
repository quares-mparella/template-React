import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/'>inicio</Link></li>
          <li><Link to='about'>nosotros</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header