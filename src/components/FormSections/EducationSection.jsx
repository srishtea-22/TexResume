import { useFormContext, useFieldArray } from "react-hook-form";

export default function EducationSection() {
    const { register,control } = useFormContext();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "headings.education",
    });

    if (fields.length === 0) {
        append({degree: "", schoolName: "", schoolLocation: "", gpa: "", startDate: "", endDate: ""}, {shouldFocus: false})
    }

    return (
        <div className="form">
            {fields.map((field, index) => (
                <div key={field.id} className="education-entry">
                    <div className="form-input">
                        <label htmlFor={`degree-${index}`}>Degree</label>
                        <input type="text" id={`degree-${index}`} name="degree" {...register(`headings.education.${index}.degree`)} />
                    </div>
                    <div className="form-input">
                        <label htmlFor={`schoolName-${index}`}>School Name</label>
                        <input type="text" id={`schoolName-${index}`} name="schoolName" {...register(`headings.education.${index}.schoolName`)} />
                    </div>
                    <div className="form-input">
                        <label htmlFor={`schoolLocation-${index}`}>School Location</label>
                        <input type="text" id={`schoolLocation-${index}`} name="schoolLocation" {...register(`headings.education.${index}.schoolLocation`)} />
                    </div>
                    <div className="form-input">
                        <label htmlFor={`gpa-${index}`}>GPA</label>
                        <input type="text" id={`gpa-${index}`} name="gpa" {...register(`headings.education.${index}.gpa`)} />
                    </div>
                    <div className="form-input">
                        <label htmlFor={`startDate-${index}`}>Start Date</label>
                        <input type="text" id={`startDate-${index}`} name="startDate" {...register(`headings.education.${index}.startDate`)} />
                    </div>
                    <div className="form-input">
                        <label htmlFor={`endDate-${index}`}>End Date</label>
                        <input type="text" id={`endDate-${index}`} name="endDate" {...register(`headings.education.${index}.endDate`)} />
                    </div>
                    {index > 0 && <button type="button" className="remove-btn" onClick={() => remove(index)}>Remove</button>}
                </div>
            ))}
            <button type="button" className="add-btn" onClick={() => append({ projectName: "", projectLink: "", techStack: "", projectDesc: "" })}>
                Add Education
            </button>
        </div>
    )
}