import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <Fragment>
      <div className={classes.header}>
        <h1 className={classes.logo}>Great Quotes</h1>
        <nav className={classes.nav}>
          <ul>
              <li>
            <NavLink to="/quote">All Quotes</NavLink>
            </li>
          
              <li>
            <NavLink to="/new-quote">New Quotes</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default MainNavigation;
