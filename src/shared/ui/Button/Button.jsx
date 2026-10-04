import { Ellipsis } from 'lucide-react';
import { getStyle } from '../../lib/getStyle/getStyle';
import styles from './Button.module.scss';

export const Button = ({
  children,
  className,
  color = 'primary',
  circle = false,
  cta = false,
  loading = false,
  disabled = false,
  type = 'button',
  ...rest
}) => {
  const isDisabled = disabled || color === 'disabled';

  const mode = {
    [styles.circle]: circle,
    [styles.cta]: cta,
    [styles.loading]: loading,
    [styles.disabled]: isDisabled,
  };

  return (
    <button
      type={type}
      className={getStyle(styles.button, mode, [styles[color], className])}
      disabled={isDisabled || loading}
      aria-busy={loading}
      {...rest}
    >
      {loading ? <Ellipsis className={styles.loader} /> : children}
      {!cta && !loading && <span className={styles.underLine} />}
    </button>
  );
};

export default Button;