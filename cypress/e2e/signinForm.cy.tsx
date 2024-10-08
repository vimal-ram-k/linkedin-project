import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('template spec', () => {
  it('passes', () => {
    let width = 450;
    let height = 800;
    cy.viewport(width, height);
    cy.visit('http://localhost:5173/home');

    cy.get('[data-testid="signin-btn"]').click();
    cy.wait(2000);
    cy.get('input[name = "username"]').type('vimalramk99@gmail.com');
    cy.wait(2000);

    cy.get('input[name = "password"]').type('1605--Vr');
    cy.wait(2000);

    cy.get('[data-testid="test-submit"]').click();
    cy.wait(2000);

    cy.url().should('include', '/feed');
    cy.get('[data-testid="show-less"]').click();
  });
});
