import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
      <div className="nav">
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/projects">
          <div>Projects</div>
        </Link>
        <Link to="/resume">
          <div>Resume</div>
        </Link>
        <Link to="/contact">
          <div>Contact</div>
        </Link>
      </div>
    );
  };
  
  export default Nav;