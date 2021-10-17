/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react");

exports.onRenderBody = function({ setHeadComponents, setPostBodyComponents }) {
  setHeadComponents([
    // <link
    //   key={1}
    //   rel="stylesheet"
    //   href="https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/css/foundation.min.css"
    //   integrity="sha256-ogmFxjqiTMnZhxCqVmcqTvjfe1Y/ec4WaRj/aQPvn+I="
    //   crossOrigin="anonymous"
    // />
  ]);
  setPostBodyComponents([]);
};
