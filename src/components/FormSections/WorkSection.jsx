import { useFormContext } from "react-hook-form"

export default function WorkSection() {
    const { register } = useFormContext();

    return (
        <div className="form">
            <div className="form-input">
                <label htmlFor="jobTitle">Job Title</label>
                <input type="text" {...register("headings.work.jobTitle")}/>
            </div>
            <div className="form-input">
                <label htmlFor="company">Company Name</label>
                <input type="text" {...register("headings.work.company")}/>
            </div>
            <div className="form-input">
                <label htmlFor="jobDesc">Description of role</label>
                <input type="text" {...register("headings.work.jobDesc")}/>
            </div>
            <div className="form-input">
                <label htmlFor="startDate">Start Date</label>
                <input type="text" {...register("headings.work.startDate")}/>
            </div>
            <div className="form-input">
                <label htmlFor="endDate">End Date</label>
                <input type="text" {...register("headings.work.endDate")}/>
            </div>
        </div>
    )
}