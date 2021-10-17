import React from "react";

import { StaticImage as Img } from "gatsby-plugin-image";
import { graphql } from "gatsby";

import useMediaQuery from "use-media-query-hook";

// eslint-disable-next-line import/no-unresolved
import Layout from "../components/Layout";
import SEO from "../components/seo";
import Footer from "../components/footer";
import CallToActions from "../components/call-to-actions";

const Home = ({ data }) => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Layout>
      <SEO title={data.site.siteMetadata.title} />
      <div className="grid-x" style={{ height: "100%" }}>
        <div className="large-4 medium-12 cell text-center theta-static-container">
          <div className="theta-header">
            <h1 />
          </div>
          <div className="theta-spacer" />
          <div className="theta-ticket-vscroller" />
          <div className="theta-spacer" />
          <CallToActions />
          <br />
        </div>
        <div className="large-8 medium-12 cell theta-scroll-container">
          <div className="grid-container theta-content">
            <div className="theta-spacer show-for-small-only" />
            <div className="theta-center-on-mobile">
              <Img
                placeholder="blurred"
                src="../images/avatar_5.png"
                alt={""}
                width={140}
                height={170}
              />
              <br />
            </div>
            <div className="theta-spacer" />
          </div>
          <div className="grid-container theta-content">
            <div className="splitter" />
            {!isMobile && (
              <div className="large-8 medium-12 cell">
                <Footer />
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        event {
          name
          shortName
          shopLink
          price
        }
      }
    }
  }
`;

export default Home;
