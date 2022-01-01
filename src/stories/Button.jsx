import { button, buttonPrimary, buttonSecondary } from "./button.css.ts";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  return (
    <button type="button" className={primary ? buttonPrimary : buttonSecondary}>
      {label}
    </button>
  );
};
