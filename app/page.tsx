import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import LearningSystem from "./components/LearningSystem";
import Trainings from "./components/Trainings";
import ManagementDevProgram from "./components/ManagementDevProgram";
import CeoLetter from "./components/CeoLetter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <LearningSystem />
      <Trainings />
      <ManagementDevProgram />
      <CeoLetter />

      <Footer />
    </div>
  );
}
