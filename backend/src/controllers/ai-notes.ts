import { Request, Response } from 'express';
import type { AINotes, LectureData } from '../models';

// Get lecture data
export const getLectureData = (req: Request, res: Response) => {
  const lectureData: LectureData = {
    id: 1,
    title: 'Introduction to Machine Learning',
    duration: '1h 23m',
    date: 'Today, 2:00 PM',
    instructor: 'Dr. Sarah Chen',
    topics: ['Supervised Learning', 'Neural Networks', 'Data Preprocessing', 'Model Evaluation']
  };
  res.json(lectureData);
};

// Get AI notes for a lecture
export const getAINotes = (req: Request, res: Response) => {
  const { type } = req.query;
  
  const aiNotes: AINotes = {
    summary: {
      title: 'Lecture Summary',
      content: `
**Key Concepts Covered:**
• Machine Learning fundamentals and types (supervised, unsupervised, reinforcement)
• Neural network architecture and basic components
• Data preprocessing techniques and importance of data quality
• Model evaluation metrics (accuracy, precision, recall, F1-score)

**Important Points:**
• Quality of data is more critical than quantity for model performance
• Cross-validation helps prevent overfitting in machine learning models
• Feature engineering can significantly improve model accuracy

**Action Items:**
• Complete Chapter 3 exercises on supervised learning
• Practice data preprocessing with provided dataset
• Review neural network fundamentals before next class
      `,
      confidence: 94
    },
    keypoints: {
      title: 'Key Points',
      content: [
        'Machine learning is a subset of AI that enables systems to learn without explicit programming',
        'Neural networks are inspired by biological neural networks in the human brain',
        'Data preprocessing is crucial - \'Garbage in, garbage out\' principle applies',
        'Overfitting occurs when model learns training data too well, reducing generalization',
        'Cross-validation technique helps assess model performance on unseen data'
      ],
      confidence: 91
    },
    questions: {
      title: 'Study Questions',
      content: [
        'What are the main differences between supervised and unsupervised learning?',
        'How do neural networks process information through layers?',
        'Why is data preprocessing essential before training ML models?',
        'What metrics would you use to evaluate a binary classification model?',
        'How can cross-validation help prevent overfitting?'
      ],
      confidence: 89
    }
  };
  
  if (type && typeof type === 'string' && aiNotes[type as keyof AINotes]) {
    res.json(aiNotes[type as keyof AINotes]);
  } else {
    res.json(aiNotes);
  }
};