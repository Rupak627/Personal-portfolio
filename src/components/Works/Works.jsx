import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Techm from "../../img/techm.png";
import Download from "../../img/download.jpg";
import Codetrays from "../../img/codetrays.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'

const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style= {{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>

          <span>Brands & Clients</span>
          <spane>
          Worked for a export company for its official and internal website based on 
            <br />
            Reactjs, Redux, CSS3, HTML5. 
           <br />
           Also, working on an inhouse product using SSR, Reactjs, Redux, Nextjs.                     
             <br />
             reports and documents.          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
    <img src={Codetrays} alt="" />      </div>
          <div className="w-secCircle">
            <img src={Techm} alt="" />
          </div>
          <div className="w-secCircle">
            <p>Companies</p>
          </div>{" "}
          <div className="w-secCircle">
            <img src={Download} alt="" />
          </div>
          <div className="w-secCircle">
          <p>coming soon</p>
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
