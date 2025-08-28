export const Button = ({ children, onClick }) => (
  <button className="button" type="button" onClick={onClick}>
    {children}
  </button>
);
