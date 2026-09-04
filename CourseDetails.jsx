import { Link, useParams } from "react-router-dom";

const courseDetails = {
  react: {
    title: "React Development",
    description: "Build component-based interfaces with props, state, and hooks.",
  },
  javascript: {
    title: "Modern JavaScript",
    description: "Learn modules, asynchronous code, and modern language features.",
  },
};

function CourseDetails() {
  const { id } = useParams();
  const course = courseDetails[id];

  if (!course) {
    return (
      <div className="content-panel">
        <h2>Course not found</h2>
        <Link to="/question-3/courses">Back to courses</Link>
      </div>
    );
  }

  return (
    <div className="content-panel">
      <p className="eyebrow">Course ID: {id}</p>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <Link to="/question-3/courses">Back to courses</Link>
    </div>
  );
}

export default CourseDetails;
