import React from "react";
import './BubtHeader.css';

import Bubt_Header_Logo from "../../images/Bubt_Header_Logo.png";
import Annex_Logo from "../../images/Annex_Logo.png";
import Phone from "../../images/Phone.png";
import Mail from "../../images/Mail.png";
import All_Notice from "../../images/All_Notice.jpg";
import Events from "../../images/Events.png";

const BubtHeader = () => {
  return (
    <div className="header-area header-wrapper transparent-header">
      <div className="header_top bg_theme">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <a
                href="https://bubt.edu.bd/"
                target="_blink"
                data-toggle="tooltip"
                data-placement="bottom"
                title="BUBT"
              >
                <img src={Bubt_Header_Logo} alt="" />
              </a>
            </div>
            <div className="col-md-6 col-12">
              <div className="header_top_center">
                <div className="header_top_center_menu">
                  <ul className="login_register">
                    <li>
                      <a
                        href="https://annex.bubt.edu.bd/"
                        target="_blink"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="NX-BUBT"
                      >
                        <img src={Annex_Logo} alt="Logo" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+8801680050630"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Phone"
                      >
                        <img src={Phone} alt="Phone" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:info@bubt.edu.bd"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="E-mail"
                      >
                        <img src={Mail} alt="E-mail" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.bubt.edu.bd/Home/all_notice"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Notice"
                        target="_blink"
                      >
                        <img src={All_Notice} alt="Notice" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://event.bubt.edu.bd/"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Events"
                        target="_blink"
                      >
                        <img src={Events} alt="Events" />{" "}
                      </a>
                    </li>
                  </ul>
                  <div className="header_top_center_title">
                    <p>Department of</p>
                    <h2>Civil Engineering</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BubtHeader;
