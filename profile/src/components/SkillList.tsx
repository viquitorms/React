import Skill from "./Skill";
import "../styles/SkillList.css"

export default function SkillList(){
    return (
        <div className="skillList">
            <Skill title="React" emoji="⚛️" backgroundColor="Red"/>
            <Skill title="HTML" emoji="🚀" backgroundColor="Blue"/>
            <Skill title="JavaScript" emoji="😎" backgroundColor="Black"/>
        </div>
    );
}