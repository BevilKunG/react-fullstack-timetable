import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCourses } from '../actions';
import './Timetable.css';
import TimeRow from './TimeRow';
import DayRow from './DayRow';

class Timetable extends Component {
   sunday = []
   monday = []
   tuesday = []
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
    this.tuesday = [];
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
          case 'tuesday':
            this.tuesday.push(course);break;
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
  this.tuesday.sort(sortFn);
  this.wednesday.sort(sortFn);
  this.thursday.sort(sortFn);
  this.friday.sort(sortFn);
  this.saturday.sort(sortFn);

  // console.log(this.monday);
  }

  renderTimetable(){
    return (
      <div className="ui grid timetable">
        <TimeRow />
        <DayRow courses={this.sunday} day="sunday"/>
        <DayRow courses={this.monday} day="monday"/>
        <DayRow courses={this.tuesday} day="tuesday"/>
        <DayRow courses={this.wednesday} day="wednesday"/>
        <DayRow courses={this.thursday} day="thursday"/>
        <DayRow courses={this.friday} day="friday"/>
        <DayRow courses={this.saturday} day="saturday"/>
      </div>
    );
  }

  checkUserRenderPage(){
    switch(this.props.auth){
      case null:
        return;
      case '':
        return;
      default:
        return (
          <>
          <h2>Timetable Page</h2>
          {this.renderTimetable()}
          <Link className="ui right floated button" to="/courses/new">Add Course</Link>
          </>
      );
    }
  }

  render(){
    // console.log(this.props.courses);
    this.classifyDay();
    return (
      <div>
        {this.checkUserRenderPage()}
      </div>
    );
  }
}

const mapStateToProps = ({ auth,courses }) => {
  return {auth,courses};
}

export default connect(mapStateToProps,{fetchCourses})(Timetable);
