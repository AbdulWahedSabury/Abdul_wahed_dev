import Frontend from "./Frontend";
import Backend from "./Backend";
import './skills.css';
const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
      <div className="skill__container container grid">
      <Frontend />
      <Backend />
      </div>
    </section>
  );
}
 
export default Skills;