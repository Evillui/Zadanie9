import styles from './input.module.css';

const Input = (props) => {
    const handleChange = (e) => {
        if (props.onChange) {
            props.onChange(e);
        } else {
            console.log(`Input changed: ${e.target.value}`);
        }
    };

    return (
        <input className={styles.welcomeInput} type={props.type} placeholder={props.children} onChange={handleChange}/>
    );
};
export default Input;

