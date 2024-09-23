import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HomeCatagory } from './homecatogary';

describe('Home Navigation Categories', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <HomeCatagory display={'d-block d-lg-none'} />
      </BrowserRouter>
    );
  });

  it('Navigation bar category list should be rendered', async () => {
    const categoryList = await screen.findByTestId('hm-catagory');
    expect(categoryList).toBeInTheDocument();
  });

  it('Navigation bar should contain all 5 categories', () => {
    const categoryNames = ['Articles', 'People', 'Learning', 'Jobs', 'Games'];

    categoryNames.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });
});
