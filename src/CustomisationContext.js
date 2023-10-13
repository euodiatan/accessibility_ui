import React, { createContext, useState, useContext, useEffect } from 'react';

export const CustomisationContext = createContext();

export const CustomisationProvider = ({ children }) => {
  const [buttonSize, setButtonSize] = useState(localStorage.getItem('buttonSize') || 'lg');
  const [fontSize, setFontSize] = useState(localStorage.getItem('fontSize') || '2xl');
  const [fontColor, setFontColor] = useState(localStorage.getItem('fontColor') || '#FFFFFF');
  const [buttonColor, setButtonColor] = useState(localStorage.getItem('buttonColor') || '#6B46C1'); 
  //Add on for elements that you would like to customise here.

  useEffect(() => {
    localStorage.setItem('buttonSize', buttonSize);
    localStorage.setItem('fontSize', fontSize);
    localStorage.setItem('buttonColor', buttonColor);
    localStorage.setItem('fontColor', fontColor);
    //Add on for elements that you would like to customise here.

  }, [buttonSize, fontSize, buttonColor, fontColor]); //Remember to update this line for new elements.

  return (
    //Remember to update the value={{}} below for the provider with the new elements you added.
    <CustomisationContext.Provider value={{ buttonSize, setButtonSize, fontSize, setFontSize, fontColor, setFontColor, buttonColor, setButtonColor}}>
      {children}
    </CustomisationContext.Provider>
  );
};

export const useCustomisation = () => {
  return useContext(CustomisationContext);
};