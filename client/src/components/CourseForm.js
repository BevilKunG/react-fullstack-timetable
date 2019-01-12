import React,{ Component } from 'react';

class CourseForm extends Component {
  renderCheckbox(day){
    return(
      <div className="ui checkbox">
        <input name={day} type="checkbox"/>
        <label>{day}</label>
      </div>
    );
  }

  render(){
    const days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
    return (
      <form action="/courses" method="POST" className="ui form">

        <div className="field">
          <label htmlFor="name">Course Name</label>
          <input name="name" type="text" />
        </div>

        <div className="field">
          <label>Duration</label>
          <div className="inline field">
            <input name="timeStart" type="time" />
            <input name="timeEnd" type="time" />
          </div>
        </div>

        <div className="field">
          {days.map(day => <div className="inline field">{this.renderCheckbox(day)}</div>)}
        </div>

        <div className="field">
          <label htmlFor="place">Place</label>
          <input name="place" type="text" />
        </div>

        <div className="field">
          <label htmlFor="instructor">Instructor</label>
          <input name="instructor" type="text" />
        </div>

        <button className="ui button">Submit</button>
      </form>
    );
  }
}

export default CourseForm;
