import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import './App.css';
import { Navigation } from './navigation/Navigation';
const queryClient = new QueryClient();
function App() {
  return (
    <div>
      <QueryClientProvider client={new QueryClient}>
      <Navigation/>
      </QueryClientProvider>
    </div>
  );
}

export default App;
