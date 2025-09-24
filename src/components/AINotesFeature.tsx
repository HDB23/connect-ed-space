import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  FileText, 
  Sparkles, 
  Download,
  Share2,
  BookOpen,
  Clock,
  TrendingUp,
  ChevronRight,
  Wand2,
  Lightbulb
} from "lucide-react";
import { useState } from "react";

const AINotesFeature = () => {
  const [activeTab, setActiveTab] = useState("summary");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  
  const lectureData = {
    title: "Introduction to Machine Learning",
    duration: "1h 23m",
    date: "Today, 2:00 PM",
    instructor: "Dr. Sarah Chen",
    topics: ["Supervised Learning", "Neural Networks", "Data Preprocessing", "Model Evaluation"]
  };

  const aiNotes = {
    summary: {
      title: "Lecture Summary",
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
      title: "Key Points",
      content: [
        "Machine learning is a subset of AI that enables systems to learn without explicit programming",
        "Neural networks are inspired by biological neural networks in the human brain",
        "Data preprocessing is crucial - 'Garbage in, garbage out' principle applies",
        "Overfitting occurs when model learns training data too well, reducing generalization",
        "Cross-validation technique helps assess model performance on unseen data"
      ],
      confidence: 91
    },
    questions: {
      title: "Study Questions",
      content: [
        "What are the main differences between supervised and unsupervised learning?",
        "How do neural networks process information through layers?",
        "Why is data preprocessing essential before training ML models?",
        "What metrics would you use to evaluate a binary classification model?",
        "How can cross-validation help prevent overfitting?"
      ],
      confidence: 89
    }
  };

  const handleRegenerateNotes = async () => {
    setIsGenerating(true);
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsGenerating(false);
    console.log("Notes regenerated with latest AI model");
  };

  const handleExport = async (format: string) => {
    setIsExporting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsExporting(false);
    console.log(`Exported notes as ${format}`);
  };

  const handleShare = () => {
    console.log("Sharing notes...");
    // In a real app, this would open share options
  };

  const handleGenerateAnswer = (questionIndex: number) => {
    console.log(`Generating answer for question ${questionIndex + 1}`);
    // In a real app, this would use AI to generate an answer
  };

  return (
    <section id="ai-notes" className="py-20 bg-background-subtle">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-6">
            <Brain className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">AI-Powered Learning</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">
              Smart Note Summarization
            </span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Advanced AI automatically generates comprehensive notes, key points, and study questions 
            from lectures, saving you hours and improving retention.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lecture Info & Controls */}
          <div className="space-y-6">
            <Card className="p-6 gradient-card border-0 shadow-medium relative overflow-hidden">
              {isGenerating && (
                <div className="absolute inset-0 bg-secondary/5 flex items-center justify-center z-10">
                  <div className="flex items-center gap-2 text-secondary">
                    <Brain className="w-5 h-5 animate-pulse" />
                    <span className="text-sm font-medium">AI Processing...</span>
                  </div>
                </div>
              )}
              
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-3 h-3 rounded-full animate-pulse ${isGenerating ? 'bg-warning' : 'bg-success'}`}></div>
                <span className={`text-sm font-medium ${isGenerating ? 'text-warning' : 'text-success'}`}>
                  {isGenerating ? 'AI Processing...' : 'AI Processing Complete'}
                </span>
              </div>
              
              <h3 className="font-bold text-foreground mb-2">{lectureData.title}</h3>
              <p className="text-foreground-muted text-sm mb-4">with {lectureData.instructor}</p>
              
              <div className="space-y-2 text-sm text-foreground-subtle mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{lectureData.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>{lectureData.date}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-foreground mb-2">Topics Covered</h4>
                <div className="flex flex-wrap gap-2">
                  {lectureData.topics.map((topic) => (
                    <Badge key={topic} variant="secondary" className="text-xs bg-primary/10 text-primary">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  className="w-full gradient-primary text-primary-foreground hover-scale transition-smooth"
                  onClick={handleRegenerateNotes}
                  disabled={isGenerating}
                >
                  <Wand2 className="w-4 h-4 mr-2" />
                  {isGenerating ? 'Regenerating...' : 'Regenerate Notes'}
                </Button>
                <div className="grid grid-cols-2 gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="hover-scale transition-smooth"
                    onClick={() => handleExport('PDF')}
                    disabled={isExporting}
                  >
                    <Download className="w-4 h-4 mr-1" />
                    {isExporting ? 'Exporting...' : 'Export'}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="hover-scale transition-smooth"
                    onClick={handleShare}
                  >
                    <Share2 className="w-4 h-4 mr-1" />
                    Share
                  </Button>
                </div>
              </div>
            </Card>

            {/* AI Stats */}
            <Card className="p-6 gradient-card border-0 shadow-medium group hover:shadow-large transition-smooth">
              <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-secondary group-hover:animate-pulse" />
                AI Insights
              </h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-foreground-muted text-sm">Processing Accuracy</span>
                  <Badge variant="secondary" className="bg-success/10 text-success group-hover:scale-105 transition-smooth">98.5%</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground-muted text-sm">Key Points Extracted</span>
                  <Badge variant="secondary" className="bg-primary/10 text-primary group-hover:scale-105 transition-smooth">24</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground-muted text-sm">Study Questions</span>
                  <Badge variant="secondary" className="bg-warning/10 text-warning group-hover:scale-105 transition-smooth">15</Badge>
                </div>
              </div>
            </Card>
          </div>

          {/* AI Generated Notes */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tabs */}
            <div className="flex gap-2 p-1 bg-background-muted rounded-xl">
              {[
                { key: "summary", label: "Summary", icon: FileText },
                { key: "keypoints", label: "Key Points", icon: Lightbulb },
                { key: "questions", label: "Study Questions", icon: TrendingUp }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex-1 justify-center ${
                    activeTab === tab.key
                      ? "bg-card shadow-soft text-foreground scale-105"
                      : "text-foreground-muted hover:text-foreground"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Note Content */}
            <Card className="gradient-card border-0 shadow-medium min-h-[500px] relative overflow-hidden">
              {isGenerating && (
                <div className="absolute inset-0 bg-primary/5 flex items-center justify-center z-10">
                  <div className="text-center">
                    <Brain className="w-8 h-8 text-primary mx-auto mb-2 animate-pulse" />
                    <p className="text-sm text-primary font-medium">AI is analyzing the lecture...</p>
                  </div>
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <Brain className="w-5 h-5 text-secondary" />
                    {aiNotes[activeTab as keyof typeof aiNotes].title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-foreground-muted">AI Confidence:</span>
                    <Badge variant="secondary" className="bg-success/10 text-success">
                      {aiNotes[activeTab as keyof typeof aiNotes].confidence}%
                    </Badge>
                  </div>
                </div>

                <div className="prose prose-sm max-w-none">
                  {activeTab === "summary" && (
                    <div className="text-foreground leading-relaxed whitespace-pre-line">
                      {aiNotes.summary.content}
                    </div>
                  )}
                  
                  {activeTab === "keypoints" && (
                    <div className="space-y-3">
                      {aiNotes.keypoints.content.map((point, index) => (
                        <div 
                          key={index}
                          className="flex items-start gap-3 p-4 bg-background-subtle rounded-lg hover:bg-background-muted transition-smooth hover-lift group"
                        >
                          <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-1 group-hover:scale-110 transition-smooth">
                            {index + 1}
                          </div>
                          <p className="text-foreground leading-relaxed">{point}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {activeTab === "questions" && (
                    <div className="space-y-3">
                      {aiNotes.questions.content.map((question, index) => (
                        <div 
                          key={index}
                          className="flex items-start gap-3 p-4 bg-background-subtle rounded-lg hover:bg-background-muted transition-smooth hover-lift group"
                        >
                          <div className="w-6 h-6 rounded-full bg-secondary/20 text-secondary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-1 group-hover:scale-110 transition-smooth">
                            Q{index + 1}
                          </div>
                          <div className="flex-1">
                            <p className="text-foreground leading-relaxed mb-2">{question}</p>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="text-xs hover-scale transition-smooth"
                              onClick={() => handleGenerateAnswer(index)}
                            >
                              Generate Answer
                              <ChevronRight className="w-3 h-3 ml-1" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: Wand2, title: "Auto-highlight", desc: "Mark important sections", color: "primary", action: () => console.log("Auto-highlighting...") },
                { icon: Lightbulb, title: "Generate Quiz", desc: "Test your knowledge", color: "secondary", action: () => console.log("Generating quiz...") },
                { icon: TrendingUp, title: "Study Plan", desc: "Personalized schedule", color: "success", action: () => console.log("Creating study plan...") }
              ].map((action, index) => (
                <Card 
                  key={action.title}
                  className="p-4 gradient-card border-0 shadow-soft hover:shadow-medium hover-lift transition-smooth cursor-pointer group"
                  onClick={action.action}
                >
                  <action.icon className={`w-6 h-6 text-${action.color} mb-2 group-hover:scale-110 transition-smooth`} />
                  <h4 className="font-medium text-foreground text-sm mb-1">{action.title}</h4>
                  <p className="text-xs text-foreground-muted">{action.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AINotesFeature;