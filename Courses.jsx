import { Link } from "react-router-dom";

const courses = [
  { id: "react", title: "React Development", duration: "8 weeks" },
  { id: "javascript", title: "Modern JavaScript", duration: "6 weeks" },
];

function Courses() {
  return (
    <div className="content-panel">
      <h2>Available Courses</h2>
      <div className="course-list">
        {courses.map((course) => (
          <Link className="course-link" to={`/question-3/course/${course.id}`} key={course.id}>
            <strong>{course.title}</strong>
            <span>{course.duration}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Courses;
