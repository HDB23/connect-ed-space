// AI Notes interface
export interface AINotes {
  summary: NoteType;
  keypoints: NoteType;
  questions: NoteType;
}

// Note type interface
export interface NoteType {
  title: string;
  content: string | string[];
  confidence: number;
}

// Lecture data interface
export interface LectureData {
  id: number;
  title: string;
  duration: string;
  date: string;
  instructor: string;
  topics: string[];
}