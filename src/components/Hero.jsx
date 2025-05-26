import React from "react";
import "./../hero.css";
import TrueFocus from "./TrueFocus";
import resume from "../assets/resume.pdf";
import Pic from "../assets/final.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ReactGA from "react-ga4";

const Hero = () => {
  const handleDownloadCV = () => {
    ReactGA.event({
      category: "Interaction",
      action: "Download CV",
      label: "Hero Section"
    });
    window.open(resume, "_blank");
  };

  return (
    <section className="hero hero-with-animation">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-2 text-center text-md-start mb-4 mb-md-0">
            <img
              src={Pic}
              alt="Abubakari Sherifdeen"
              className="profile-img shadow"
            />
          </div>
          <div className="col-12 col-md-6 offset-md-1 text-center text-md-start">
            <div className="socials mb-2">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a
                href="https://github.com/blakcoder2017"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/abubakari-sherifdeen-b67a6864/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </div>
            <h1 className="display-4 fw-bold">Abubakari Sherifdeen</h1>

            <TrueFocus />
            <br />
            <button
              className="btn btn-outline-secondary mt-3"
              onClick={handleDownloadCV}
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;




// import React from "react";
// import "./../hero.css";
// import TrueFocus from "./TrueFocus";
// import resume from "../assets/resume.pdf";
// import Pic from "../assets/final.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// const Hero = () => {


//   return (
//     <section className="hero hero-with-animation">
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-12 col-md-2 text-center text-md-start mb-4 mb-md-0">
//             <img
//               src={Pic}
//               alt="Abubakari Sherifdeen"
//               className="profile-img shadow"
//             />
//           </div>
//           <div className="col-12 col-md-6 offset-md-1 text-center text-md-start">
//             <div className="socials mb-2">
//               <a href="#" target="_blank" rel="noopener noreferrer">
//                 <i className="bi bi-twitter-x"></i>
//               </a>
//               <a
//                 href="https://github.com/blakcoder2017"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FontAwesomeIcon icon={faGithub} size="lg" />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/abubakari-sherifdeen-b67a6864/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FontAwesomeIcon icon={faLinkedin} size="lg" />
//               </a>
//             </div>
//             <h1 className="display-4 fw-bold">Abubakari Sherifdeen</h1>

//             <TrueFocus />
//             <br />
//        ç
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
