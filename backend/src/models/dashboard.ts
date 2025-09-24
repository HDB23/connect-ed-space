// Dashboard stats interface
export interface DashboardStats {
  label: string;
  value: string;
  change: string;
}

// Course interface
export interface Course {
  id: number;
  title: string;
  instructor: string;
  progress: number;
  nextClass: string;
  students: number;
  rating: number;
  flag: string;
}

// Live class interface
export interface LiveClass {
  id: number;
  title: string;
  instructor: string;
  time: string;
  viewers: number;
  language: string;
}