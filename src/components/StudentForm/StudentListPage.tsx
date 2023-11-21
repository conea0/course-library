"use client";
import React, { FC, useState } from "react";
import StudentListItem from "./StudentListItem";
import StudentDetailPage from "./StudentDetailPage";
import StudentAddFormPage from "./StudentAddFormPage";
import { Student } from "@/types/student.type";
import styles from "./StudentListPage.module.css";
import CourseProgress from "./CourseProgress";

const studentsData: Student[] = [
  {
    id: "1",
    name: "John Doe",
    username: "john_doe",
    contact: "123-456-7890",
    progressData: [
      {
        id: 1,
        courseName: "Python",
        progress: 50,
        completedUnits: [1, 2],
      },
      { id: 2, courseName: "C#", progress: 75, completedUnits: [1] },
    ],
  },
  {
    id: "2",
    name: "Jane Doe",
    username: "jane_doe",
    contact: "987-654-3210",
    progressData: [
      { id: 3, courseName: "Python", progress: 30, completedUnits: [] },
      { id: 4, courseName: "C#", progress: 60, completedUnits: [1, 2] },
    ],
  },
  // Add more students with progress data
];

const StudentListPage: FC = () => {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handleStudentClick = (student: Student) => {
    setSelectedStudent(student);
    setSelectedButton(student.id);
  };

  const handleAddStudent = (newStudent: Student) => {
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
            <div key={student.id}>
              <StudentListItem
                student={student}
                selected={selectedButton === student.id}
                onClick={() => handleStudentClick(student)}
              />
              {selectedStudent && selectedStudent.id === student.id && (
                <div className={styles.courseProgress}>
                  <h2>{`${student.name}の学習の進捗率`}</h2>
                  {student.progressData.map((progress, index) => (
                    <div key={index}>
                      <h3>{`${progress.courseName}の進捗率`}</h3>
                      <CourseProgress studentProgress={progress} />
                    </div>
                  ))}
                </div>
              )}
            </div>
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