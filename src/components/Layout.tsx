import React, { FunctionComponent } from "react";

import CookieConsent from "react-cookie-consent";

import { useLocation } from "@reach/router";
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies";

export type LayoutProps = {};

import "../styles/app.scss";

const Layout: FunctionComponent<LayoutProps> = props => {
  const location = useLocation();

  const cookieAccepted = () => {
    initializeAndTrack(location);
  };

  return (
    <>
      <>{props.children}</>
      <CookieConsent
        location="bottom"
        buttonText="Akzeptieren"
        declineButtonText="Ablehnen"
        cookieName="gatsby-gdpr-google-analytics"
        onAccept={cookieAccepted}
      >
        Wir verwenden Cookies, um unsere Website und unseren Service zu optimieren.
      </CookieConsent>
    </>
  );
};

export default Layout;
