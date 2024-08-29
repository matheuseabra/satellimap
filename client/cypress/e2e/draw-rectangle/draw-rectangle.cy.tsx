/// <reference types="cypress" />

describe("Draw Rectangle", () => {
  it("should draw a rectangle", () => {
    cy.intercept("GET", "/api/images/**", {
      statusCode: 200,
      body: [
        {
          id: "4c913c70-6eab-492a-ab1e-349dfd43c8e8",
          image_id: "fdf52849-1b8e-42ed-8401-065036943aa0",
          type: "rectangle",
          coordinates: [
            [
              {
                lat: 38.5610526244698,
                lng: -9.6514892578125,
              },
              {
                lat: 38.6533432782375,
                lng: -9.6514892578125,
              },
              {
                lat: 38.6533432782375,
                lng: -9.49493408203125,
              },
              {
                lat: 38.5610526244698,
                lng: -9.49493408203125,
              },
            ],
          ],
          created_at: "2024-08-28T14:40:01.122669+00:00",
          updated_at: "2024-08-28T14:40:01.122669+00:00",
        },
        {
          id: "b7c5a459-110c-4e77-835c-59f11e6cae1d",
          image_id: "fdf52849-1b8e-42ed-8401-065036943aa0",
          type: "rectangle",
          coordinates: [
            [
              {
                lat: 39.1769170949608,
                lng: -7.943115234375,
              },
              {
                lat: 39.2641579509422,
                lng: -7.943115234375,
              },
              {
                lat: 39.2641579509422,
                lng: -7.80029296875,
              },
              {
                lat: 39.1769170949608,
                lng: -7.80029296875,
              },
            ],
          ],
          created_at: "2024-08-28T14:40:14.778407+00:00",
          updated_at: "2024-08-28T14:40:14.778407+00:00",
        },
        {
          id: "6ab6314c-da4f-4f7b-acf6-bb24e836b0e3",
          image_id: "fdf52849-1b8e-42ed-8401-065036943aa0",
          type: "rectangle",
          coordinates: [
            [
              {
                lat: 38.9594087924542,
                lng: -9.5306396484375,
              },
              {
                lat: 39.0831721934762,
                lng: -9.5306396484375,
              },
              {
                lat: 39.0831721934762,
                lng: -9.24774169921875,
              },
              {
                lat: 38.9594087924542,
                lng: -9.24774169921875,
              },
            ],
          ],
          created_at: "2024-08-28T14:40:55.562377+00:00",
          updated_at: "2024-08-28T14:40:55.562377+00:00",
        },
      ],
    });

    cy.intercept('POST', '/api/images/**', {
      test: 'test'
    })
    
    cy.visit("http://localhost:3000");

    cy.get(".leaflet-draw-draw-rectangle")
      .click()
      .then(($el) => {
        const { top, left } = $el[0].getBoundingClientRect();

        cy.get("body")
          .trigger("mousedown", {
            clientX: left - 500,
            clientY: top + 500,
          })
          .trigger("mousemove", {
            clientX: 500,
            clientY: 500,
          })
          .trigger("mouseup", {
            clientX: 500,
            clientY: 500,
          });
      });
  });
});
