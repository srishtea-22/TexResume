import { useState } from "react"

export default function ProfileSection() {
    const [profileData, setProfileData] = useState({
        firstName: "",
        lastName: "",
        location: "",
        mobile: "",
        email: "",
        linkedin: "",
        github: "",
    });

    const handleChange = (e) => {
        setProfileData({...profileData, [e.target.name]: e.target.value});
    };

    return (
        <div className="form">
            <div className="form-input">
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" value={profileData.firstName} onChange={handleChange}/>
            </div>
            <div className="form-input">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" value={profileData.lastName} onChange={handleChange}/>
            </div>
            <div className="form-input">
            <label htmlFor="location">Location</label>
            <input type="text" name="firstName" value={profileData.location} onChange={handleChange}/>
            </div>
            <div className="form-input">
            <label htmlFor="mobile">Mobile</label>
            <input type="tel" name="mobile" value={profileData.mobile} onChange={handleChange}/>
            </div>
            <div className="form-input">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={profileData.email} onChange={handleChange}/>
            </div>
            <div className="form-input">
            <label htmlFor="linkedin">LinkedIn</label>
            <input type="url" name="linkedin" value={profileData.linkedin} onChange={handleChange}/>
            </div>
            <div className="form-input">
            <label htmlFor="github">Github</label>
            <input type="url" name="github" value={profileData.github} onChange={handleChange}/>
            </div>
        </div>
    )
}