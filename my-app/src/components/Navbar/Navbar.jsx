import styles from './Navbar.module.css';

const Input = (props) => {
    const handleChange = (e) => {
        if (props.onChange) {
            props.onChange(e);
        } else {
            console.log(`Input changed: ${e.target.value}`);
        }
    };

    return (
        <div className={styles.searchContainer}>
            <svg
                className={styles.searchIcon}
                viewBox="0 0 451.24906 451"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="m170.667969 341.457031c-94.132813 0-170.667969-76.53125-170.667969-170.664062 0-94.136719 76.535156-170.667969 170.667969-170.667969 94.132812 0 170.664062 76.53125 170.664062 170.667969 0 94.132812-76.53125 170.664062-170.664062 170.664062zm0-320c-82.402344 0-149.335938 66.933594-149.335938 149.335938 0 82.398437 66.933594 149.332031 149.335938 149.332031 82.398437 0 149.332031-66.933594 149.332031-149.332031 0-82.402344-66.933594-149.335938-149.332031-149.335938zm0 0"/>
                <path d="m291.351562 276.34375 159.898438 159.902344-15.085938 15.082031-159.898437-159.898437zm0 0"/>
            </svg>
            <input
                className={styles.welcomeInput}
                type={props.type}
                placeholder={props.children}
                onChange={handleChange}
            />
        </div>
    );
};
export default Input;
