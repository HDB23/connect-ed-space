import { Request, Response } from 'express';
import { PerformanceData, CourseProgress, WeeklyActivity } from '../models';

export const getPerformanceData = async (req: Request, res: Response) => {
  try {
    // Mock data for performance analytics
    const performanceData: PerformanceData = {
      overallGrade: 'A-',
      improvement: '+7.2%',
      studyHours: 42.5,
      coursesCompleted: 6,
      globalRank: 'Top 10%',
      weeklyGoal: 85
    };
    
    res.status(200).json(performanceData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch performance data' });
  }
};

export const getCourseProgress = async (req: Request, res: Response) => {
  try {
    // Mock data for course progress
    const courseProgress: CourseProgress[] = [
      {
        course: 'Mathematics 101',
        progress: 85,
        grade: 'A',
        trend: 'up',
        change: '+5%'
      },
      {
        course: 'Physics Fundamentals',
        progress: 72,
        grade: 'B+',
        trend: 'stable',
        change: '0%'
      },
      {
        course: 'Chemistry Basics',
        progress: 60,
        grade: 'B-',
        trend: 'up',
        change: '+3%'
      }
    ];
    
    res.status(200).json(courseProgress);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch course progress' });
  }
};

export const getWeeklyActivity = async (req: Request, res: Response) => {
  try {
    // Mock data for weekly activity
    const weeklyActivity: WeeklyActivity[] = [
      { day: 'Monday', hours: 2.5, completed: 3 },
      { day: 'Tuesday', hours: 3.0, completed: 5 },
      { day: 'Wednesday', hours: 1.5, completed: 2 },
      { day: 'Thursday', hours: 4.0, completed: 6 },
      { day: 'Friday', hours: 2.0, completed: 4 },
      { day: 'Saturday', hours: 5.0, completed: 8 },
      { day: 'Sunday', hours: 3.5, completed: 5 }
    ];
    
    res.status(200).json(weeklyActivity);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weekly activity' });
  }
};