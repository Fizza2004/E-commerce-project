import { useState, createContext, useEffect } from "react";

export const CardContext = createContext();

export const CardProvider = ({children}) => {
  const [totalCount,setTotalCount] = useState(0);
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    try {
      const parsedCart = JSON.parse(storedCart);
      return Array.isArray(parsedCart) ? parsedCart : []; // Sadece dizi ise kullan
    } catch (error) {
      return []; // Hatalıysa boş dizi döndür
    }
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
  
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      }
  
      return [...prevCart, { ...product, quantity: 1 }];
    });
  
    setTotalCount((prevCount) => prevCount + 1);
  };

  const updateCartQuantity = (productId, quantity) => {
    if (quantity < 1) return;
  
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  return(
    <CardContext.Provider value={{ totalCount, setTotalCount, cart, addToCart, updateCartQuantity }}>
  {children}
</CardContext.Provider>
  )
}