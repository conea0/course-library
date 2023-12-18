export interface Student {
  id: string;
  name: string;
  username: string;
  contact: string;
  progressData: ProgressType[]
}

interface ProgressType {
  id: number;
  courseName: string;
  progress: number;
  completedUnits: number[];
}
