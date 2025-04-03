import { useFormContext, useFieldArray } from "react-hook-form"

export default function WorkSection() {
    const { register, control } = useFormContext();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "headings.work",
    });

    if (fields.length === 0) {
        append({jobTitle: "", company: "", jobDesc: "", fromDate: "", endDate: ""}, {shouldFocus: false});
    }

    return (
        <div className="form">
            {fields.map((field, index) => (
                <div key={field.id} className="work-entry">
                    <div className="form-input">
                        <label htmlFor={`jobTitle-${index}`}>Job Title</label>
                        <input type="text" id={`jobTitle-${index}`} name="jobTitle" {...register(`headings.work.${index}.jobTitle`)}/>
                    </div>
                    <div className="form-input">
                        <label htmlFor={`company-${index}`}>Company Name</label>
                        <input type="text" id={`company-${index}`} name="company" {...register(`headings.work.${index}.company`)}/>
                    </div>
                    <div className="form-input">
                        <label htmlFor={`jobDesc-${index}`}>Description of role</label>
                        <input type="text" id={`jobDesc-${index}`} name="jobDesc" {...register(`headings.work.${index}.jobDesc`)}/>
                    </div>
                    <div className="form-input">
                        <label htmlFor={`fromDate-${index}`}>Start Date</label>
                        <input type="text" id={`fromDate-${index}`} name="startDate" {...register(`headings.work.${index}.fromDate`)}/>
                    </div>
                    <div className="form-input">
                        <label htmlFor={`toDate-${index}`}>End Date</label>
                        <input type="text" id={`toDate-${index}`} name="toDate" {...register(`headings.work.${index}.toDate`)}/>
                    </div>
                    {index > 0 && <button type="button" className="remove-btn" onClick={() => remove(index)}>Remove</button>}
                </div>
            ))}
            <button type="button" className="add-btn" onClick={() => append({ projectName: "", projectLink: "", techStack: "", projectDesc: "" })}>
                Add Work
            </button>
        </div>
    )
}