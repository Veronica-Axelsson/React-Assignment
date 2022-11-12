import React, {useEffect, useState} from 'react';
import './style.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeView from './views/HomeView';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import ContactsView from './views/ContactsView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import WishListView from './views/WishListView';
import ShoppingCartView from './views/ShoppingCartView';
import NotFoundView from './views/NotFoundView';
import {ProductContext, FeaturedProductsContext, ProductSection1Context} from './contexts/contexts';

function App() {
  const [products, setProducts] = useState([])
  const [featured, setFeatured] = useState([])
  const [productSection1, setProductSection1] = useState([])

  useEffect(() => {
    const fetchAllData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts(await result.json())
    }
    fetchAllData()

    const fetchFeaturedData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setFeatured(await result.json())
    }
    fetchFeaturedData()

    const fetchProductSection1 = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setProductSection1(await result.json())
    }
    fetchProductSection1()

  }, [setProducts, setFeatured, setProductSection1])  

  return (
    <BrowserRouter>
      <ProductContext.Provider value={products}>
      <FeaturedProductsContext.Provider value={featured}>
      <ProductSection1Context.Provider value={productSection1}>
        <Routes>
          <Route path="/" element={<HomeView />}/>
          <Route path="/categories" element={<CategoriesView/>}/>
          <Route path="/products" element={<ProductsView />}/>
          <Route path="/products/:name" element={<ProductDetailsView/>}/>
          <Route path="/contacts" element={<ContactsView/>}/>
          <Route path="/Search" element={<SearchView/>}/>
          <Route path="/compare" element={<CompareView/>}/>
          <Route path="/wishlist" element={<WishListView/>}/>
          <Route path="/shoppingcart" element={<ShoppingCartView/>}/>
          <Route path="*" element={<NotFoundView/>}/>
        </Routes>
      </ProductSection1Context.Provider >
      </FeaturedProductsContext.Provider>
      </ProductContext.Provider>
    </BrowserRouter>
  );
}

export default App;
