import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCourses } from '../actions';

class Timetable extends Component {
   sunday = []
   monday = []
   tueday = []
   wednesday = []
   thursday = []
   friday = []
   saturday = []

  componentDidMount(){
    this.props.fetchCourses();
  }

  initialDayArray(){
    this.sunday = [];
    this.monday = [];
    this.tueday = [];
    this.wednesday = [];
    this.thursday = [];
    this.friday = [];
    this.saturday = [];
  }

  classifyDay(){
    this.initialDayArray();
    this.props.courses.forEach(course => {
      course.days.forEach(day => {
        switch(day){
          case 'sunday':
            this.sunday.push(course);break;
          case 'monday':
            this.monday.push(course);break;
          case 'tueday':
            this.tueday.push(course);break;
          case 'wednesday':
            this.wednesday.push(course);break;
          case 'thursday':
            this.thursday.push(course);break;
          case 'friday':
            this.friday.push(course);break;
          case 'saturday':
            this.saturday.push(course);break;
          default:
            break;
        }
      });
  });

  const sortFn=(a,b) => parseInt(a.timeStart) - parseInt(b.timeStart);
  this.sunday.sort(sortFn);
  this.monday.sort(sortFn);
  this.tueday.sort(sortFn);
  this.wednesday.sort(sortFn);
  this.thursday.sort(sortFn);
  this.friday.sort(sortFn);
  this.saturday.sort(sortFn);

  // console.log(this.monday);
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
