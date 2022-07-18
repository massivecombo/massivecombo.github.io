import "./MainCTA.css";
import headerimage from '../components/Header.JPG';

const MainCTA = () => {
  return (
    <div className="MainCTA">
      <img src={headerimage} alt="" />
      <div className="MainCTA-content">
        <h1>Al Ocampo & Irene Huang</h1>
        <h2>are getting married on May 26th, 2023</h2>
      </div>
    </div>
  );
};

export default MainCTA;
