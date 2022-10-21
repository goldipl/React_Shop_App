import { createContext, ReactNode, useState } from 'react';

type ShoppingCartProviderProps = {
  children: ReactNode
}

export const ShopContext = createContext({});

export const ShopProvider = ({children}:ShoppingCartProviderProps) => {
  const [productsQuantity, setProductsQuantity] = useState(0);

  return (
    <ShopContext.Provider value={{
      productsQuantity,
      setProductsQuantity,
    }}>
      {children}
    </ShopContext.Provider>
  );
}