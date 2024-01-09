import { NightwatchAPI, NightwatchTests } from "nightwatch";

const home: NightwatchTests = {
  "test url": () => {
    browser.window.setSize(390, 844);
    browser.url("http://www.google.com");
  },

  "ensure page is accessible": () => {
    browser.axeInject().axeRun("body");
  },
};

export default home;
