// Button component
// props:
//   onClick - a function calls native onClick event
//   children - renders as child
//   className - helps to style the component
const Button = ({ onClick, children, className }) => (
  <button onClick={onClick} className={className}>
    {children}
  </button>
);

export default Button;