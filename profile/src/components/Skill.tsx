import "../styles/Skill.css"

interface ISkill{
    title: string,
    emoji: string,
    backgroundColor: string;
}

export default function Skill(props: ISkill){
    return(
        <div className="skill" style={{backgroundColor: props.backgroundColor}}>
            <span className="skillText">{props.title}</span>
            <span>{props.emoji}</span>
        </div>
    );
}