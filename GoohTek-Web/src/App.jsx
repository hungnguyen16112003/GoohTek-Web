import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Projects from "./components/Projects";
import Pricing from "./components/Pricing";
import Team from "./components/Team";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";
import FloatingContactButtons from "./components/FloatingContactButtons";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden w-screen flex items-center justify-center">
      <ScrollProgress />
      <Header />
      <div className="w-full">
        <Hero />
        <Features />
        <Projects />
        <Pricing />
        <Team />
        <FAQ />
        <ContactForm />
        <Footer />
      </div>
      <ScrollToTop />
      <FloatingContactButtons />

      <style jsx global>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to 
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-slideDown {
          animation: slideDown 1s ease;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease backwards;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }

        * {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #0a0a0a;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
        }
      `}</style>
    </div>
  );
}
