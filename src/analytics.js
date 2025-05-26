// src/analytics.js
import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-FDGLT5L257"); // Replace with your actual ID
};

export const trackPageView = () => {
  ReactGA.send("pageview");
};
