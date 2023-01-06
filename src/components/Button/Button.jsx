import styles from './Button.module.css';

function Button({ text, type }) {
  return (
    <button type={`${type ? type : 'button'}`} className={styles.button}>
      {text}
    </button>
  );
}

export default Button;
