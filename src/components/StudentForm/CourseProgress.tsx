import React, { useState } from 'react';
import styles from "./CourseProgress.module.css";

interface StudentProgress {
  id: number;
  courseName: string;
  progress: number;
  totalUnits: number;
  completedUnits: number[];
}

interface CourseProgressProps {
  studentProgress: StudentProgress;
}

const CourseProgress: React.FC<CourseProgressProps> = ({ studentProgress }) => {
  const { courseName, progress, totalUnits, completedUnits } = studentProgress;
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const isCourseCompleted = completedUnits.length === totalUnits;
  const progressBarStyle = {
    width: isCourseCompleted ? '100%' : `${progress}%`,
  };

  const handleDetailsClick = () => {
    setShowDetails(!showDetails);
  };

  // 仮の詳細情報
  const partProgress = 75;
  const unitProgress = 90;
  const problemProgress = 100;

  return (
    <div className={styles.courseBox}>
      <div className={styles.courseHeader}>
        <h2>{courseName}</h2>
        <button onClick={handleDetailsClick}>{showDetails ? '非表示' : '詳細'}</button>
      </div>
      <div className={`${styles.progressBar} ${isCourseCompleted && styles.completed}`}>
        <div className={styles.progress} style={progressBarStyle}>
          {isCourseCompleted && <div className={styles.completedMarker}>完了</div>}
        </div>
      </div>
      {showDetails && (
        <div className={styles.progressDetails}>
          <p>{`コース進捗率: ${progress.toFixed(2)}% 完了`}</p>
          <p>{`パート進捗率: ${partProgress.toFixed(2)}% 完了`}</p>
          <p>{`ユニット進捗率: ${unitProgress.toFixed(2)}% 完了`}</p>
          <p>{`問題進捗率: ${problemProgress.toFixed(2)}% 完了`}</p>
        </div>
      )}
    </div>
  );
};

export default CourseProgress;
