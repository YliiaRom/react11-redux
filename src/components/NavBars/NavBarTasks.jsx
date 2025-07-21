import { NavLink } from "react-router-dom";

function NavBarTasks() {
  return (
    <ul className="navList">
      <li key="1">
        <NavLink to="/create-stor" className="navBtn">
          createStore
        </NavLink>
      </li>
      <li key="2">
        <NavLink to="/redux-toolkit" className="navBtn">
          @reduxjs/toolkit
        </NavLink>
      </li>
      <li>
        <NavLink to="/tasks" className="navBtn">
          Products
        </NavLink>
      </li>
      <li>
        <NavLink to="/tasks/posts" className="navBtn">
          Posts
        </NavLink>
      </li>
    </ul>
  );
}

export default NavBarTasks;
