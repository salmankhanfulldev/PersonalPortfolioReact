

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">CODE VERTEX</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#tech">Technologies</a></li>
        <li><a href="#domains">Domains</a></li>
        <li><a href="#process">Process</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
      </ul>
      <button className="btn-contact">Contact Us</button>
    </nav>
  );
};

export default Navbar;