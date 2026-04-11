import { useEffect, useState } from "react";

function normalizePath(pathname, routes) {
  if (!pathname || pathname === "") return "/";
  const clean = pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;
  return routes.some((route) => route.path === clean) ? clean : "/";
}

function getCurrentPath(routes) {
  return normalizePath(window.location.pathname, routes);
}

function useCurrentPath(routes) {
  const [currentPath, setCurrentPath] = useState(() => getCurrentPath(routes));

  useEffect(() => {
    const onPopState = () => setCurrentPath(getCurrentPath(routes));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [routes]);

  const navigate = (path) => {
    if (path === currentPath) return;
    window.history.pushState({}, "", path);
    setCurrentPath(path);
  };

  return { currentPath, navigate };
}

export default useCurrentPath;
