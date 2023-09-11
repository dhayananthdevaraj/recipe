import { render, screen , waitFor , fireEvent} from '@testing-library/react';
import App from '../App';
import Header from '../components/Header';
import Footer from '../components/Footer';


test('renders header component', () => {
  const { getByText } = render(<Header />);
  const headerElement = getByText(/Recipe App/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders footer component', () => {
  const { getByText } = render(<Footer />);
  const footerElement = getByText(/© \d{4} Recipe App/i);
  expect(footerElement).toBeInTheDocument();
});

it('renders header correctly', () => {
  const { getByTestId } = render(<App />);
  const header = getByTestId('header');
  expect(header).toBeInTheDocument();
});

it('renders home component when showRecipeList is false', () => {
  const { getByTestId } = render(<App />);
  const homeComponent = getByTestId('home');
  expect(homeComponent).toBeInTheDocument();
});

describe('App Component Integration', () => {
  it('renders recipe list and displays details when a recipe is selected', () => {
    const { getByTestId, getByText } = render(<App />);
    const recipeListItem = getByText(/Greek Salad/i); 
    fireEvent.click(recipeListItem);
    const recipeList = getByTestId('recipe-list');
    const recipeDetails = getByTestId('recipe-details');
    expect(recipeList).toBeInTheDocument();
    expect(recipeDetails).toBeInTheDocument();
  });

  it('returns to home page when "Home" button is clicked from recipe details', () => {
    const { getByTestId } = render(<App />);
    fireEvent.click(getByTestId('home-button'));
    fireEvent.click(getByTestId('recipe-list'));
    fireEvent.click(getByTestId('home-button'));
    const homeComponent = getByTestId('home');
    const recipeDetails = getByTestId('recipe-details');
    expect(homeComponent).toBeInTheDocument();
    expect(recipeDetails).not.toBeInTheDocument();
  });

  it('updates search term and filters recipes when using the search bar', () => {
    const { getByTestId, getAllByTestId } = render(<App />);
    const searchInput = getByTestId('search-input');
    fireEvent.change(searchInput, { target: { value: 'Pasta' } });
    const recipeListItems = getAllByTestId('recipe-list-item');
    expect(searchInput.value).toBe('Pasta');
    expect(recipeListItems.length).toBeGreaterThan(0);
  });
});







