import { useFormContext } from "react-hook-form"

export default function SkillsSection() {
    const { register } = useFormContext();

    return (
        <div className="form">
            <div className="form-input">
                <label htmlFor="progLang">Programming Languages</label>
                <input type="text" id="progLang" name="progLang" {...register("headings.skills.progLang")}/>
            </div>
            <div className="form-input">
                <label htmlFor="frameworks">Frameworks and Libraries</label>
                <input type="text" id="frameworks" name="frameworks" {...register("headings.skills.frameworks")}/>
            </div>
            <div className="form-input">
                <label htmlFor="tools">Tools and Technologies</label>
                <input type="text" id="tools" name="tools" {...register("headings.skills.tools")}/>
            </div>
            <div className="form-input">
                <label htmlFor="others">Other Skills</label>
                <input type="text" id="others" name="others" {...register("headings.skills.others")}/>
            </div>
        </div>
    )
}