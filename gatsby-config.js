// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`
});

const path = require("path");

module.exports = {
  siteMetadata: {
    event: {
      shortName: "Go With The Flow Challenge",
      name: "21 Days Challenge",
      price: "€98",
      shopLink: "https://www.thetawaves.at/events-1/go-with-the-flow-1/form"
    },
    title: "21 Days Challenge",
    author: {
      name: "martin.wieser@pseekoo.com"
    },
    profile: {
      facebook: "https://www.facebook.com/groups/173938041166186/",
      instagram: "https://www.instagram.com/ninas_lifehacks/",
      youtube: "https://www.youtube.com/channel/UC5OK4lyX57wC_B55qvNYUyg",
      email: "nina.loacker@gmail.com",
      phone: "+436644349680",
      website: "https://www.thetawaves.at"
    }
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        useResolveUrlLoader: {
          options: {
            debug: true
          }
        }
        // implementation: require("node-sass")
        // sassOptions: {
        //   includePaths: ["./node_modules"]
        // }
        // sassOptions: {
        //   includePaths: [require("path").resolve(__dirname, "node_modules")]
        // }
      }
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://thetawaves.us10.list-manage.com/subscribe/post?u=bcd8bb4c2fb2a42d15431442d&amp;id=decc042931", // string; add your MC list endpoint here; see instructions below
        timeout: 3500 // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      }
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        // googleAnalytics: {
        //   trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID', // leave empty if you want to disable the tracker
        //   cookieName: 'gatsby-gdpr-google-analytics', // default
        //   anonymize: true, // default
        //   allowAdFeatures: false // default
        // },
        // googleTagManager: {
        //   trackingId: 'YOUR_GOOGLE_TAG_MANAGER_TRACKING_ID', // leave empty if you want to disable the tracker
        //   cookieName: 'gatsby-gdpr-google-tagmanager', // default
        //   dataLayerName: 'dataLayer', // default
        // },
        // facebookPixel: {
        //   pixelId: 'YOUR_FACEBOOK_PIXEL_ID', // leave empty if you want to disable the tracker
        //   cookieName: 'gatsby-gdpr-facebook-pixel', // default
        // },
        // tikTokPixel: {
        //   pixelId: 'YOUR_TIKTOK_PIXEL_ID', // leave empty if you want to disable the tracker
        //   cookieName: 'gatsby-gdpr-tiktok-pixel', // default
        // },
        hotjar: {
          hjid: "2525473",
          hjsv: "6",
          cookieName: "level-up-your-life" // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production", "development"]
      }
    }
  ]
};
