import React from "react";
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from "..";

const currentPhoto = {
    name: 'Park Bench',
    category: 'Landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
};

afterEach(cleanup)

describe('Modal component', () => {
    it('renders', () => {
        // baseline render component test
      });

it('matches snapshot', () => {
    const { asFragment } = render(<Modal />);
    expect(asFragment()).toMatchSnapshot();
});

describe('Click Event', () => {
    it('calls onClose handler', () => {

    })
});
});
    