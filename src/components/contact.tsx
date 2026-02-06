import { Phone, Mail, Github, Linkedin } from 'lucide-react';
import { ContactForm } from './contact-form';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-card/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-primary font-mono mb-4">03. Get in Touch</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Let's Connect</h2>
        <p className="text-slate-400 text-lg mb-10">
          I am currently looking for opportunities to apply my skills. Feel free to reach out via email or phone!
        </p>

        <div className="bg-background p-8 rounded-xl border border-white/5 mb-8">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
            <div className="flex items-center space-x-3">
              <Phone className="text-primary" />
              <a href="tel:7867944608" className="text-white text-lg hover:text-primary transition-colors">7867944608</a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-primary" />
              <a href="mailto:svmalini53@gmail.com" className="text-white text-lg hover:text-primary transition-colors">svmalini53@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto">
          <ContactForm />
        </div>

        <div className="mt-16 flex justify-center space-x-6">
          <a href="https://github.com/Malini-kumar" target="_blank" rel="noopener noreferrer" aria-label="Github" className="text-slate-400 hover:text-primary hover:-translate-y-1 transition-all text-2xl">
            <Github />
          </a>
          <a href="https://linkedin.com/in/Malini-kumar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-primary hover:-translate-y-1 transition-all text-2xl">
            <Linkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
