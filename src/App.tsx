import React, { useState, useRef, useEffect } from 'react';
import heroMockup from './hero-UIMOCKUP.png';
import heroVideo from './hero.mp4';
import begginer from './beginer.png';
import error from './error.png';
import safe from './safe.png';
import visual from './visual.png';
import logo from './easyleaf-logo.png';
import {
  Code,
  Download,
  ExternalLink,
  FileWarning,
  AlertTriangle,
  CheckCircle,
  Github,
  Linkedin,
  ToggleRight,
  XCircle,
  BookOpen,
  Briefcase,
  Users,
  Code2,
  Volume2,
  VolumeX
} from 'lucide-react';

const App = () => {
  return (
    <div className="bg-background font-sans">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Problem />
        <Solution />
        <HowItWorks />
        <UIShowcase />
        <WhoIsItFor />
        <Comparison />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

const Header = () => (
  <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-glass-border">
    <div className="container mx-auto px-4 h-20 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="EasyLeaf Logo" className="h-8 w-8" />
        <span className="text-2xl font-bold text-white">EasyLeaf</span>
      </div>
      <div className="flex items-center space-x-4">
        <a href="https://github.com/rohithvijayan" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors" aria-label="GitHub Profile">
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/rohithvijayan/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors" aria-label="LinkedIn Profile">
          <Linkedin size={24} />
        </a>
        <a href="/#final-cta" className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-glow-indigo">
          Get It Now !
        </a>
      </div>
    </div>
  </header>
);

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [cta, setCta] = useState({
    text: 'Add To Your Browser',
    href: '#', // Placeholder
    disabled: true,
  });

  useEffect(() => {
    const userAgent = navigator.userAgent;
    // NOTE: Add real extension links here
    if (userAgent.indexOf("Firefox") > -1) {
      setCta({ text: 'Add to Firefox', href: '#', disabled: false });
    } else if (userAgent.indexOf("Chrome") > -1) {
      setCta({ text: 'Add to Chrome', href: '#', disabled: false });
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            STOP Breaking<br />
            Your Overleaf Document.
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto md:mx-0">
            EasyLeaf adds a Beginner Mode to Overleaf — so you can build resumes and papers without breaking LaTeX.
          </p>
          <div className="mt-8 flex justify-center md:justify-start space-x-4">
            <a
              href={cta.href}
              aria-disabled={cta.disabled}
              className={`bg-primary text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors shadow-glow-indigo ${cta.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={(e) => cta.disabled && e.preventDefault()}
            >
              {cta.text}
            </a>
            <a href="/#how-it-works" className="bg-transparent border-2 border-gray-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors">
              See How It Works
            </a>
          </div>
        </div>
        <div className="relative">
          <video
            ref={videoRef}
            className="rounded-2xl shadow-2xl border border-glass-border"
            poster={heroMockup}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => (
    <div className="py-8 border-y border-glass-border">
        <div className="container mx-auto px-4 text-center text-gray-400">
            <p className="mb-4">Trusted by students & job seekers at top universities.</p>
            <div className="flex justify-center items-center space-x-8">
                <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" />
                    <span>Chrome Extension</span>
                </div>
                <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" />
                    <span>Firefox Extension</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Code2 className="text-blue-400" />
                    <span>Works inside Overleaf</span>
                </div>
            </div>
        </div>
    </div>
);

const Problem = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        Why Overleaf Is Hard for Beginners
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-[#1E293B]/50 p-8 rounded-2xl border border-glass-border hover:border-error/50 transition-colors">
          <AlertTriangle className="text-error mb-4" size={32} />
          <h3 className="text-xl font-semibold text-white mb-2">Cryptic Compile Errors</h3>
          <p className="text-gray-400">A single misplaced comma can lead to a wall of red text that makes no sense.</p>
        </div>
        <div className="bg-[#1E293B]/50 p-8 rounded-2xl border border-glass-border hover:border-error/50 transition-colors">
          <FileWarning className="text-error mb-4" size={32} />
          <h3 className="text-xl font-semibold text-white mb-2">One Wrong Edit Breaks Everything</h3>
          <p className="text-gray-400">It's easy to accidentally delete a crucial bracket and ruin the entire document.</p>
        </div>
        <div className="bg-[#1E293B]/50 p-8 rounded-2xl border border-glass-border hover:border-error/50 transition-colors">
          <Code className="text-error mb-4" size={32} />
          <h3 className="text-xl font-semibold text-white mb-2">Resume Templates Feel Dangerous</h3>
          <p className="text-gray-400">You just want to add a job, not learn what `\\vspace` means.</p>
        </div>
      </div>
    </div>
  </section>
);

const Solution = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        EasyLeaf Makes Overleaf Beginner-Friendly
      </h2>
      <div className="grid md:grid-cols-4 gap-8">
         <GlassCard
          imageSrc={safe}
          imageClassName="w-100 h-100 mb-4 object-contain rounded-xl border border-white/20"
          title="Safe Editing Zones"
          description="We highlight exactly where you can type, and lock complex code blocks."
        />
        <GlassCard
          imageSrc={begginer}
          imageClassName="w-100 h-100 mb-4 object-contain rounded-xl border border-white/20"
          title="Beginner Mode Toggle"
          description="Simplifies the interface and locks unsafe files to prevent accidental edits."
        />
         <GlassCard
          imageSrc={error}
          imageClassName="w-100 h-100 mb-4 object-contain rounded-xl border border-white/20"
          title="Smart Error Explanations"
          description="Human-readable fixes. We translate 'Error l.44' into plain English."
        />
        <GlassCard
          imageSrc={visual}
          imageClassName="w-100 h-100 mb-4 object-contain rounded-xl border border-white/20"
          title="Visual Resume Builder"
          description="Fill out simple forms to build your resume without touching LaTeX."
        />
      </div>
    </div>
  </section>
);
const FinalCTA = () => (
  <section id="final-cta" className="py-20 bg-gradient-to-b from-background to-[#111827]">
    <div className="container mx-auto px-4 text-center">
      <div className="bg-gradient-to-r from-primary/80 to-indigo-600 rounded-2xl p-12 relative overflow-hidden">
        <div className="absolute -inset-0 bg-gradient-radial from-primary/30 to-transparent opacity-50"></div>
        <div className="relative">
            <h2 className="text-5xl font-bold text-white">
                Stop Fighting LaTeX. Start Writing.
            </h2>
            <div className="mt-8 flex justify-center space-x-4">
                <a href="#" onClick={(e) => e.preventDefault()} className="bg-white text-primary px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-colors">
                    Add to Chrome
                </a>
                <a href="#" onClick={(e) => e.preventDefault()} className="bg-black/20 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-black/40 transition-colors">
                    Add to Firefox
                </a>
            </div>
            <p className="mt-6 text-indigo-200">
                No signup. No data tracking. Works locally in your browser.
            </p>
        </div>
      </div>
    </div>
  </section>
);

const GlassCard = ({ title, description, icon, imageSrc, imageClassName }: { title: string, description: string, icon?: React.ReactNode, imageSrc?: string, imageClassName?: string }) => (
  <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-glass-border">
    {imageSrc ? (
      <div className="flex justify-center mb-4">
        <img src={imageSrc} alt={title} className={imageClassName || "w-12 h-12 object-contain"} />
      </div>
    ) : (
      icon && <div className="mb-4 text-primary inline-block">{icon}</div>
    )}
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const HowItWorks = () => (
  <section id="how-it-works" className="py-20">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-white mb-12">How It Works</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
        <Step icon={<Download size={32} />} text="Install EasyLeaf" />
        <StepLine />
        <Step icon={<ExternalLink size={32} />} text="Open Overleaf Project" />
        <StepLine />
        <Step icon={<ToggleRight size={32} />} text="Turn on Beginner Mode" />
      </div>
    </div>
  </section>
);

const Step = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
  <div className="flex flex-col items-center text-center">
    <div className="bg-primary/10 text-primary p-4 rounded-full border-2 border-primary/30 mb-4">
      {icon}
    </div>
    <p className="text-lg font-semibold text-white">{text}</p>
  </div>
);

const StepLine = () => (
    <div className="w-0.5 h-12 md:w-24 md:h-0.5 bg-gray-700"></div>
)

const UIShowcase = () => (
    <section className="py-20">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
                Visual Editing, Powerful Results
            </h2>
            <div className="max-w-4xl mx-auto bg-[#1E293B]/50 rounded-2xl border border-glass-border p-8 grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                    <h3 className="text-2xl font-bold text-white">Resume Builder</h3>
                    <p className="text-gray-400 mt-2">Fill out simple forms, and EasyLeaf generates the LaTeX code for you.</p>
                </div>
                <div className="md:col-span-2 bg-[#0F172A] p-6 rounded-lg">
                    <div className="space-y-4">
                        <div>
                            <label className="text-sm font-medium text-gray-300">Job Title</label>
                            <input type="text" defaultValue="Software Engineer" className="w-full bg-[#1E293B] border border-glass-border rounded-md p-2 mt-1 text-white" />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-300">Company</label>
                            <input type="text" defaultValue="Tech Corp" className="w-full bg-[#1E293B] border border-glass-border rounded-md p-2 mt-1 text-white" />
                        </div>
                         <button className="w-full bg-primary text-white py-2 rounded-lg font-semibold">Add to Resume</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const WhoIsItFor = () => (
  <section className="py-20">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-white mb-12">Who It’s For</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        <PersonaCard icon={<BookOpen />} title="Students" />
        <PersonaCard icon={<Briefcase />} title="Job Seekers" />
        <PersonaCard icon={<Code2 />} title="First-time LaTeX Users" />
        <PersonaCard icon={<Users />} title="Non-CS Backgrounds" />
      </div>
    </div>
  </section>
);

const PersonaCard = ({ icon, title }: { icon: React.ReactNode, title: string }) => (
  <div className="bg-[#1E293B]/50 p-6 rounded-2xl border border-glass-border text-center">
    <div className="text-primary inline-block mb-3">{icon}</div>
    <h3 className="font-semibold text-white">{title}</h3>
  </div>
);

const Comparison = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-white text-center mb-12">
       Overleaf Is Built for Experts.<br></br>EasyLeaf Is Built for Beginners.
      </h2>
      <div className="max-w-2xl mx-auto bg-[#1E293B]/50 rounded-2xl border border-glass-border">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-glass-border">
              <th className="p-4 text-lg font-semibold text-white">Feature</th>
              <th className="p-4 text-lg font-semibold text-white text-center">Overleaf</th>
              <th className="p-4 text-lg font-semibold text-white text-center">EasyLeaf</th>
            </tr>
          </thead>
          <tbody>
            <ComparisonRow feature="Beginner Friendly" overleaf={false} easyleaf={true} />
            <ComparisonRow feature="Error Explanations" overleaf={false} easyleaf={true} />
            <ComparisonRow feature="Resume Builder" overleaf={false} easyleaf={true} />
            <ComparisonRow feature="Safe Editing" overleaf={false} easyleaf={true} />
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

const ComparisonRow = ({ feature, overleaf, easyleaf }: { feature: string, overleaf: boolean, easyleaf: boolean }) => (
  <tr className="border-b border-glass-border last:border-none">
    <td className="p-4 text-gray-300">{feature}</td>
    <td className="p-4 text-center">{overleaf ? <CheckCircle className="text-success inline-block" /> : <XCircle className="text-error inline-block" />}</td>
    <td className="p-4 text-center">{easyleaf ? <CheckCircle className="text-success inline-block" /> : <XCircle className="text-error inline-block" />}</td>
  </tr>
);



const Footer = () => (
  <footer className="py-12 bg-[#111827] border-t border-glass-border">
    <div className="container mx-auto px-4 text-center text-gray-500">
      <div className="flex justify-center space-x-6 mb-6">
        <button type="button" className="bg-transparent border-none text-gray-500 hover:text-white cursor-pointer">About</button>
        <button type="button" className="bg-transparent border-none text-gray-500 hover:text-white cursor-pointer">Privacy Policy</button>
        <a href="mailto:contact@easyleaf.com" className="hover:text-white">Contact</a>
        <a href="https://github.com/rohithvijayan" className="hover:text-white flex items-center space-x-1">
            <Github size={16} />
            <span>GitHub</span>
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} EasyLeaf. Not affiliated with Overleaf.</p>
    </div>
  </footer>
);

export default App;