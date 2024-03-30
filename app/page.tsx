import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

const Landing = () => {
  return (
    <div className="w-full h-full flex flex-col gap-10">
      <Navbar />
      <Hero />
      
    </div>
  );
};

export default Landing;
