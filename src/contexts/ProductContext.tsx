import {
    useState,
    useContext,
    createContext,
    useEffect,
    ReactNode,
    use,
  } from "react";
  
  type Products = {
    id:number,
    productName: string;
    price: string;
    rating: string;
    sizes: string[];
    imageUrl: string;
    reviews: string;
  };
  
  type ProductContextType = {
    productData: Products[];
  };
  
  const ProductContext = createContext<ProductContextType | undefined>(undefined);
  
  export const ProductProvider = ({ children }: { children: ReactNode }) => {
    const [productData, setProductData] = useState([]);
    useEffect(() => {
      fetch("http://localhost:3000/api/products")
        .then((response) => response.json())
        .then((data) => setProductData(data))
        .catch((error) => {
          console.log("Error while fetching", error);
        });
    }, []);
  
    return (
      <ProductContext.Provider value={{ productData }}>
        {children}
      </ProductContext.Provider>
    );
  };
  
  export const useProductContext = (): ProductContextType => {
    const context = useContext(ProductContext);
    if (!context) {
      throw new Error("useUserContext must be used within a UserProvider");
    }
    return context;
  };
  
  