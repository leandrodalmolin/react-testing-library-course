import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe("Header", () => {
/**
 * Queries accessible by everyone like:
 * 
 * - getByRole
 * - getByLabelText
 * - getByPlaceholderText
 * - getByText
 */
it('should render same text passed into title prop', () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

// // Using "findBy" (async)
// it('should render same text passed into title prop using findBy', async () => {
//   render(<Header title="My Header" />);
//   const headingElement = await screen.findByText(/my header/i);
//   expect(headingElement).toBeInTheDocument();
// });

// // Using "queryBy" you can check when a text does not exist on the screen
// // because it does not throw errors when the query is empty
// it('should not render the word "dogs"', () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.queryByText(/dogs/i);
//   expect(headingElement).not.toBeInTheDocument();
// });

// // Example of a getAll query
// it('should render two headings', () => {
//   render(<Header title="My Header" />);
//   const headingElements = screen.getAllByRole("heading");
//   expect(headingElements.length).toBe(2);
// });

// /**
//  * Fails because has two heading roles in the page (h1 and h3)
//  */
// // it('should render same text passed into title prop in a heading', () => {
// //   render(<Header title="My Header" />);
// //   const headingElement = screen.getByRole("heading");
// //   expect(headingElement).toBeInTheDocument();
// // });

// /**
//  * It does not fail because only one heading has the text "My Header"
//  * This is a really good approach because it really mimics what the user
//  * is going to do. They will look for a heading and a specific text.
//  */
// it('should render same text passed into title prop in a heading role', () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByRole("heading", { name: "My Header" });
//   expect(headingElement).toBeInTheDocument();
// });

// /**
//  * Semantic queries:
//  * 
//  * - getByAltText
//  * - getByTitle
//  */
// it('should render same text passed into title prop in the tag using semantic title', () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByTitle("Header");
//   expect(headingElement).toBeInTheDocument();
// });

// /**
//  * Queries by Test ID (try to avoid this)
//  *  
//  * - getByTestId
//  */
// it('should render same text passed into title prop in the tag using test id', () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByTestId("header-1");
//   expect(headingElement).toBeInTheDocument();
// });
})