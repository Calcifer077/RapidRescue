function Heading({ type, children }) {
  const base = `text-center`;

  const styles = {
    primary: base + " text-2xl font-bold text-primary",
    secondary: base + " text-md",
    pageHeading: base + " text-3xl font-bold text-primary",
  };

  return <h1 className={styles[type]}>{children}</h1>;
}

export default Heading;
