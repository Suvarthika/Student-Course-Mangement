import { Link, Outlet } from "react-router-dom";
import { StudentProvider, useStudent } from "./StudentContext";

function StudentSummary() {
  const student = useStudent();

  return (
    <aside className="student-summary">
      <p className="eyebrow">Shared student information</p>
      <strong>{student.name}</strong>
      <span>{student.email}</span>
      <span>{student.course}</span>
    </aside>
  );
}

function CourseManagement() {
  return (
    <StudentProvider>
      <section className="page">
        <p className="eyebrow">Practical Question 3</p>
        <h1>Student Course Management</h1>
        <p className="intro">
          React Router handles the pages and dynamic course URLs. The Context
          API shares the student summary across this mini project.
        </p>
        <div className="management-layout">
          <StudentSummary />
          <div className="management-content">
            <nav className="subnav" aria-label="Course management">
              <Link to="/question-3">Home</Link>
              <Link to="/question-3/courses">Courses</Link>
              <Link to="/question-3/about">About</Link>
            </nav>
            <Outlet />
          </div>
        </div>
      </section>
    </StudentProvider>
  );
}

export default CourseManagement;
