import Skill from "./Skill";
import "../styles/SkillList.css"
import { Skills } from "../data/Skills";

export default function SkillList(){

    function SetEmoji(level: string){
        switch (level.toUpperCase()){
            case 'BEGINNER':
                return "👶🏻"
            case 'INTERMEDIATE':
                return "👌🏻"
            case 'ADVANCED':
                return "💪🏻"
            default:
                return "🚀"
        }
    }

    return (
        <div className="skillList">
            {Skills.map(skill => (
                <Skill title={skill.skill} emoji={SetEmoji(skill.level)} backgroundColor={skill.color} />
            ))}
        </div>
    );
}