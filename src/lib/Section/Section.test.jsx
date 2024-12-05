import React from 'react';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Section from './index';

describe('Section Component', () => {
  it('renders the Section component with children', () => {
    render(
      <Section>
        <p>Section Content</p>
      </Section>
    );
    const content = screen.getByText('Section Content');
    expect(content).toBeInTheDocument();
  });

  it('applies the correct class from styles.module.scss', () => {
    render(
      <Section>
        <p>Section Content</p>
      </Section>
    );
    const sectionElement = screen.getByText('Section Content').parentElement;
    expect(sectionElement).toHaveClass('section');
  });
});
