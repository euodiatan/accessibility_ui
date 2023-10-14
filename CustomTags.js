// Import necessary React utilities and components.
import React from 'react';
import { useCustomisation } from './CustomisationContext';
//If you want to customise new elements, import them here.
import { Button, Text } from '@chakra-ui/react';

// CustomButton Component
// This component creates a button with customisable size and color.
// The customisation settings are fetched from the CustomisationContext.
export const CustomButton = ({ children }) => {
  // Fetch the button size and color from the customisation context.
  const { buttonSize } = useCustomisation();
  const { buttonColor } = useCustomisation();

  return (
    <Button
      size={buttonSize} // Set the button size based on the customisation setting.
      background={buttonColor} // Set the button background color based on the customisation setting.
    >
      {children}
      {/* Embed the CustomText component to display the button's name. */}
      {/* You can modify this part to customise the button's content further. */}
      <CustomText>Button Name</CustomText>
    </Button>
  );
};

// CustomText Component
// This component creates a text element with customisable font size and color.
// The customisation settings are fetched from the CustomisationContext.
export const CustomText = ({ children }) => {
  // Fetch the font size and color from the customisation context.
  const { fontSize } = useCustomisation();
  const { fontColor } = useCustomisation();

  return (
    <Text
      fontSize={fontSize} // Set the font size based on the customisation setting.
      color={fontColor} // Set the font color based on the customisation setting.
    >
      {children}
    </Text>
  );
};
