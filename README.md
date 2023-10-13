# Accessibility UI

**Accessibility UI** is an npm package designed to seamlessly integrate a UI customization page into your React.JS application that utilizes the ChakraUI framework. This package empowers your end-users to tailor their experience by adjusting various UI elements to their preference, enhancing accessibility.

Created by AccessTech.

## 🌟 Files

### **1. Customization Page**
A default template that provides a user-friendly interface for end-users to customize various UI elements.
- [View Code](https://github.com/euodiatan/accessibility_ui/blob/main/src/CustomisationPage.js)

### **2. Customization Context**
A context provider that stores and manages the customization settings, ensuring persistence across sessions using `localStorage`.
- [View Code](https://github.com/euodiatan/accessibility_ui/blob/main/src/CustomisationContext.js)

### **3. Custom Tags**
Components like `CustomButton` and `CustomText` that adapt their appearance based on the user's customization settings.
- [View Code](https://github.com/euodiatan/accessibility_ui/blob/main/src/CustomTags.js)

### **4. Color Picker**
A component that allows users to pick colors for various UI elements.
- [View Code](https://github.com/euodiatan/accessibility_ui/blob/main/src/ColorPicker.js)

## 📦 Installation

To integrate **Accessibility UI** into your project, follow these steps:

```bash
# Install the package
npm install accessibility_ui

# Ensure you have the required peer dependencies
npm install react@^18.2.0 react-dom@^18.2.0
```

## 🚀 Usage

**1. Wrap your main application component with the `CustomisationProvider`:**

```jsx
import { CustomisationProvider } from 'accessibility_ui';

function App() {
  return (
    <CustomisationProvider>
      {/* Your app components */}
    </CustomisationProvider>
  );
}
```

**2. Embed the CustomisationPage**:
Place the `CustomisationPage` component wherever you want the customization interface to appear in your application.

**3. Utilize Custom Components**:
Incorporate the `CustomButton` and `CustomText` components as needed. They will adapt their appearance based on the user's customization settings.
Feel free to add more components you would like the end-user to be able to customise.

**4. Extend and Customize**:
Feel free to extend existing components or introduce new customizable elements to better suit your application's needs.

