import "./About.css";
import {skills} from "../../skills";

export default function About() {
  const skillList = skills.map(skill => (
    <div className="skill">
      <h5>{skill.title}</h5>
      <i className={skill.icon}></i>
    </div>
  ))
  return (
    <div className="About">
      <h1>About me</h1>
      <div className="about-flex">
        <div className="left">

        </div>
        <div className="right">
          <p> 
          Welcome to my portfolio! I am a dedicated and passionate Ph.D. holder in Chemistry with a strong foundation in [specific subfield, e.g., Organic Chemistry]. Throughout my academic journey, I have delved into the intricate world of molecules and reactions, seeking to unravel the mysteries of the chemical realm.
        My research has revolved around [brief description of your research focus], where I have had the privilege of exploring novel methodologies and contributing to advancements in [mention any specific breakthroughs or contributions]. This journey has not only honed my analytical and problem-solving skills but has also fostered a deep appreciation for the elegance of chemical processes.
        Beyond the laboratory
        </p>
        </div>
        
      </div>
      <div className="skills-container">
        <h3>My skills include but not limited to...</h3>
        <div className="skills"> 
          {skillList}
        </div>
      </div>
      
      
    </div>
  );
}