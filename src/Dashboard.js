import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ProductDetails from "./product-detail";

const Dashboard = () => {
  const history = useHistory();

  const [products, setProducts] = useState([]);
  const [product, setSelectProduct] = useState({
    product: { title: "Not product" },
    active: false,
  });
  // const [showProduct, setShowProduct] = useState(false);
  const login = localStorage.getItem("login");
  const userName = useSelector((state) => state.user.username);

  // const setProductDetail = (product) => {
  //   setShowProduct(true);
  //   setSelectProduct(product);
  // };



  useEffect(() => {
    if (!login) {
      history.push("/login");
    }
    getProducts();
  }, []);

  const getProducts = async () => {
    // try {
    const response = await axios.get(`https://fakestoreapi.com/products`);
    if (response) {
      setProducts(response.data);
    }
    // } catch (error) {
    //   console.log("something went wrong:", error.response.data);
    // }
  };

  return (
    <div className="dashboard-container">
      {product.active ? (
        <ProductDetails props={product} />
      ) : (
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
                    <button
                      onClick={() =>
                        setSelectProduct({
                          product: product,
                          active: true
                        })
                      }
                    >
                      {product.price}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>No Products Found</div>
          )}
        </div>
      )}
    </div>
  );
};
export default Dashboard;
