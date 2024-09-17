import { screen, render } from '@testing-library/react';
import { Home } from './home';
import { describe, expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

describe('home tests', () => {
  it('should render the linked logo', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const linkedinlogo = screen.getByAltText('Linkedin Logo');
    expect(linkedinlogo).toBeInTheDocument();
  });
});
