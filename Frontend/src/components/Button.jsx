function Button({ type, children }) {
  const base =
    "bg-button-dark-green p-4 rounded-xl cursor-pointer hover:bg-blue-200 hover:font-bold duration-200 text-center";

  const styles = {
    navbar: base + " w-30",
    form:
      base +
      " w-full hover:bg-button-hover-green hover:font-bold text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all",
    submit:
      base +
      " w-full hover:bg-button-hover-green hover:font-bold text-white focus:outline-none focus:ring-2 focus:ring-primary-strong focus:border-transparent transition-all",
  };

  return <button className={styles[type]}>{children}</button>;
}

export default Button;
