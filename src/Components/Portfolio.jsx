/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Back-end-developer-portfolio";

const imageAltText = "Image of computer and someone typing";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Chat-with-Websites Chatbot with LangChain, Beautiful Soup, and OpenAI",
    description:
      "This application, powered by LangChain Python framework, Beautiful Soup for web scraping, OpenAI API for natural language processing, and Streamlit for GUI, allows you to engage in conversations with any website of your choice.",
    url: "https://github.com/Dhie-boop/Chatbot",
  },
  {
    title: "Multiple_Disease_Prediction_Using_ML",
    description:
      "This application, powered by machine learning algorithms and built using Streamlit, enables users to predict the likelihood of three common diseases: heart disease, Parkinson's disease, and diabetes.",
    url: "https://github.com/Dhie-boop/Multiple_Disease_Prediction_Using_ML",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
