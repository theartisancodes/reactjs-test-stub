import React from 'react';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import ModelerPage from './index';

jest.mock('bpmn-js/lib/Modeler', () => {
  return jest.fn(() => ({
    importXML: jest.fn().mockResolvedValue(),
    destroy: jest.fn(),
  }));
});

jest.mock('./resources/initialDiagram', () => '<bpmn-diagram />');

describe('ModelerPage Component', () => {
  it('renders the ModelerPage component', () => {
    render(<ModelerPage />);
    const header = screen.getByText('Modeler');
    expect(header).toBeInTheDocument();

    const bpmnContainer = screen.getByTestId('bpmn-container');
    expect(bpmnContainer).toBeInTheDocument();
  });
});
