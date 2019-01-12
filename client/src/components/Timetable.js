import React from 'react';
import { Link } from 'react-router-dom';

const Timetable = () => {
  return (
    <div>
      <h2>Timetable Page</h2>
      <Link className="ui button" to="/courses/new">Add Course</Link>
    </div>
  );
}

export default Timetable;
