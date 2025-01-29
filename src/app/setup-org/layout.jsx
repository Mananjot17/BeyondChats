import Header from "@/components/Header";
import Footer from "./_components/Footer";

const SetupLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default SetupLayout;
