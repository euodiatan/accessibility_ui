import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a context for customisation settings.
export const CustomisationContext = createContext();

// Define a provider component to wrap around parts of the app that need access to customisation settings.
export const CustomisationProvider = ({ children }) => {
  // Define state variables with default values from localStorage or fallback values.
  // These state variables will store customisation settings like button size, font size, etc.
  const [buttonSize, setButtonSize] = useState(localStorage.getItem('buttonSize') || 'lg');
  const [fontSize, setFontSize] = useState(localStorage.getItem('fontSize') || '2xl');
  const [fontColor, setFontColor] = useState(localStorage.getItem('fontColor') || '#FFFFFF');
  const [buttonColor, setButtonColor] = useState(localStorage.getItem('buttonColor') || '#6B46C1');
  
  // If you want to add more customisable elements, define their state variables above this comment.

  // Use the useEffect hook to update localStorage whenever the customisation settings change.
  useEffect(() => {
    localStorage.setItem('buttonSize', buttonSize);
    localStorage.setItem('fontSize', fontSize);
    localStorage.setItem('buttonColor', buttonColor);
    localStorage.setItem('fontColor', fontColor);
    
    // If you add more customisable elements, remember to save their values to localStorage here.

  }, [buttonSize, fontSize, buttonColor, fontColor]); // The dependency array ensures the effect runs only when these values change.

  // Return the provider component. This will wrap around parts of the app and provide them with access to customisation settings.
  return (
    <CustomisationContext.Provider value={{ buttonSize, setButtonSize, fontSize, setFontSize, fontColor, setFontColor, buttonColor, setButtonColor}}>
      {children}
    </CustomisationContext.Provider>
  );
};

// Define a custom hook to easily access customisation settings from any component.
export const useCustomisation = () => {
  return useContext(CustomisationContext);
};
