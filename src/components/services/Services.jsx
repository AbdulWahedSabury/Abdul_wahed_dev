import { useState } from "react";
import "./services.css";
const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="section services" id="services">
      <h2 className=" section__title">Services</h2>
      <span className=" section__subtitle">What i offer</span>
      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Product <br /> Designer
            </h3>
          </div>
          <span
            className="services__button"
            onClick={() => {
              toggleTab(1);
            }}
          >
            View More
            <i
              className="uil uil-arrow-right services__button-icon"
              onClick={() => {
                toggleTab(1);
              }}
            ></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active__modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => {
                  toggleTab(0);
                }}
              ></i>
              <h3 className="services__modal-title"></h3>
              <p className="services__modal-dec">
                Services with more than 2 years of experience. Providing quality
                work to clients and companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  I develop the user interface.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  I position your company brand.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Providing quality work to clients
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-database services__icon"></i>
            <h3 className="services__title">
              DataBase <br /> Designer
            </h3>
          </div>
          <span
            className="services__button"
            onClick={() => {
              toggleTab(2);
            }}
          >
            View More
            <i
              className="uil uil-arrow-right services__button-icon"
              onClick={() => {
                toggleTab(2);
              }}
            ></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active__modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => {
                  toggleTab(0);
                }}
              ></i>
              <h3 className="services__modal-title"></h3>
              <p className="services__modal-dec">
                Services with more than 2 years of experience. Providing quality
                work to clients and companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Providing quality work to clients
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Providing quality work to clients
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Providing quality work to clients
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-apps services__icon"></i>
            <h3 className="services__title">
              Backend <br /> Developer
            </h3>
          </div>
          <span
            className="services__button"
            onClick={() => {
              toggleTab(3);
            }}
          >
            View More
            <i
              className="uil uil-arrow-right services__button-icon"
              onClick={() => {
                toggleTab(3);
              }}
            ></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active__modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => {
                  toggleTab(0);
                }}
              ></i>
              <h3 className="services__modal-title"></h3>
              <p className="services__modal-dec">
                Services with more than 2 years of experience. Providing quality
                work to clients and companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Providing quality work to clients
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Providing quality work to clients
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Providing quality work to clients
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
