import { Award } from 'lucide-react';
import { 
  ReactIcon, 
  NodeIcon,
  ExpressIcon,
  PythonIcon, 
  MongoDbIcon, 
  FirebaseIcon, 
  HtmlIcon,
  CssIcon,
  MySqlIcon 
} from './icons';

const skills = [
  { icon: <ReactIcon className="h-10 w-10 text-blue-400 mb-3 group-hover:scale-110 transition-transform" />, name: "React.js" },
  { icon: <NodeIcon className="h-10 w-10 text-green-500 mb-3 group-hover:scale-110 transition-transform" />, name: "Node.js" },
  { icon: <ExpressIcon className="h-10 w-10 text-slate-400 mb-3 group-hover:scale-110 transition-transform" />, name: "Express.js" },
  { icon: <PythonIcon className="h-10 w-10 mb-3 group-hover:scale-110 transition-transform" />, name: "Python" },
  { icon: <MongoDbIcon className="h-10 w-10 text-green-400 mb-3 group-hover:scale-110 transition-transform" />, name: "MongoDB" },
  { icon: <FirebaseIcon className="h-10 w-10 mb-3 group-hover:scale-110 transition-transform" />, name: "Firebase" },
  { icon: <HtmlIcon className="h-10 w-10 mb-3 group-hover:scale-110 transition-transform" />, name: "HTML5" },
  { icon: <CssIcon className="h-10 w-10 mb-3 group-hover:scale-110 transition-transform" />, name: "CSS3" },
  { icon: <MySqlIcon className="h-10 w-10 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />, name: "MySQL" },
  { icon: <Award className="h-10 w-10 text-purple-400 mb-3 group-hover:scale-110 transition-transform" />, name: "Web Design" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            <span className="text-primary">01.</span> My Technical Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {skills.map((skill, index) => (
            <div key={index} className="p-6 bg-background rounded-xl border border-white/5 hover:border-primary/50 transition-colors group flex flex-col items-center justify-center">
              {skill.icon}
              <h3 className="text-white font-medium mt-2">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
