import React,{ Component } from 'react';
import { connect } from 'react-redux';

class RegisterForm extends Component {
  checkUserRenderPage(){
    switch(this.props.auth){
      case null:
        return;
      case '':
        return(
        <form action="/register" method="POST" className="ui form">
          <div className="field">
            <label htmlFor="username">Username</label>
            <input name="username" type="text"/>
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <input name="password" type="password"/>
          </div>

          <button className="ui button">Sign Up</button>
        </form>
      );
      default:
        return;
    }
  }
  render(){
    return(
      <>
        {this.checkUserRenderPage()}
      </>
    );
  }

}

const mapStateToProps = ({ auth }) => {
  return {auth};
}


export default connect(mapStateToProps)(RegisterForm);
