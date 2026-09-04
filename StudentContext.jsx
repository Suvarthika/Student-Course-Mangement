import { createContext, useContext } from "react";

const StudentContext = createContext(null);

export function StudentProvider({ children }) {
  const student = {
    name: "Ananya Rao",
    email: "ananya@example.com",
    course: "Computer Science",
  };

  return (
    <StudentContext.Provider value={student}>{children}</StudentContext.Provider>
  );
}

export function useStudent() {
  const student = useContext(StudentContext);
  if (!student) {
    throw new Error("useStudent must be used inside StudentProvider");
  }
  return student;
}
