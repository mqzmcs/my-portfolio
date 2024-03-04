import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AboutMePage from "./pages/AboutMePage/AboutMePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import SkillsPage from "./pages/SkillsPage/SkillsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import Loading from "./components/Loading/Loading";
import TitleAnimation from "./components/TitleAnimation/TitleAnimation";

import "./App.css";

function App() {

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimationComplete(true);
    }, 4 * 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="App">
      {animationComplete ? (
        <>
          <Navbar />
          <div className="top-block"></div>
          {/*
          {isHomePage && (
            <div className="access-btn-container">
              <Link to="/login">
                <button className="access-btn">▶</button>
              </Link>
            </div>
          )}
          */}
          <div className="my-name-container">
            <span id="my-name">
              AMARQUEZ
            </span>
          </div>
          {/*{!isHomePage && <Navbar />}*/}
          <HomePage />
          <AboutMePage />
          <ProjectsPage />
          <SkillsPage />
          <ContactPage />

          {/*
          <Routes>
            <Route
              path="/login"
              element={
                <IsAnon>
                  <LoginPage />
                </IsAnon>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
            */}
        </>
      ) : (
        <TitleAnimation />
      )
      }
    </div>
  );
}

export default App;
