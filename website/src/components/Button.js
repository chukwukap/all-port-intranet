import "./index.css";

function Button({ children, className }) {
  return <button className={className + " btn"}>{children}</button>;
}

export default Button;
