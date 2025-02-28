import styles from './styles.module.scss';

function Button1({ content }) {
    const { btn2 } = styles;
    return <button className={btn2}>{content}</button>;
}

export default Button1;