import { Route, Routes, NavLink } from "react-router-dom"

import ProfileSection from "./FormSections/ProfileSection"
import EducationSection from "./FormSections/EducationSection"
import SkillsSection from "./FormSections/SkillsSection"
import WorkSection from "./FormSections/WorkSection"

const sidebarData = [
    {
        title: "profile",
        path: "/"
    },
    {
        title: "education",
        path: "/education"
    },
    {
        title: "skills",
        path: "/skills"
    },
    {
        title: "work",
        path: "/work"
    },
]

function Sidebar () {
    return (
        <div className="sidebar-container">
            <Routes>
                <Route path="/" element={<ProfileSection />}></Route>
                <Route path="/education" element={<EducationSection />}></Route>
                <Route path="/skills" element={<SkillsSection />}></Route>
                <Route path="/work" element={<WorkSection />}></Route>
            </Routes>
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