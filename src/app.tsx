import React from 'react'
import { NavLink, Outlet } from 'react-router'

export const App:React.FC = () => {
    const activeClassName = ({isActive}: {isActive: boolean}) => isActive ? 'navElement navElementACtive' : 'navElement'
  return (
    <div>
        <nav>
            <ul>
                <NavLink to="/" className={activeClassName}>
                    <li>
                        React Reducer
                    </li>
                </NavLink>
                <NavLink to="/redux-toolkit" className={activeClassName}>
                    <li>
                        Redux Toolkit
                    </li>
                </NavLink>
                <NavLink to="/zustand" className={activeClassName}>
                    <li>
                    Zustand
                    </li>
                </NavLink>
                <NavLink to="/state-machine" className={activeClassName}>
                    <li>
                    State Machine
                    </li>
                </NavLink>
                <NavLink to="/xstate-machine" className={activeClassName}>
                    <li>
                    XState Machine
                    </li>
                </NavLink>
            </ul>
        </nav>
        <article>
            <Outlet></Outlet>
        </article>
    </div>
  )
}
