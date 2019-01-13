import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCourses } from '../actions';

class Timetable extends Component {
  componentDidMount(){
    this.props.fetchCourses();
  }

  render(){
    console.log(this.props.courses);
    return (
      <div>
        <h2>Timetable Page</h2>
        <Link className="ui button" to="/courses/new">Add Course</Link>
      </div>
    );
  }
}

const mapStateToProps = ({ courses }) => {
  return {courses};
}

export default connect(mapStateToProps,{fetchCourses})(Timetable);
