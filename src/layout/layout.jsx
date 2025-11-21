import { Outlet } from "react-router-dom";
import StaggeredMenu from "../components/StaggeredMenu"; // عدّل المسار حسب مشروعك
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
  { label: "GitHub", link: "https://github.com/V12MUSLIM" },
];

function Layout() {
  return (
     <div className="flex flex-col min-h-screen bg-slate-950">
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
        onMenuOpen={() => console.log("Menu opened")}
        onMenuClose={() => console.log("Menu closed")}
      />

      <div className="content-wrapper">
        <Outlet />
      </div>
      <Footer />
   </div>
  );
}

export default Layout;
