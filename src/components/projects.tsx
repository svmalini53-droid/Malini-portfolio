import { PlaneTakeoff, Wallet, Baby } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from './ui/button';

const projects = [
  {
    icon: <PlaneTakeoff className="h-12 w-12 text-white/20" />,
    title: "Dynamic Trip Planner",
    description: "A responsive travel planner with real-time user profile management and Firebase Authentication.",
    tags: ["TypeScript", "Tailwind", "Firebase"],
    gradient: "from-blue-900 to-cyan-900",
  },
  {
    icon: <Wallet className="h-12 w-12 text-white/20" />,
    title: "Expense Tracker App",
    description: "A MERN stack application to manage income and expenses with a dashboard UI and CRUD operations.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    gradient: "from-green-900 to-emerald-900",
  },
  {
    icon: <Baby className="h-12 w-12 text-white/20" />,
    title: "Child Care Management",
    description: "A web app for childcare operations including registration, scheduling, and health tracking.",
    tags: ["Python", "MySQL", "HTML/CSS"],
    gradient: "from-orange-900 to-red-900",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            <span className="text-primary">02.</span> Featured Projects
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Recent work from my portfolio.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card overflow-hidden border-white/10 hover:border-primary/50 transition-all hover:-translate-y-2 group">
              <CardHeader className={`h-48 relative overflow-hidden p-0`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
                  {project.icon}
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 h-20">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
                <a href="https://travel-malu.vercel.app/" target="_blank" rel="noopener noreferrer">
                    View Live Project
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
