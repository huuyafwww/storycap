type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <button className="button" type="button" onClick={onClick}>
    {children}
  </button>
);
