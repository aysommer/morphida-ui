import type { ButtonProps } from "./types";
import { clsx } from "clsx";

import "./Button.css";

/**
 * Base button.
 */
const Button: React.FC<ButtonProps> = ({ children, className, ...other }) => {
   const computedClassName = clsx("mphd-button", className);

   return (
      <button className={computedClassName} {...other}>
         {children}
      </button>
   );
};

export default Button;
