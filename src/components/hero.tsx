'use client';

import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { PythonIcon, ReactIcon, NodeIcon } from '@/components/icons';
import { Wand2, LoaderCircle } from 'lucide-react';
import { enhanceBioWithAI, EnhanceBioWithAIInput } from '@/ai/flows/enhance-bio-with-ai';
import { useToast } from '@/hooks/use-toast';

const initialBio = "I am a motivated MCA final-year student with strong technical and problem-solving skills. I specialize in building creative web projects using the MERN stack and am eager to build a successful career in a dynamic organization.";

export default function Hero() {
  const [bio, setBio] = useState(initialBio);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleEnhanceBio = () => {
    startTransition(async () => {
      try {
        const input: EnhanceBioWithAIInput = { bio };
        const result = await enhanceBioWithAI(input);
        if (result.enhancedBio) {
          setBio(result.enhancedBio);
          toast({
            title: "Bio Enhanced!",
            description: "Your biography has been updated with AI.",
          });
        }
      } catch (error) {
        console.error("Error enhancing bio:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to enhance bio. Please try again.",
        });
      }
    });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 md:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-8">
        
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-primary font-mono mb-4">Hi, my name is</p>
          <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Malini S
            <span className="block text-slate-400 mt-2 text-4xl sm:text-6xl font-semibold">MERN Stack Developer</span>
          </h1>
          <div className="relative">
            <p className="text-slate-400 text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              {bio}
            </p>
            <Button
              size="sm"
              variant="ghost"
              onClick={handleEnhanceBio}
              disabled={isPending}
              className="absolute -top-8 right-0 lg:right-16 text-primary hover:text-primary hover:bg-primary/10"
            >
              {isPending ? (
                <LoaderCircle className="animate-spin mr-2" />
              ) : (
                <Wand2 className="mr-2 h-4 w-4" />
              )}
              Enhance with AI
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button asChild size="lg" className="px-8 py-4 bg-primary text-card font-bold rounded-lg hover:bg-sky-300 transition-transform transform hover:-translate-y-1">
              <a href="/Malini_S_Resume.pdf" download="Malini_S_Resume.pdf">Download Resume</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-4 border-slate-600 text-slate-300 font-bold rounded-lg hover:border-white hover:text-white transition-colors">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
        
        {/* Hero Image/Graphic */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="w-72 h-72 sm:w-96 sm:h-96 relative">
            <div className="absolute inset-0 border-2 border-primary rounded-full animate-[spin_10s_linear_infinite] opacity-20"></div>
            <div className="absolute inset-4 border-2 border-secondary rounded-full animate-[spin_15s_linear_infinite_reverse] opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-60 h-60 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full flex items-center justify-center shadow-2xl overflow-hidden border-4 border-background animate-float">
                <span className="text-6xl font-bold text-slate-500">MS</span>
              </div>
            </div>
            
            <div className="absolute top-0 right-10 p-3 bg-card rounded-xl border border-white/10 shadow-xl animate-float" style={{animationDelay: '1s'}}>
              <ReactIcon className="w-6 h-6 text-blue-400" />
            </div>
            <div className="absolute bottom-10 left-0 p-3 bg-card rounded-xl border border-white/10 shadow-xl animate-float" style={{animationDelay: '2s'}}>
              <NodeIcon className="w-6 h-6 text-green-500" />
            </div>
            <div className="absolute top-1/2 -right-4 p-3 bg-card rounded-xl border border-white/10 shadow-xl animate-float" style={{animationDelay: '0.5s'}}>
              <PythonIcon className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
