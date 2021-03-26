import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav className="nav">
                <ul>
                    
                    <li>
                        <Link to="/student">Student</Link>
                    </li>
                    <li>
                        <Link to="/subject">Subject</Link>
                    </li>

                </ul>
            </nav>


        </div>
    );
};

export default Header;