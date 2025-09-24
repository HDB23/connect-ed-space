import { Request, Response } from 'express';
import type { DashboardStats, Course, LiveClass } from '../models';

// Dashboard stats endpoint
export const getDashboardStats = (req: Request, res: Response) => {
  const stats: DashboardStats[] = [
    { label: 'Active Courses', value: '12', change: '+3' },
    { label: 'Study Hours', value: '47h', change: '+8h' },
    { label: 'Global Peers', value: '2.4K', change: '+156' },
    { label: 'Certificates', value: '8', change: '+2' }
  ];
  res.json(stats);
};

// Courses endpoint
export const getCourses = (req: Request, res: Response) => {
  const courses: Course[] = [
    {
      id: 1,
      title: 'Advanced Machine Learning',
      instructor: 'Dr. Sarah Chen',
      progress: 68,
      nextClass: 'Today, 2:00 PM',
      students: 156,
      rating: 4.8,
      flag: '🇺🇸'
    },
    {
      id: 2,
      title: 'Quantum Computing Fundamentals', 
      instructor: 'Prof. Miguel Rodriguez',
      progress: 34,
      nextClass: 'Tomorrow, 10:00 AM',
      students: 89,
      rating: 4.9,
      flag: '🇪🇸'
    },
    {
      id: 3,
      title: 'Sustainable Development Goals',
      instructor: 'Dr. Aisha Patel',
      progress: 92,
      nextClass: 'Wed, 3:30 PM',
      students: 234,
      rating: 4.7,
      flag: '🇮🇳'
    }
  ];
  res.json(courses);
};

// Live classes endpoint
export const getLiveClasses = (req: Request, res: Response) => {
  const liveClasses: LiveClass[] = [
    {
      id: 1,
      title: 'Introduction to React Native',
      instructor: 'Alex Thompson',
      time: 'Now Live',
      viewers: 45,
      language: 'EN/ES'
    },
    {
      id: 2,
      title: 'Data Science with Python',
      instructor: 'Dr. Liu Wei',
      time: 'Starting in 15 min',
      viewers: 78,
      language: 'EN/CN'
    }
  ];
  res.json(liveClasses);
};