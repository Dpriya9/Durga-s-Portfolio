// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg fixed-top shadow">
//       <div className="container">

//         <a className="navbar-brand fw-bold">My Portfolio</a>

//         <ul className="navbar-nav ms-auto">

//           <li className="nav-item">
//             <a className="nav-link" href="#intro">Home</a>
//           </li>

//           <li className="nav-item">
//             <a className="nav-link" href="#skills">Skills</a>
//           </li>

//           <li className="nav-item">
//             <a className="nav-link" href="#projects">Projects</a>
//           </li>

//           <li className="nav-item">
//             <a className="nav-link" href="#education">Education</a>
//           </li>

//           <li className="nav-item">
//             <a className="nav-link" href="#contact">Contact</a>
//           </li>

//         </ul>

//       </div>
//     </nav>
//   );
// }

// export default Navbar;

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow">
      <div className="container">

        <a className="navbar-brand fw-bold text-light mb-3"
           data-aos="fadeInUp"
          data-aos-duration="1000"
        >Durga.dev</a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navbarContent">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link" href="#intro">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#education">Experience</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;