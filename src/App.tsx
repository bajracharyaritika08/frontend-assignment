import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import './App.css';
import { Navigation } from './navigation/Navigation';
import { ProductContext, ProductReducer } from './context/ProductContext';
const queryClient = new QueryClient();
function App() {
  const {state, dispatch} = ProductReducer();
  return (
    <div>
      <ProductContext.Provider value={{state,dispatch}}>
        <QueryClientProvider client={new QueryClient}>
          <Navigation/>
        </QueryClientProvider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
