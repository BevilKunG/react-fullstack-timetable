import React from 'react';

const CourseForm = () => {
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
          <div className="inline field">

          </div>
      </div>

      <div className="field">
        <label htmlFor="place">Place</label>
        <input name="place" type="text" />
      </div>

      <div className="field">
        <label htmlFor="instructor">Instructor</label>
        <input name="instructor" type="text" />
      </div>

      <button>Submit</button>
    </form>
  );
}

export default CourseForm;
