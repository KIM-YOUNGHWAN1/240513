// import React from "react";
// import {Link} from "react-router-dom"; // Link 추가
// import {FaBars} from "react-icons/fa";
// import {StyledHeader, NavMenu} from "./styled";

// const Navbar = ({isToggleOpen, handleToggleOpen}) => {
//   return (
//     <>
//       <StyledHeader>
//         <div className="nav_logo">
//           <Link to={"/"} className="nav-logo-link">
//             Logo
//           </Link>
//         </div>

//         <NavMenu isToggleOpen={isToggleOpen}>
//           <li>
//             <Link to={"/about"} className="nav-menu-list">
//               About
//             </Link>
//           </li>
//           <li>
//             <Link to={"/projects"} className="nav-menu-list">
//               Projects
//             </Link>
//           </li>
//           <li>
//             <Link to={"/til"} className="nav-menu-list">
//               TIL
//             </Link>
//           </li>
//           <li>
//             <Link to={"/diary"} className="nav-menu-list">
//               Diary
//             </Link>
//           </li>
//         </NavMenu>
//         <FaBars className="menuToggleBtn" onClick={handleToggleOpen} />
//       </StyledHeader>
//     </>
//   );
// };

// export default Navbar;
