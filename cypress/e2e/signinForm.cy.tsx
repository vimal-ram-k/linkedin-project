import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('template spec', () => {
  it('passes', () => {
    let width = 450;
    let height = 800;
    cy.viewport(width, height);
    cy.visit('http://localhost:5173/login/signin');

    cy.get('input[name = "username"]').type('vimalramk99@gmail.com');
    cy.get('input[name = "password"]').type('1605--Vr');
    cy.get('[data-testid="test-submit"]').click();
    cy.url().should('include', '/feed');
  });
});
