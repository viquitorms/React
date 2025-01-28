function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  return (
    <footer className="footer">
      {new Date().toLocaleDateString()}
    </footer>
  );
}

export default Footer;
