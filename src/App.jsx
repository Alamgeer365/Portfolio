import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {
  aboutHighlights,
  education,
  experience,
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
import EducationPage from "./pages/EducationPage";
import ExperiencePage from "./pages/ExperiencePage";
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
    profileLinks,
    projects,
  };

  const pageMap = {
    "/": <HomePage {...pageProps} />,
    "/about": <AboutPage highlights={aboutHighlights} profile={profile} />,
    "/skills": <SkillsPage skillGroups={skillGroups} />,
    "/projects": <ProjectsPage projects={projects} />,
    "/experience": <ExperiencePage experience={experience} />,
    "/education": <EducationPage education={education} />,
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
      <Footer navigate={navigate} profile={profile} routes={routes} />
    </div>
  );
}

export default App;
