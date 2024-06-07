import type { ButtonProps } from "./types";

/**
 * Base button.
 */
const Button: React.FC<ButtonProps> = ({ children, ...other }) => {
   return <button {...other}>{children}</button>;
};

export default Button;
