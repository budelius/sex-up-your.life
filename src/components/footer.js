import { Link } from "gatsby";
import React from "react";

const Footer = () => (
  <div className="imprint">
    <Link to="/imprint">IMPRESSUM</Link>
    <span className="show-for-large">&nbsp;|&nbsp;</span>
    <Link to="/privacy-policy">DATENSCHUTZ</Link>
    <span className="show-for-large">&nbsp;|&nbsp;</span>
    <Link to="/subscribe-for-newsletter">NEWSLETTER</Link>
  </div>
);

export default Footer;
