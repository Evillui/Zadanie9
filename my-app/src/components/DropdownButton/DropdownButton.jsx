import { useState } from 'react';
import styles from './DropdownButton.module.css';

const DropdownButton = ({ options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Choose option');

    const handleSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        onSelect && onSelect(option);
    };

    return (
        <div className={styles.dropdownContainer}>
            <button
                className={styles.primaryButton}
                onClick={() => setIsOpen(!isOpen)}
            >
            {selectedOption}
            <span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
            </button>

            {isOpen && (
            <div className={styles.dropdownMenu}>
                {options.map((option, index) => (
                    <div
                        key={index}
                        className={styles.menuItem}
                        onClick={() => handleSelect(option)}
                    >
                    {option}
                    </div>
              ))}
            </div>
            )}
        </div>
    );
};

export default DropdownButton;