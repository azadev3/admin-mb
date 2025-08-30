import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { client } from './config/client.ts';
import { store } from './store/store.ts';
import { Toastdev, ToastdevProvider } from '@azadev/react-toastdev';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './auth/login/LoginPage.tsx';
import { ChakraProvider } from '@chakra-ui/react';
import { ProtectedRoute } from './auth/ProtectedRoute.tsx';
import { theme } from './theme/index.ts';
import './global.css';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <QueryClientProvider client={client}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <ToastdevProvider toastTheme="dark-pumping">
            <Toastdev />
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/*"
                element={
                  <ProtectedRoute>
                    <App />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </ToastdevProvider>
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  </Provider>,
);
