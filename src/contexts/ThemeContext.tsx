
import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
  vibrantMode: boolean;
  toggleVibrantMode: () => void;
  reduceAnimations: boolean;
  toggleReduceAnimations: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  toggleDarkMode: () => {},
  vibrantMode: true,
  toggleVibrantMode: () => {},
  reduceAnimations: false,
  toggleReduceAnimations: () => {}
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [vibrantMode, setVibrantMode] = useState<boolean>(true);
  const [reduceAnimations, setReduceAnimations] = useState<boolean>(false);
  
  // Load saved preferences from localStorage on mount
  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    const storedVibrantMode = localStorage.getItem('vibrantMode');
    const storedReduceAnimations = localStorage.getItem('reduceAnimations');
    
    if (storedDarkMode) setDarkMode(storedDarkMode === 'true');
    if (storedVibrantMode) setVibrantMode(storedVibrantMode === 'true');
    if (storedReduceAnimations) setReduceAnimations(storedReduceAnimations === 'true');
    
    // Also check system preference for dark mode
    if (!storedDarkMode) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }
  }, []);
  
  // Apply theme classes whenever preferences change
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);
  
  useEffect(() => {
    if (vibrantMode) {
      document.documentElement.classList.add('vibrant-mode');
    } else {
      document.documentElement.classList.remove('vibrant-mode');
    }
    
    localStorage.setItem('vibrantMode', vibrantMode.toString());
  }, [vibrantMode]);
  
  useEffect(() => {
    if (reduceAnimations) {
      document.documentElement.classList.add('reduce-animations');
    } else {
      document.documentElement.classList.remove('reduce-animations');
    }
    
    localStorage.setItem('reduceAnimations', reduceAnimations.toString());
  }, [reduceAnimations]);
  
  const toggleDarkMode = () => setDarkMode(prev => !prev);
  const toggleVibrantMode = () => setVibrantMode(prev => !prev);
  const toggleReduceAnimations = () => setReduceAnimations(prev => !prev);
  
  return (
    <ThemeContext.Provider value={{ 
      darkMode, 
      toggleDarkMode, 
      vibrantMode, 
      toggleVibrantMode, 
      reduceAnimations, 
      toggleReduceAnimations 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};
