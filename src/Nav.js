import { Link } from 'react-router-dom';
import './App.css';

function Nav() {
  return (
    <div className="Nav">
<h1>Artificial Intelligence</h1>
<Link to='/'>Home</Link>
<Link to='/about'> About</Link>
<Link to='/App'>Applictions</Link>
    </div>
  );
}

export default Nav;
