//This is an example of a webpage you would want to apply the accessibility settings to.
import React, { useContext } from 'react';
import styles from './css/styles.module.css';
import { CustomisationContext } from '../Components/CustomisationContext';

function LoginPage() {
    
    //Retrieve settings from CustomisationContext. 
    const { accessibilityMode } = useContext(CustomisationContext);
    const { fontSize } = useContext(CustomisationContext);
    const { buttonSize } = useContext(CustomisationContext);
    const {fontColor } = useContext(CustomisationContext);
    const { buttonColor } = useContext(CustomisationContext);


    //Apply settings retrieved from CustomisationContext to specific attributes of specific elements, to be displayed depending on toggling of accessibility mode.
    const headerStyle = accessibilityMode ? { fontSize, color: fontColor } : {};
    const buttonStyle = accessibilityMode ? { fontSize: buttonSize, backgroundColor: buttonColor } : {};
    

   //Apply the inline styles based on the accessibility mode settings defined above.
    return (
        <div className={styles.flexcontainer}>
            <div className={styles.stack}>
                <h1 className={styles.heading} style={headerStyle}>Welcome!</h1>
                <button className={styles.btn1} style={buttonStyle} onClick={createGameSession}>
                    Login 
                </button>
                <button className={styles.btn1} style={buttonStyle} onClick={() => {}}>
                    Register
                </button> 
            </div>
        </div>
    );
}

export default LoginPage;
