import { Link, Navigate, Route, Routes } from "react-router-dom";
import StudentProfile from "./question1/StudentProfile";
import StudentRegistration from "./question2/StudentRegistration";
import CourseManagement from "./question3/CourseManagement";
import CourseHome from "./question3/CourseHome";
import Courses from "./question3/Courses";
import CourseDetails from "./question3/CourseDetails";
import About from "./question3/About";

function App() {
  return (
    <main className="app-shell">
      <header className="site-header">
        <Link className="brand" to="/">
          Student React Practicals
        </Link>
        <nav aria-label="Practical questions">
          <Link to="/question-1">Question 1</Link>
          <Link to="/question-2">Question 2</Link>
          <Link to="/question-3">Question 3</Link>
        </nav>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <section className="hero">
              <p className="eyebrow">React practical questions</p>
              <h1>Student applications, built separately.</h1>
              <p>
                Use the navigation above to view each answer independently.
              </p>
              <Link className="button" to="/question-1">
                Start with Question 1
              </Link>
            </section>
          }
        />
        <Route path="/question-1" element={<StudentProfile />} />
        <Route path="/question-2" element={<StudentRegistration />} />
        <Route path="/question-3" element={<CourseManagement />}>
          <Route index element={<CourseHome />} />
          <Route path="courses" element={<Courses />} />
          <Route path="course/:id" element={<CourseDetails />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  );
}

export default App;
