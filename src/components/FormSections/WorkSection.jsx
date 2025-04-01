import { useFormContext } from "react-hook-form"

export default function WorkSection() {
    const { register } = useFormContext();

    return (
        <div className="form">
            <div className="form-input">
                <label htmlFor="jobTitle">Job Title</label>
                <input type="text" id="jobTitle" name="jobTitle" {...register("headings.work.jobTitle")}/>
            </div>
            <div className="form-input">
                <label htmlFor="company">Company Name</label>
                <input type="text" id="company" name="company" {...register("headings.work.company")}/>
            </div>
            <div className="form-input">
                <label htmlFor="jobDesc">Description of role</label>
                <input type="text" id="jobDesc" name="jobDesc" {...register("headings.work.jobDesc")}/>
            </div>
            <div className="form-input">
                <label htmlFor="fromDate">Start Date</label>
                <input type="text" id="fromDate" name="startDate" {...register("headings.work.fromDate")}/>
            </div>
            <div className="form-input">
                <label htmlFor="toDate">End Date</label>
                <input type="text" id="toDate" name="toDate" {...register("headings.work.toDate")}/>
            </div>
        </div>
    )
}