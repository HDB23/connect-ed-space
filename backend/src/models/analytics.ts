// Performance data interface
export interface PerformanceData {
  overallGrade: string;
  improvement: string;
  studyHours: number;
  coursesCompleted: number;
  globalRank: string;
  weeklyGoal: number;
}

// Course progress interface
export interface CourseProgress {
  course: string;
  progress: number;
  grade: string;
  trend: 'up' | 'down' | 'stable';
  change: string;
}

// Weekly activity interface
export interface WeeklyActivity {
  day: string;
  hours: number;
  completed: number;
}