import { useState, useEffect } from "react";
import logo from "./../../assets/images/logo.svg";
import { FaProjectDiagram, FaTools, FaUser } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { FaFlagUsa } from "react-icons/fa";
import { TbFlag, TbFlagFilled } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });
  
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "uz";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const changeLanguage = (value) => {
    setLanguage(value);
  };

  const changeTheme = (value) => {
    setDarkMode(value === "dark");
  };

  const getLanguageIcon = (lang) => {
    switch (lang) {
      case 'uz':
        return <TbFlag className="h-4 w-4 text-blue-500" />;
      case 'en':
        return <FaFlagUsa className="h-4 w-4" />;
      case 'ru':
        return <TbFlagFilled className="h-4 w-4 text-red-500" />;
      default:
        return <TbFlag className="h-4 w-4" />;
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-14 items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-2 text-lg font-semibold transition-colors hover:text-primary"
            >
              <img src={logo} alt="Logo" className="h-8 w-8" />
              <span className="hidden sm:inline-block">Portfolio</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <NavLink 
                to="/projects" 
                className={({ isActive }) => `
                  flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-all
                  hover:bg-accent/50 hover:text-primary
                  ${isActive 
                    ? 'bg-accent text-primary' 
                    : 'text-muted-foreground'
                  }
                `}
              >
                <FaProjectDiagram className="h-4 w-4" />
                <span>Projects</span>
              </NavLink>

              <NavLink 
                to="/technologies"
                className={({ isActive }) => `
                  flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-all
                  hover:bg-accent/50 hover:text-primary
                  ${isActive 
                    ? 'bg-accent text-primary' 
                    : 'text-muted-foreground'
                  }
                `}
              >
                <FaTools className="h-4 w-4" />
                <span>Technologies</span>
              </NavLink>

              <NavLink 
                to="/aboutme"
                className={({ isActive }) => `
                  flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-all
                  hover:bg-accent/50 hover:text-primary
                  ${isActive 
                    ? 'bg-accent text-primary' 
                    : 'text-muted-foreground'
                  }
                `}
              >
                <FaUser className="h-4 w-4" />
                <span>About Me</span>
              </NavLink>
            </div>

            {/* Desktop Settings - alohida breakpoint */}
            <div className="hidden sm:flex items-center space-x-3">
              <Select value={language} onValueChange={changeLanguage}>
                <SelectTrigger className="w-[120px] h-9 bg-background/50">
                  <SelectValue placeholder="Til" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="uz">
                    <div className="flex items-center gap-2">
                      {getLanguageIcon('uz')}
                      <span>O&apos;zbek</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="en">
                    <div className="flex items-center gap-2">
                      {getLanguageIcon('en')}
                      <span>English</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="ru">
                    <div className="flex items-center gap-2">
                      {getLanguageIcon('ru')}
                      <span>Русский</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>

              <Select value={darkMode ? "dark" : "light"} onValueChange={changeTheme}>
                <SelectTrigger className="w-[120px] h-9 bg-background/50">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">
                    <div className="flex items-center gap-2">
                      <BsSun className="h-4 w-4" />
                      <span>Light</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="dark">
                    <div className="flex items-center gap-2">
                      <BsMoon className="h-4 w-4" />
                      <span>Dark</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </nav>

      {/* Bottom Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="flex items-center justify-around py-2 px-4">
          <NavLink 
            to="/" 
            className={({ isActive }) => `
              flex flex-col items-center gap-1 p-2 rounded-lg transition-all
              hover:text-primary
              ${isActive ? 'text-primary bg-accent/50' : 'text-muted-foreground'}
            `}
          >
            <img src={logo} alt="Logo" className="h-5 w-5" />
            <span className="text-[10px] font-medium">Home</span>
          </NavLink>

          <NavLink 
            to="/projects" 
            className={({ isActive }) => `
              flex flex-col items-center gap-1 p-2 rounded-lg transition-all
              hover:text-primary
              ${isActive ? 'text-primary bg-accent/50' : 'text-muted-foreground'}
            `}
          >
            <FaProjectDiagram className="h-5 w-5" />
            <span className="text-[10px] font-medium">Projects</span>
          </NavLink>

          <NavLink 
            to="/technologies"
            className={({ isActive }) => `
              flex flex-col items-center gap-1 p-2 rounded-lg transition-all
              hover:text-primary
              ${isActive ? 'text-primary bg-accent/50' : 'text-muted-foreground'}
            `}
          >
            <FaTools className="h-5 w-5" />
            <span className="text-[10px] font-medium">Tech</span>
          </NavLink>

          <NavLink 
            to="/aboutme"
            className={({ isActive }) => `
              flex flex-col items-center gap-1 p-2 rounded-lg transition-all
              hover:text-primary
              ${isActive ? 'text-primary bg-accent/50' : 'text-muted-foreground'}
            `}
          >
            <FaUser className="h-5 w-5" />
            <span className="text-[10px] font-medium">About</span>
          </NavLink>

          <button
            onClick={toggleMenu}
            className={`
              flex flex-col items-center gap-1 p-2 rounded-lg transition-all
              hover:text-primary
              ${isMenuOpen ? 'text-primary bg-accent/50' : 'text-muted-foreground'}
            `}
          >
            {isMenuOpen ? (
              <RiCloseLine className="h-5 w-5" />
            ) : (
              <RiMenu3Line className="h-5 w-5" />
            )}
            <span className="text-[10px] font-medium">Menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Settings) */}
      {isMenuOpen && (
        <div className="sm:hidden fixed bottom-[4.2rem] left-0 right-0 p-4 border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-40 animate-in slide-in-from-bottom duration-300">
          <div className="space-y-3">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-muted-foreground">Language</label>
              <Select value={language} onValueChange={changeLanguage}>
                <SelectTrigger className="w-full h-10 bg-background/50">
                  <SelectValue placeholder="Choose language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="uz">
                    <div className="flex items-center gap-2">
                      {getLanguageIcon('uz')}
                      <span>O&apos;zbek</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="en">
                    <div className="flex items-center gap-2">
                      {getLanguageIcon('en')}
                      <span>English</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="ru">
                    <div className="flex items-center gap-2">
                      {getLanguageIcon('ru')}
                      <span>Русский</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-muted-foreground">Theme</label>
              <Select value={darkMode ? "dark" : "light"} onValueChange={changeTheme}>
                <SelectTrigger className="w-full h-10 bg-background/50">
                  <SelectValue placeholder="Choose theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">
                    <div className="flex items-center gap-2">
                      <BsSun className="h-4 w-4" />
                      <span>Light</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="dark">
                    <div className="flex items-center gap-2">
                      <BsMoon className="h-4 w-4" />
                      <span>Dark</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
