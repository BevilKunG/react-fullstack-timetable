import React from 'react';

const CourseForm = () => {
  return (
    <form action="/courses" method="POST">
      <label htmlFor="name">Course Name</label>
      <input name="name" type="text" />

      <label>Duration</label>
      <input name="time-start" type="time" />
      <input name="time-end" type="time" />

      <label htmlFor="Place">Place</label>
      <input name="place" type="text" />

      <label htmlFor="instructor">Instructor</label>
      <input name="instructor" type="text" />

      <button>Submit</button>
    </form>
  );
}

export default CourseForm;
