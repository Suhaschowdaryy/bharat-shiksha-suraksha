import Navigation from "@/components/Navigation";
import VirtualDrills from "@/components/VirtualDrills";
import Footer from "@/components/Footer";

const VirtualDrillsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <VirtualDrills />
      <Footer />
    </div>
  );
};

export default VirtualDrillsPage;