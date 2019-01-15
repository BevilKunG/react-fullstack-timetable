import React,{ Component } from 'react';

class DayRow extends Component {

  renderColumn(){
    return this.props.courses.map(course => {
      return (
        <div className="column" key={course._id}>
        <h3>{course.name}</h3>
        <h5>{course.place}</h5>
        <h5>{course.instructor}</h5>
        </div>
      );
    });
  }

  render(){
    // console.log(this.props);
    return (
      <div className="sixteen column row">
        <div className="column">{this.props.day}</div>
        {this.renderColumn()}
      </div>
    );
  }

}

export default DayRow;
