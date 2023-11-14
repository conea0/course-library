"use client";
import { FC, useState } from "react";
import StudentListItem from "./StudentListItem";
import StudentDetailPage from "./StudentDetailPage";
import StudentAddFormPage from "./StudentAddFormPage";
import { Student } from "../../../../types";
import styles from "./StudentListPage.module.css";

const studentsData: Student[] = [
  { id: "1", name: "John Doe", username: "john_doe", contact: "123-456-7890" },
  { id: "2", name: "Jane Doe", username: "jane_doe", contact: "987-654-3210" },
  { id: "3", name: "Abc Def", username: "aaaaaaaaa", contact: "012-346-6789" },
  { id: "4", name: "Ghi Jkl", username: "bbbbbbbbb", contact: "135-246-7890" },
  // 必要に応じて他の生徒を追加
];

const StudentListPage: FC = () => {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handleStudentClick = (student: Student) => {
    setSelectedStudent(student);
    // クリックされた生徒の id をセットしていますが、実際のアプリケーションによっては別の識別子が必要かもしれません
    setSelectedButton(student.id);
  };

  const handleAddStudent = (newStudent: Student) => {
    // データベースに新しい生徒を追加するロジックを実装
    console.log("新しい生徒を追加:", newStudent);
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.adminText}>
          <p className={styles.small}>For Administrator</p>
          <h2 className={styles.heading}>管理者用ページ</h2>
        </div>
        <div className={styles.mark}></div>
        <div className={styles.studentList}>
          {studentsData.map((student) => (
            <StudentListItem
              key={student.id}
              student={student}
              selected={selectedButton === student.id}
              onClick={() => handleStudentClick(student)}
            />
          ))}
        </div>
      </div>
      <div className={styles.detailContainer}>
        {selectedStudent ? (
          <StudentDetailPage student={selectedStudent} />
        ) : (
          <div className={styles.addFormCard}>
            <StudentAddFormPage onAddStudent={handleAddStudent} />
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentListPage;
