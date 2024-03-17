import "./Skills.css";
import Language from "./Language";

const languages = ['Cpp', 'Data-Structure', 'HTML', 'CSS','Javascript', 'ReactJs'];

function Skills() {
  return (
    <div className="outerSkill" id="Skills">
      <div className="skills-bar">

      {languages.map((lang,index)=>(<Language key={index} lang={lang} cssClass={lang}/>))}
       
      </div>
      <div className="topHeading">
        <h1>Skills :)</h1>
      </div>
    </div>
  );
}

export default Skills;
 