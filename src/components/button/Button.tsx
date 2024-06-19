import type { ButtonProps } from "./types";
import { getBackgroundColor, getFontColor } from "../../styled-system/utils";
import { clsx } from "clsx";

import "./Button.css";

/**
 * Base button.
 */
const Button: React.FC<ButtonProps> = ({ children, className, style, colorScheme, ...other }) => {
   const computedClassName: string = clsx("mphd-button", className);
   const computedStyle: React.CSSProperties = {
      ...style,
      color: getFontColor(colorScheme),
      backgroundColor: getBackgroundColor(colorScheme),
   };

   return (
      <button {...other} className={computedClassName} style={computedStyle}>
         {children}
      </button>
   );
};

export default Button;
