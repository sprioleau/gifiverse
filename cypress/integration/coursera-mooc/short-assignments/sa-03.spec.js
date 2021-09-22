/* eslint-disable no-undef */
/// <reference types="cypress" />

const override = false;
const rootUrl = process.env.NODE_ENV === "development" && !override ? "http://localhost:8080" : "https://videwhoa.netlify.app";

describe("Coursera MOOC Tests", () => {
  beforeEach(() => {
    cy.visit(rootUrl);
  });

  it("Displays correct title", () => {
    cy.get("[data-c-title]").contains("Videwhoa!");
  });

  it("Includes a search input", () => {
    cy.get("input[data-c-search-input]").type("pixar");
    cy.get("li[data-c-video-list-item]").should("have.length.above", 4);
  });
});
