import Footer from "./Footer";
import Header from "./Header";
import { Outlet, useNavigation } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";
import Loading from "./Loading";

const AppLayout = () => {
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();
  console.log("NAV STATE:", navigation.state);

  // ✅ correct condition
  if (navigation.state === "loading") {
    return <Loading />;
  }

  return (
    <div
      className={`min-h-screen flex flex-col ${
        theme === "dark"
          ? "bg-black text-white border-gray-700"
          : "bg-white text-black"
      }`}
    >
      <Header />

      <main className="flex-grow py-[100px]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default AppLayout;
