import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Clock, 
  Target,
  Award,
  Calendar,
  ArrowUp,
  ArrowDown,
  Eye,
  Download,
  Filter
} from "lucide-react";

const AnalyticsFeature = () => {
  const performanceData = {
    overallGrade: "A-",
    improvement: "+12%",
    studyHours: 47,
    coursesCompleted: 8,
    globalRank: "Top 15%",
    weeklyGoal: 85
  };

  const courseProgress = [
    { course: "Machine Learning", progress: 92, grade: "A", trend: "up", change: "+8%" },
    { course: "Data Science", progress: 76, grade: "B+", trend: "up", change: "+15%" },
    { course: "Web Development", progress: 88, grade: "A-", trend: "stable", change: "0%" },
    { course: "Mobile Development", progress: 45, grade: "C+", trend: "down", change: "-3%" }
  ];

  const weeklyActivity = [
    { day: "Mon", hours: 2.5, completed: 3 },
    { day: "Tue", hours: 4.0, completed: 5 },
    { day: "Wed", hours: 3.5, completed: 4 },
    { day: "Thu", hours: 2.0, completed: 2 },
    { day: "Fri", hours: 5.5, completed: 7 },
    { day: "Sat", hours: 3.0, completed: 4 },
    { day: "Sun", hours: 1.5, completed: 1 }
  ];

  const maxHours = Math.max(...weeklyActivity.map(d => d.hours));

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-success/10 text-success mb-6">
            <BarChart3 className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Data-Driven Learning</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">
              Performance Analytics
            </span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Comprehensive insights into learning patterns, progress tracking, and personalized 
            recommendations to optimize your educational journey.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-12">
          {[
            { label: "Overall Grade", value: performanceData.overallGrade, change: performanceData.improvement, icon: Award, color: "primary" },
            { label: "Study Hours", value: performanceData.studyHours + "h", change: "+8h", icon: Clock, color: "secondary" },
            { label: "Completed", value: performanceData.coursesCompleted, change: "+2", icon: Target, color: "success" },
            { label: "Global Rank", value: performanceData.globalRank, change: "↑5%", icon: TrendingUp, color: "warning" },
            { label: "Weekly Goal", value: performanceData.weeklyGoal + "%", change: "+12%", icon: Calendar, color: "primary" },
            { label: "Peer Network", value: "2.4K", change: "+156", icon: Users, color: "secondary" }
          ].map((metric, index) => (
            <Card 
              key={metric.label}
              className="p-4 gradient-card border-0 shadow-soft hover:shadow-medium hover-lift transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-2">
                <metric.icon className={`w-5 h-5 text-${metric.color}`} />
                <Badge variant="secondary" className={`text-xs bg-${metric.color}/10 text-${metric.color}`}>
                  {metric.change}
                </Badge>
              </div>
              <p className="text-lg font-bold text-foreground">{metric.value}</p>
              <p className="text-xs text-foreground-muted">{metric.label}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Course Performance */}
          <Card className="p-6 gradient-card border-0 shadow-medium">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-foreground">Course Performance</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="hover-scale transition-smooth">
                  <Filter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="hover-scale transition-smooth">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              {courseProgress.map((course, index) => (
                <div 
                  key={course.course}
                  className="p-4 bg-background-subtle rounded-xl hover:bg-background-muted transition-smooth hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-medium text-foreground">{course.course}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">
                          {course.grade}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs">
                          {course.trend === "up" && <ArrowUp className="w-3 h-3 text-success" />}
                          {course.trend === "down" && <ArrowDown className="w-3 h-3 text-destructive" />}
                          {course.trend === "stable" && <div className="w-3 h-0.5 bg-foreground-muted"></div>}
                          <span className={`font-medium ${
                            course.trend === "up" ? "text-success" : 
                            course.trend === "down" ? "text-destructive" : "text-foreground-muted"
                          }`}>
                            {course.change}
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-foreground">{course.progress}%</span>
                  </div>
                  
                  <div className="w-full bg-background-muted rounded-full h-2">
                    <div 
                      className="gradient-primary h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Weekly Activity Chart */}
          <Card className="p-6 gradient-card border-0 shadow-medium">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-foreground">Weekly Activity</h3>
              <Button variant="outline" size="sm" className="hover-scale transition-smooth">
                <Eye className="w-4 h-4 mr-1" />
                Details
              </Button>
            </div>
            
            <div className="space-y-6">
              {/* Chart */}
              <div className="flex items-end justify-between gap-2 h-32">
                {weeklyActivity.map((day, index) => (
                  <div key={day.day} className="flex flex-col items-center flex-1">
                    <div className="w-full flex flex-col justify-end h-24 mb-2">
                      <div 
                        className="w-full gradient-primary rounded-t-md transition-all duration-1000 hover:shadow-glow cursor-pointer"
                        style={{ 
                          height: `${(day.hours / maxHours) * 100}%`,
                          animationDelay: `${index * 0.1}s`
                        }}
                        title={`${day.hours} hours`}
                      ></div>
                    </div>
                    <span className="text-xs text-foreground-muted font-medium">{day.day}</span>
                  </div>
                ))}
              </div>

              {/* Activity Summary */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-background-subtle rounded-xl">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground-muted">Total Hours</span>
                  </div>
                  <p className="text-xl font-bold text-foreground">22h</p>
                  <p className="text-xs text-success">+3h from last week</p>
                </div>
                <div className="p-4 bg-background-subtle rounded-xl">
                  <div className="flex items-center gap-2 mb-1">
                    <Target className="w-4 h-4 text-secondary" />
                    <span className="text-sm text-foreground-muted">Lessons Done</span>
                  </div>
                  <p className="text-xl font-bold text-foreground">26</p>
                  <p className="text-xs text-success">+7 from last week</p>
                </div>
              </div>

              {/* Weekly Goal Progress */}
              <div className="p-4 bg-background-subtle rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">Weekly Goal Progress</span>
                  <span className="text-sm font-bold text-foreground">{performanceData.weeklyGoal}%</span>
                </div>
                <div className="w-full bg-background-muted rounded-full h-2">
                  <div 
                    className="gradient-primary h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${performanceData.weeklyGoal}%` }}
                  ></div>
                </div>
                <p className="text-xs text-success mt-2">You're ahead of schedule! 🎉</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Insights & Recommendations */}
        <Card className="mt-8 p-6 gradient-card border-0 shadow-medium">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            AI-Generated Insights
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-background-subtle rounded-xl">
              <h4 className="font-medium text-foreground mb-2">🚀 Strength</h4>
              <p className="text-sm text-foreground-muted leading-relaxed">
                Your consistency in Machine Learning is exceptional. You're in the top 5% for completion rate.
              </p>
            </div>
            <div className="p-4 bg-background-subtle rounded-xl">
              <h4 className="font-medium text-foreground mb-2">💡 Opportunity</h4>
              <p className="text-sm text-foreground-muted leading-relaxed">
                Focus more on Mobile Development - 30 minutes daily could boost your grade to B+ by month end.
              </p>
            </div>
            <div className="p-4 bg-background-subtle rounded-xl">
              <h4 className="font-medium text-foreground mb-2">🎯 Goal</h4>
              <p className="text-sm text-foreground-muted leading-relaxed">
                Maintain current pace to achieve your target grade of A across all courses by semester end.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AnalyticsFeature;