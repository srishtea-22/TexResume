import { useFormContext } from "react-hook-form";

export default function EducationSection() {
    const { register } = useFormContext();

    return (
        <div className="form">
            <div className="form-input">
                <label htmlFor="degree">Degree</label>
                <input type="text" id="degree" name="degree" {...register("headings.education.degree")} />
            </div>
            <div className="form-input">
                <label htmlFor="schoolName">School Name</label>
                <input type="text" id="schoolName" name="schoolName" {...register("headings.education.schoolName")} />
            </div>
            <div className="form-input">
                <label htmlFor="schoolLocation">School Location</label>
                <input type="text" id="schoolLocation" name="schoolLocation" {...register("headings.education.schoolLocation")} />
            </div>
            <div className="form-input">
                <label htmlFor="gpa">GPA</label>
                <input type="text" id="gpa" name="gpa" {...register("headings.education.gpa")} />
            </div>
            <div className="form-input">
                <label htmlFor="startDate">Start Date</label>
                <input type="text" id="startDate" name="startDate" {...register("headings.education.startDate")} />
            </div>
            <div className="form-input">
                <label htmlFor="endDate">End Date</label>
                <input type="text" id="endDate" name="endDate" {...register("headings.education.endDate")} />
            </div>
        </div>
    )
}