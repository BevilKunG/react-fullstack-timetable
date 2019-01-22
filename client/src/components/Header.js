import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {

  renderLeftButton(){
    switch(this.props.auth){
      case null:
        return;
      case '':
        return;
      default:
        return (
          <Link className="item" to={"/getcourses"}>Timetable</Link>
        );
    }
  }

  renderRightButton(){
    switch(this.props.auth){
      case null:
        return;
      case '':
        return (
          <div className="ui right item">
            <Link className="item" to="/getregister">Sign Up</Link>
            <Link className="item" to="/getlogin">Sign In</Link>
          </div>
        );
      default:
        return (
          <div className="ui right item">
            <a className="item" href="/logout">Sign Out</a>
          </div>
        );
    }
  }

  render(){
    // console.log(this.props.auth);
    return (
      <div className="ui inverted borderless menu">
        <Link className="item" to="/">Home</Link>
        {this.renderLeftButton()}
        {this.renderRightButton()}
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {auth};
}

export default connect(mapStateToProps)(Header);
