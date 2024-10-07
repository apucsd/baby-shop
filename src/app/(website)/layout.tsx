import Footer from "@/ui/shared/Footer";
import Navbar from "@/ui/shared/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <Navbar />
      <div className="min-h-[calc(100vh-80px)]">{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
