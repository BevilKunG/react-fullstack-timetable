import React from 'react';

const CourseForm = () => {
  return (
    <form action="/courses" method="POST">
      <label htmlFor="name">Course Name</label>
      <input name="name" type="text" />

      <label>Duration</label>
      <input name="timeStart" type="time" />
      <input name="timeEnd" type="time" />

      <label htmlFor="place">Place</label>
      <input name="place" type="text" />

      <label htmlFor="instructor">Instructor</label>
      <input name="instructor" type="text" />

      <button>Submit</button>
    </form>
  );
}

export default CourseForm;
