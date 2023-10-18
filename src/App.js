import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, NavBar, SearchResults, ProductPage, Checkout, NavFooter } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <NavFooter />
    </BrowserRouter>
  );
};

export default App;
