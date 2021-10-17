import { StaticImage as Img } from "gatsby-plugin-image";
import React from "react";

import { StaticQuery, graphql } from "gatsby";

function CallToActions() {
  return (
    <StaticQuery
      query={callToActionsQuery}
      render={data => {
        return (
          <div className="theta-actions">
            <a href={data.site.siteMetadata.profile.facebook}>
              <Img
                className={"theta-actions-img"}
                src="../images/action_facebook.svg"
                layout={"constrained"}
                alt={""}
              />
            </a>
            <a href={data.site.siteMetadata.profile.instagram}>
              <Img
                className={"theta-actions-img"}
                src="../images/action_instagram.svg"
                layout={"constrained"}
                alt={""}
              />
            </a>
            <a href={`mailto:${data.site.siteMetadata.profile.email}`}>
              <Img
                className={"theta-actions-img"}
                src="../images/action_mail.svg"
                layout={"constrained"}
                alt={""}
              />
            </a>
            <a href={`tel:${data.site.siteMetadata.profile.phone}`}>
              <Img
                className={"theta-actions-img"}
                src="../images/action_call.svg"
                layout={"constrained"}
                alt={""}
              />
            </a>
          </div>
        );
      }}
    />
  );
}

const callToActionsQuery = graphql`
  {
    site {
      siteMetadata {
        profile {
          facebook
          youtube
          instagram
          email
          phone
          website
        }
      }
    }
  }
`;

export default CallToActions;
