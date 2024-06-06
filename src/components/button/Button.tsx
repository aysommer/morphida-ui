type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Base button.
 */
const Button: React.FC<ButtonProps> = ({ children, ...other }) => {
   return <button {...other}>{children}</button>;
};

export default Button;
