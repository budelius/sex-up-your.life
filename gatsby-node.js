/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// const path = require(`path`);

exports.onCreateWebpackConfig = ({ actions }) => {
  const { setWebpackConfig } = actions;
  setWebpackConfig({
    resolve: {}
  });
};
