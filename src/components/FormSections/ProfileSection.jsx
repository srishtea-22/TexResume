import { useFormContext } from "react-hook-form";

export default function ProfileSection() {
    const { register } = useFormContext();

    return (
        <div className="form">
            <div className="form-input">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" name="fullName" {...register("headings.profile.fullName")} />
            </div>
            <div className="form-input">
                <label htmlFor="location">Location</label>
                <input type="text" id="location" name="location" {...register("headings.profile.location")} />
            </div>
            <div className="form-input">
                <label htmlFor="mobile">Mobile</label>
                <input type="tel" id="mobile" name="mobile" {...register("headings.profile.mobile")} />
            </div>
            <div className="form-input">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" {...register("headings.profile.email")} />
            </div>
            <div className="form-input">
                <label htmlFor="linkedin">LinkedIn</label>
                <input type="url" id="linkedin" name="linkedin" {...register("headings.profile.linkedin")} />
            </div>
            <div className="form-input">
                <label htmlFor="github">GitHub</label>
                <input type="url" id="github" name="github" {...register("headings.profile.github")} />
            </div>
        </div>
    )
}