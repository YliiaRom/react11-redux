import { NavLink } from "react-router-dom";

function NavBarStore() {
  return (
    <nav>
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
            Список з фільтрацією
            <br />
            &
            <br />
            Список постів з API
          </NavLink>
        </li>
        <li>
          <h1>
            Practice: <br />
            бібліотеки: redux <br />
            react-redux/ redux-thunk
            <br />
            @reduxjs/toolkit
            <br />
            --- <br />
            useSelector()/useDispatch()
            <br />
            Flux-архітектура
            <br />
            old- createState() /<br />
            createSlice() + configureStore()
            <br />
          </h1>
        </li>
      </ul>
    </nav>
  );
}

export default NavBarStore;
