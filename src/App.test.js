import { render, screen } from '@testing-library/react';
import App from './App';
import '../style.css';
// import '../main.js';
import profilePic from '../images/profilePic.jpeg';
import logomain from '../images/logomain.png';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
