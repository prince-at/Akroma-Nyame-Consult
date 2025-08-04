import picture from "../images/WhatsApp Image 2025-06-29 at 3.08.04 PM.jpeg";
import { FaBriefcase, FaPlane, FaGem } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="full-container-portfolio">
      <div className="portfolio-text-container">
        <img src={picture} alt={picture} className="uk-picture" />
        <div className="portfolio-stack">
          <div className="stack-text">
            <div className="stack-item">
              <div className="port-file">
                {" "}
                <FaPlane
                  style={{ color: "#ce5263", fontSize: "1.5rem" }}
                />{" "}
                {/* Airplane icon */}
                <h1 className="icon-plane">Study Abroad</h1>
                <span className="icon-text">
                  We've helped many students turn their academic dreams into
                  international success stories. With a passion for global
                  education and years of experience guiding applicants through
                  every stage of the study abroad process, we offer personalized
                  support—from selecting the right university and country to
                  handling applications, visa guidance, and pre-departure
                  preparation.
                </span>
              </div>
              <br />
              <hr />
              <div className="port-file">
                <div>
                  {" "}
                  <FaBriefcase
                    style={{ color: "#ce5263", fontSize: "1.5rem" }}
                  />{" "}
                  {/* Airplane icon */}
                  <h1 className="icon-plane">Work Abroad</h1>
                  <span className="icon-text">
                    We've helped many skilled professionals and aspiring workers
                    take the leap toward international employment. Our mission
                    is to simplify the work abroad process, guiding clients
                    through everything from job placement and CV optimization to
                    visa application and relocation support.
                  </span>
                </div>
                <br />
                <hr />
              </div>
              <div className="port-file">
                <div>
                  {" "}
                  <FaGem
                    style={{ color: "#ce5263", fontSize: "1.5rem" }}
                  />{" "}
                  {/* Airplane icon */}
                  <h1 className="icon-plane">Luxury & Vacation</h1>
                  <span className="icon-text">
                    Indulge in opulent accommodations and exclusive experiences,
                    designed for those seeking a lavish escape.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="our-portfolio-container">
            <h1 className="our-portfolio">WHY US?</h1>
            <span className="portfolio-text-1">
              {" "}
              Crafting Unforgettable Memories
            </span>
            <span className="portfolio-text-2">Our Portfolio</span>
            <button className="portfolio-button">See Portfolio</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
