//This is how your app.js should look to implement the accessibility settings.
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./Pages/WebPage";
import { CustomisationProvider } from './Components/CustomisationContext';
import CustomisationPage from './Pages/CustomisationPage';
import ToggleButton from './Components/ToggleButton';

function MainContent() {

    return (
        <div className="App">
            {/* Toggle Button for Accessibility Mode */}
            <div className="toggle-container">
                <ToggleButton />
            </div>

            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage/>} />
                    <Route path="/customisation" element={<CustomisationPage/>} />
                </Routes>
            </Router>
        </div>
    );
}

//Ensure that your customisationprovider wraps your entire app, or it won't work!
function App() {
  return (
    <CustomisationProvider>
      <MainContent />
    </CustomisationProvider>
  );
}

export default App;
