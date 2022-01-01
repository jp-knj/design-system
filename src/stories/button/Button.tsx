import { button, buttonText} from './button.css';

type Props = {
  href: string
  label: string
}
/**
 * Primary UI component for user interaction
 */
export const Button = ({ href, label }:Props) => {
  return (
    <a href={href} className={button}>
      <span className={buttonText}>
      {label}
      </span>
    </a>
  );
};
