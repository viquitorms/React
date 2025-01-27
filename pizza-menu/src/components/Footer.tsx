function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  return (
    <footer>
      {new Date().toLocaleDateString()} - {new Date().getUTCHours()}
    </footer>
  );
}

export default Footer;
