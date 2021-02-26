import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { queryByTitle } = render(<App/>)
  expect(queryByTitle("app")).toBeInTheDocument();
});
