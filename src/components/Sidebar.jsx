import { NavLink } from "react-router-dom"

const sidebarData = [
    {title: "Profile", path: "/"},
    {title: "Education", path: "/education"},
    {title: "Skills", path: "/skills"},
    {title: "Projects", path: "/projects"},
    {title: "Work", path: "/work"},
]

function Sidebar () {
    return (
        <div className="sidebar-container">
            <ul className="nav-list">
                {sidebarData.map((item, index) => {
                    return (
                        <li className="nav-item" key={index}>
                            <NavLink to={item.path} className={({isActive}) => ["nav-link", isActive ? "active" : null].join(" ")}>
                                <span>{item.title}</span>
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar;