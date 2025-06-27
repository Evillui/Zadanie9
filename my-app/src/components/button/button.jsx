import styles from './button.module.css';

const Button = (props) => {
    return <button className={`${styles.button} ${styles[props.color]} ${styles[props.size]}`} onClick={props.onClick}>{props.children}</button>;
};

export default Button;
