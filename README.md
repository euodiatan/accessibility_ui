# Accessibility UI

**Accessibility UI** is an npm package that gives you, the developer, the power to incorporate accessibility features and end-user customisation into your React web application. 

Features include: 
1. Accessibility Toggle to toggle accessibility view on or off on your webpage.
2. Pre-set accessibility settings such as appropriate color contrast and sizing.
3. Customisation page template for your end-users to tailor their experience by adjusting the UI elements to their preference.

We encourage developers to use this package as a skeleton to incorporate more accessibility customisation features. We hope that this will help foster a community of developers that hope to make applications more accessibility-friendly.


Created by: Team AccessTech

## 🌟 Important Files

### **1. Customisation Page**
A default template that provides a user-friendly interface for end-users to customize various UI elements for your webpages. 

### **2. Customization Context**
A context provider that stores and manages the customization settings, ensuring persistence across sessions using `localStorage`.

### **3. Color Picker**
A component that allows users to pick colors for various UI elements. The colors have been pre-set to ensure high contrast that fit accessibility needs, based on WebAIM criteria.

### **4. Toggle Button**
Allows you to toggle accessibility mode on/off, to be implemented in App.js and App.css so that it can be accessed from anywhere in your web application. 

### **5. WebPage**
An example of a webpage that the accessibility features should be applied to, alongside the accessibility toggle.

### **6. App.js and App.css**
Files that your web application should already contain, changes should be made according to the template we provided.

## 📦 Installation

To integrate **Accessibility UI** into your project, follow these steps:

```bash
# Install the package
npm install accessibility_ui

# Ensure you have the required peer dependencies
npm install react@^18.2.0 react-dom@^18.2.0
```

**The accessibility_ui module will be found inside your node_modules folder. Move the files into your working directory.**

## 🚀 Usage

**1. Wrap your main application component with the `CustomisationProvider`:**

```jsx
import { CustomisationProvider } from './insert file path of CustomisationContext.js';

function App() {
  return (
    <CustomisationProvider>
      {/* Your app components */}
    </CustomisationProvider>
  );
}
```

**2. Embed the CustomisationPage**:
Place the `CustomisationPage` wherever you want the customization interface to appear in your application.

**3. Utilize Custom Components**:
Follow the template provided in WebPage.js to be integrated with your actual webpage. After defining the styles, all you have to do is insert inline styles to the element of your choice that you want to apply the accessibility customisation to. 

Example: 

```jsx
<button className={your.class.name.here} style={buttonStyle}>
```
**4. Import all necessary code into your web application**:
Make sure that you have incorporated all necessary code from our package into your web application for it to work. This includes CSS files, App.css and App.js.

**5. Extend and Customize**:
Feel free to extend existing components or introduce new customizable elements to better suit your application's needs.

