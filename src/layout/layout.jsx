import { Outlet } from "react-router-dom";
import StaggeredMenu from "../components/StaggeredMenu";
import Footer from "@/components/ui/Footer";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "Subjects", ariaLabel: "Go to subjects", link: "/subjects" },

  // Individual subjects
  { label: "AI", ariaLabel: "Go to Artificial Intelligence", link: "/subject/ai" },
  { label: "Algorithm", ariaLabel: "Go to Algorithm", link: "/subject/algorithm" },
  { label: "Probabilistic", ariaLabel: "Go to probabilistic subject", link: "/subject/probabilistic" },
  { label: "Data Science", ariaLabel: "Go to data science", link: "/subject/data-science" },
  { label: "Operating Systems", ariaLabel: "Go to operating systems", link: "/subject/os" },
];

const socialItems = [
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/mostafa-aboal-qasim-7b0997323/",
  },
  {
    label: "GitHub",
    link: "https://github.com/V12MUSLIM",
  },
];

function Layout() {
  return (
    <div className="min-h-screen flex flex-col  bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 relative">

      {/* --- FLOATING MENU --- */}
      <div className="fixed top-6 right-6 z-50">
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#fff"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={true}
          colors={["#B19EEF", "#5227FF"]}
          accentColor="#ff6b6b"
        />
      </div>

      {/* --- CONTENT AREA, WITH TOP PADDING SO MENU NEVER BLOCKS ANYTHING --- */}
      <main className="flex-1 pt-24 px-4">
        <Outlet />
      </main>

      {/* --- FOOTER --- */}
      <Footer />
    </div>
  );
}

export default Layout;
