//生徒の詳細情報を表示するページ
"use client";
import { FC, useState } from "react";
import { Student } from "@/types/student.type";
import styles from "./StudentDetailPage.module.css";

interface StudentDetailPageProps {
  student: Student;
}

const StudentDetailPage: FC<StudentDetailPageProps> = ({ student }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedStudent, setEditedStudent] = useState<Student>({ ...student });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // データを保存するロジックをここに実装
    console.log("編集した生徒情報を保存:", editedStudent);
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedStudent({
      ...editedStudent,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className={styles.head}>
        <h2 className={styles.heading}>生徒の管理</h2>
      </div>
      <div className={isEditing ? styles.editForm : styles.detailContainer}>
        {isEditing ? (
          <div>
            <h2 className={styles.editHeading}>生徒情報の編集</h2>
            <label>名前:</label>
            <input
              type="text"
              name="name"
              value={editedStudent.name}
              onChange={handleChange}
              className={styles.editItem}
            />
            <label>ユーザーネーム:</label>
            <input
              type="text"
              name="username"
              value={editedStudent.username}
              onChange={handleChange}
              className={styles.editItem}
            />
            <label>連絡先:</label>
            <input
              type="text"
              name="contact"
              value={editedStudent.contact}
              onChange={handleChange}
              className={styles.editItem}
            />
            <button onClick={handleSaveClick} className={styles.editButton}>
              保存
            </button>
          </div>
        ) : (
          <div>
            <h2 className={styles.detailHeading}>{student.name} の詳細情報</h2>
            <p className={styles.detailItem}>
              ユーザーネーム: {student.username}
            </p>
            <p className={styles.detailItem}>連絡先: {student.contact}</p>
            {/* 他の詳細情報を表示 */}
            <button onClick={handleEditClick} className={styles.editButton}>
              編集
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDetailPage;
