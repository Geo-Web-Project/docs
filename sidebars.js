/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  introSidebar: [{ type: "autogenerated", dirName: "002-introduction" }],
  gettingStartedSidebar: [
    { type: "autogenerated", dirName: "003-getting-started" },
  ],
  conceptsSidebar: [{ type: "autogenerated", dirName: "004-concepts" }],
  developersSidebar: [{ type: "autogenerated", dirName: "005-developers" }],
  communitySidebar: [
    { type: "autogenerated", dirName: "006-community-and-governance" },
  ],
};

module.exports = sidebars;
