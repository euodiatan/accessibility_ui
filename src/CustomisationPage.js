// This is a default customisation page template. 
// Feel free to edit it to include elements that you would like your end-users to be able to customise!

import React, { useState, useEffect } from 'react';
import ColorPicker from './ColorPicker'

import {
    Box, Heading, Divider, Flex, Switch, Spacer,
    useColorMode, useColorModeValue, Button
} from '@chakra-ui/react';

import { useCustomisation } from './CustomisationContext';

// Dark Mode Switch Component
// Users can toggle between dark and light modes using this component.
function ColorModeToggle() {
    const { colorMode, toggleColorMode } = useColorMode();
    const isChecked = colorMode === 'dark';
    return (
        <Switch size="lg" onChange={toggleColorMode} isChecked={isChecked}></Switch>
    );
}

// Main Customisation Page Component
export default function CustomisationPage() {
    // Fetch current customisation settings from the context.
    const { buttonSize, setButtonSize, fontSize, setFontSize, fontColor, setFontColor, buttonColor, setButtonColor } = useCustomisation();

    // Toggle functions and handlers for customisation settings.
    // Add more functions here if you introduce new customisable elements.
    const toggleButtonSize = () => {
        const newSize = buttonSize === 'lg' ? 'xl' : 'lg';
        setButtonSize(newSize);
    };

    const toggleFontSize = () => {
        const newSize = fontSize === '2xl' ? '4xl' : '2xl';
        setFontSize(newSize);
    };

    const handleFontColorChange = (newColor) => {
        setFontColor(newColor);
    };

    const handleButtonColorChange = (newColor) => {
        setButtonColor(newColor);
    };

    // Define color mode values for consistent theming.
    const bgColor = useColorModeValue('gray.200', 'gray.700');
    const textColor = useColorModeValue('black', 'white');

    // Customisation Component
    // This component contains sections for customising colors and sizes.
    // You can add more sections or components for additional customisation features.
    const Customisation = () => {
        return (
            <Flex direction="row" width="100%">
                {/* Colors Section */}
                {/* Add or modify color customisation options in this section. */}
                <Box
                    flex="1"
                    p={6}
                    bg={bgColor}
                    color={textColor}
                    borderRadius="md"
                    borderRightWidth="0.5px"
                    borderColor="gray.800"
                >
                    <Heading size="lg" mb={4}>Colors</Heading>
                    <Flex p={5} direction="row" mb={4} alignItems="center">
                        <Heading size="md">Dark Mode</Heading>
                        <Spacer />
                        <ColorModeToggle />
                    </Flex>
                    <Divider borderColor="gray" />
                    <Flex p={5} direction="row" mb={4} alignItems="center">
                        <Heading size="md">Buttons</Heading>
                        <Spacer />
                        <ColorPicker value={buttonColor} onChange={handleButtonColorChange}></ColorPicker>
                    </Flex>
                    <Divider borderColor="gray" />
                    <Flex p={5} direction="row" mb={4} alignItems="center">
                        <Heading size="md">Fonts</Heading>
                        <Spacer />
                        <ColorPicker value={fontColor} onChange={handleFontColorChange}></ColorPicker>
                    </Flex>
                </Box>

                {/* Sizes Section */}
                {/* Add or modify size customisation options in this section. */}
                <Box
                    flex="1"
                    p={6}
                    bg={bgColor}
                    color={textColor}
                    borderRadius="md"
                    borderColor="gray.200"
                >
                    <Heading size="lg" mb={4} textAlign="center">Sizes</Heading>
                    <Flex p={5} direction="row" mb={4} alignItems="center">
                        <Heading size="md">Fonts</Heading>
                        <Spacer />
                        <Box border="1px solid" borderColor="gray.200" borderRadius="md" padding="6px 12px" ml={3} mr={3} mt={3} fontSize={"lg"}> L </Box>
                        <Switch mt={5} size="lg" isChecked={fontSize === '4xl'} onChange={toggleFontSize} />
                        <Box border="1px solid" borderColor="gray.200" borderRadius="md" padding="6px 12px" ml={3} mr={3} mt={3} fontSize={"lg"}> XL </Box>
                    </Flex>
                    <Divider borderColor="gray" />
                    <Flex p={5} direction="row" mb={4} alignItems="center">
                        <Heading size="md">Buttons</Heading>
                        <Spacer />
                        <Box border="1px solid" borderColor="gray.200" borderRadius="md" padding="6px 12px" ml={3} mr={3} mt={3} fontSize={"lg"}> L </Box>
                        <Switch mt={5} size="lg" isChecked={buttonSize === 'xl'} onChange={toggleButtonSize} />
                        <Box border="1px solid" borderColor="gray.200" borderRadius="md" padding="6px 12px" ml={3} mr={3} mt={3} fontSize={"lg"}> XL </Box>
                    </Flex>
                </Box>
            </Flex>
        );
    }

    // Render the customisation component.
    return (
        <Box p={4} bg={bgColor} boxShadow="xl" borderRadius="lg">
            <Customisation />
        </Box>
    );
}
