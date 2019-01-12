import React,{ Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import Header from './Header';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import Timetable from './Timetable';
import CourseForm from './CourseForm';

class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }

  render(){
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header/>
            <div className="ui container">
              <Route path="/" component={()=><h2>Landing Page</h2>} exact/>
              <Route path="/getregister" component={RegisterForm}/>
              <Route path="/getlogin" component={LoginForm}/>
              <Route path="/getcourses" component={Timetable} exact/>
              <Route path="/courses/new" component={CourseForm} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }

}

export default connect(null,{fetchUser})(App);
