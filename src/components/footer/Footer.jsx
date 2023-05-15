import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillGoogleCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div
        className="d-flex justify-content-between p-4 text-white"
        style={{ backgroundColor: "#21D192" }}
      >
        <div className="me-5">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="text-white me-4">
            <AiFillFacebook />
          </a>
          <a href="" className="text-white me-4">
            <AiFillTwitterCircle />
          </a>
          <a href="" className="text-white me-4">
            <AiFillGoogleCircle />
          </a>
          <a href="" className="text-white me-4">
            <AiFillInstagram />
          </a>
          <a href="" className="text-white me-4">
            <AiFillLinkedin />
          </a>
          <a href="" className="text-white me-4">
            <AiFillGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
