import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCourses } from '../actions';

class Timetable extends Component {
  componentDidMount(){
    this.props.fetchCourses();
  }

  classifyDay(){
    const sunday = [];
    const monday = [];
    const tueday = [];
    const wednesday = [];
    const thursday = [];
    const friday = [];
    const saturday = [];
    this.props.courses.forEach(course => {
      course.days.forEach(day => {
        switch(day){
          case 'sunday':
            sunday.push(course);break;
          case 'monday':
            monday.push(course);break;
          case 'tueday':
            tueday.push(course);break;
          case 'wednesday':
            wednesday.push(course);break;
          case 'thursday':
            thursday.push(course);break;
          case 'friday':
            friday.push(course);break;
          case 'saturday':
            saturday.push(course);break;
          default:
            break;
        }
      });
  });
  monday.sort((a,b) => parseInt(b.timeStart) - parseInt(a.timeStart));
  // console.log(monday);
}
  render(){
    // console.log(this.props.courses);
    this.classifyDay()
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
