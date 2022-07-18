import "./Header.css";
import homelogo from '../components/Logo_Small.png';

const Header = () => {
  return (
    <nav className="Header">
      <img className="Header-logo" src={homelogo} alt="" />
      <ul>
        <li className="Header-link">
          <a href="#events">Events</a>
        </li>
        <li className="Header-link">
          <a href="#accomodations">Accomodations</a>
        </li>
        <li className="Header-link">
          <a href="#faq">FAQ</a>
        </li>
        <li className="Header-link">
          <a href="#rsvp">RSVP</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
