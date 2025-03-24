import { useFormContext } from "react-hook-form";

export default function ProfileSection() {
    const { register } = useFormContext();

    return (
        <div className="form">
            <div className="form-input">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" {...register("headings.fullName")} />
            </div>
            <div className="form-input">
                <label htmlFor="location">Location</label>
                <input type="text" {...register("headings.location")} />
            </div>
            <div className="form-input">
                <label htmlFor="mobile">Mobile</label>
                <input type="tel" {...register("headings.mobile")} />
            </div>
            <div className="form-input">
                <label htmlFor="email">Email</label>
                <input type="email" {...register("headings.email")} />
            </div>
            <div className="form-input">
                <label htmlFor="linkedin">LinkedIn</label>
                <input type="url" {...register("headings.linkedin")} />
            </div>
            <div className="form-input">
                <label htmlFor="github">GitHub</label>
                <input type="url" {...register("headings.github")} />
            </div>
        </div>
    )
}