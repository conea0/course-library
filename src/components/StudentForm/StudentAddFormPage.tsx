/* eslint no-unused-vars: 0 */
"use client";
import { FC } from "react";
import StudentForm from "./StudentForm";
import { Student } from "@/./types/student.type";
import styles from "./StudentAddFormPage.module.css";

interface StudentAddFormPageProps {
  onAddStudent: (newStudent: Student) => void;
}

const StudentAddFormPage: FC<StudentAddFormPageProps> = ({ onAddStudent }) => {
  const handleAddStudent = (newStudent: Student) => {
    onAddStudent(newStudent);
  };

  return (
    <div className={styles.addFormContainer}>
      <h2 className={styles.addFormHeading}>生徒情報の追加</h2>
      <StudentForm onSubmit={handleAddStudent} />
    </div>
  );
};

export default StudentAddFormPage;
