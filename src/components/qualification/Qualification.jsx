import { useState } from "react";
import "./qualification.css";
const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="section qualification">
      <h2 className=" section__title">Qualification</h2>
      <span className=" section__subtitle">My personal journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
          onClick={()=>{toggleTab(1)}}
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
          >
            <i className="uli uli-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
          onClick={()=>{toggleTab(2)}}
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification__sections">


          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">High School</h3>
                <span className="qualification__subtitle">
                  SayeedMohammad Qandad - High School
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt">2017 - 2019</i>
                </div>
              </div>
              <div>
                <span className="qualification__render"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__render"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">High Educational</h3>
                <span className="qualification__subtitle">
                  Herat - University
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt">2019 - 2023</i>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Designer</h3>
                <span className="qualification__subtitle">
                RahaNet - Afghanistan
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt">2021 - present</i>
                </div>
              </div>
              <div>
                <span className="qualification__render"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">
                RahaNet - Afghanistan
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt">2021 - present</i>
                </div>
              </div>
              <div>
                <span className="qualification__render"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__render"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Web Designer</h3>
                <span className="qualification__subtitle">
                Yaran-Soft Company - Afghanistan
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt">2020 - 2021</i>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__render"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">
                Yaran-Soft Company - Afghanistan
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt">2020 - 2021</i>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Qualification;
