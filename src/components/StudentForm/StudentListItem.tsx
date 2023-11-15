// 生徒一覧のアイテム
"use client";
import { FC } from "react";
import { Student } from "../../../../types";
import styles from "./StudentListItem.module.css";

interface StudentListItemProps {
  student: Student;
  selected: boolean;
  onClick: () => void;
}

const StudentListItem: FC<StudentListItemProps> = ({
  student,
  selected,
  onClick,
}) => {
  return (
    <div
      className={`${styles.listItem} ${selected ? styles.clicked : ""}`}
      onClick={onClick}
    >
      {student.name} さん
    </div>
  );
};

export default StudentListItem;
