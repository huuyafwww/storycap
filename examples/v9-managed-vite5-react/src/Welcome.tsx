type WelcomeProps = {
  showApp: () => void;
};

export const Welcome: React.FC<WelcomeProps> = ({ showApp }) => (
  <button type="button" onClick={showApp}>
    Welcome
  </button>
);
