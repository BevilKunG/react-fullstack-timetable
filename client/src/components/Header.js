import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  render(){
    return (
      <div className="ui menu">
        <Link className="item" to={"/"}>Home</Link>
        <div className="ui right menu">
          <Link className="item" to={"/getregister"}>Sign Up</Link>
          <Link className="item" to={"/getlogin"}>Sign In</Link>
        </div>
      </div>
    );
  }
}

export default Header;
