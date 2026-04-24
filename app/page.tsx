import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import LearningSystem from "./components/LearningSystem";
import Trainings from "./components/Trainings";
import ManagementDevProgram from "./components/ManagementDevProgram";
import Footer from "./components/Footer";
import CeoLearning from "./components/CeoLearning";
import Consultation from "./components/Consultation";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <LearningSystem />
      <Trainings />
      <ManagementDevProgram />
      <CeoLearning />
      <Consultation />

      <Footer />
    </div>
  );
}
