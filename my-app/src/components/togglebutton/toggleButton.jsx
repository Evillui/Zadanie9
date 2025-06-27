import styles from './toggleButton.module.css';
import { useState } from 'react';

const ToggleButton = () => {
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={styles.toggleContainer} onClick={handleToggle}>
            <div className={`${styles.toggleButton} ${isActive ? styles.active : ''}`}>
                <span>{isActive ? 'True' : 'False'}</span>
            </div>
        </div>
    );
};

export default ToggleButton;