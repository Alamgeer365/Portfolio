import "./App.css";
import Header from "./components/Header";
import {
  aboutHighlights,
  profile,
  profileLinks,
  projects,
  routes,
  skillGroups,
} from "./data/siteData";
import useCurrentPath from "./hooks/useCurrentPath";
import useTheme from "./hooks/useTheme";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";
import SkillsPage from "./pages/SkillsPage";

function App() {
  const { currentPath, navigate } = useCurrentPath(routes);
  const { theme, toggleTheme } = useTheme();

  const pageProps = {
    currentPath,
    navigate,
    profile,
  };

  const pageMap = {
    "/": <HomePage {...pageProps} />,
    "/about": <AboutPage highlights={aboutHighlights} profile={profile} />,
    "/skills": <SkillsPage skillGroups={skillGroups} />,
    "/projects": <ProjectsPage projects={projects} />,
    "/resume": <ResumePage profile={profile} profileLinks={profileLinks} />,
    "/contact": <ContactPage profile={profile} />,
  };

  return (
    <div className="site-shell">
      <Header
        currentPath={currentPath}
        navigate={navigate}
        profile={profile}
        routes={routes}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main className="main-content">{pageMap[currentPath] ?? pageMap["/"]}</main>
    </div>
  );
}

export default App;
