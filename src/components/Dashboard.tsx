import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Users, 
  Video, 
  MessageCircle, 
  Clock, 
  Star, 
  TrendingUp, 
  Calendar,
  Play,
  ChevronRight,
  Globe
} from "lucide-react";

const Dashboard = () => {
  const courses = [
    {
      title: "Advanced Machine Learning",
      instructor: "Dr. Sarah Chen",
      progress: 68,
      nextClass: "Today, 2:00 PM",
      students: 156,
      rating: 4.8,
      flag: "🇺🇸"
    },
    {
      title: "Quantum Computing Fundamentals", 
      instructor: "Prof. Miguel Rodriguez",
      progress: 34,
      nextClass: "Tomorrow, 10:00 AM",
      students: 89,
      rating: 4.9,
      flag: "🇪🇸"
    },
    {
      title: "Sustainable Development Goals",
      instructor: "Dr. Aisha Patel",
      progress: 92,
      nextClass: "Wed, 3:30 PM",
      students: 234,
      rating: 4.7,
      flag: "🇮🇳"
    }
  ];

  const liveClasses = [
    {
      title: "Introduction to React Native",
      instructor: "Alex Thompson",
      time: "Now Live",
      viewers: 45,
      language: "EN/ES"
    },
    {
      title: "Data Science with Python",
      instructor: "Dr. Liu Wei",
      time: "Starting in 15 min",
      viewers: 78,
      language: "EN/CN"
    }
  ];

  return (
    <section className="py-20 bg-background-subtle">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">
              Learning Dashboard
            </span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            Your personalized learning hub with global courses, live classes, and collaborative tools
          </p>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Active Courses", value: "12", change: "+3" },
            { label: "Study Hours", value: "47h", change: "+8h" },
            { label: "Global Peers", value: "2.4K", change: "+156" },
            { label: "Certificates", value: "8", change: "+2" }
          ].map((stat, index) => (
            <Card 
              key={stat.label}
              className="p-6 gradient-card border-0 shadow-soft hover:shadow-medium hover-lift transition-smooth"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-foreground-muted font-medium">{stat.label}</p>
                <Badge variant="secondary" className="text-xs bg-success/10 text-success">
                  {stat.change}
                </Badge>
              </div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* My Courses */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-foreground">My Courses</h3>
              <Button variant="outline" size="sm" className="hover-scale transition-smooth">
                View All
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            
            <div className="space-y-4">
              {courses.map((course, index) => (
                <Card 
                  key={course.title}
                  className="p-6 gradient-card border-0 shadow-soft hover:shadow-medium hover-lift transition-smooth animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold text-foreground">{course.title}</h4>
                        <span className="text-lg">{course.flag}</span>
                      </div>
                      <p className="text-foreground-muted text-sm mb-2">by {course.instructor}</p>
                      <div className="flex items-center gap-4 text-sm text-foreground-subtle">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {course.students}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-warning text-warning" />
                          {course.rating}
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="hover-scale transition-smooth">
                      <Play className="w-4 h-4 mr-1" />
                      Continue
                    </Button>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="mb-3">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-foreground-muted">Progress</span>
                      <span className="text-foreground font-medium">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-background-muted rounded-full h-2">
                      <div 
                        className="gradient-primary h-2 rounded-full transition-all duration-500"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-foreground-subtle">
                    <Clock className="w-4 h-4" />
                    Next class: {course.nextClass}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Live Classes & Quick Actions */}
          <div className="space-y-6">
            {/* Live Classes */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Live Classes</h3>
              <div className="space-y-3">
                {liveClasses.map((liveClass, index) => (
                  <Card 
                    key={liveClass.title}
                    className="p-4 gradient-card border-0 shadow-soft hover:shadow-medium hover-lift transition-smooth"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-success">{liveClass.time}</span>
                    </div>
                    <h4 className="font-medium text-foreground mb-1">{liveClass.title}</h4>
                    <p className="text-sm text-foreground-muted mb-2">with {liveClass.instructor}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-foreground-subtle">
                        <Video className="w-3 h-3" />
                        {liveClass.viewers} viewers
                        <Globe className="w-3 h-3 ml-1" />
                        {liveClass.language}
                      </div>
                      <Button size="sm" variant="secondary" className="text-xs hover-scale transition-smooth">
                        Join
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <Card className="p-6 gradient-card border-0 shadow-soft">
              <h3 className="text-xl font-bold text-foreground mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button className="w-full justify-start gradient-primary text-primary-foreground hover-scale transition-smooth">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Join Study Group
                </Button>
                <Button variant="outline" className="w-full justify-start hover-scale transition-smooth">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Session
                </Button>
                <Button variant="outline" className="w-full justify-start hover-scale transition-smooth">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;