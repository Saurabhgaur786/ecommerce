import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      if (response) {
        setProducts(response.data);
      }
    } catch (error) {
      console.log("something went wrong:", error.response.data);
    }
  };

  useEffect(() => {
    // if (!authToken) {
    //   history.push("/");
    // }
    getProducts();
  }, []);

  return (
    <div className="dashboard-container">
      <div className="products-container">
        {products.length ? (
          <div className="product-list">
            {products.map((product) => (
              <div className="product">
                <div className="image">
                  <div className="catgory">{product.category}</div>
                  <img src={product.image} />
                </div>
                <div className="title">{product.title}</div>
                <div className="desc">{product.description}</div>
                <div className="cat">
                  <button>{product.price}</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>No Products Found</div>
        )}
      </div>
    </div>
  );
};
export default Dashboard;
