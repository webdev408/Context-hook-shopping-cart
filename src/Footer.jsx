const Footer = () => {
  const date = new Date();
  const formattedDate = date.getFullYear();

  return (
    <div className="container">
      <p className="my-3 text-center text-danger">
        &copy; TekSkillDev:{formattedDate}
      </p>
    </div>
  );
};
export default Footer;
