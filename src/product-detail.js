import "./App.css";

const ProductDetails = (props) => {
  const carts = [];
  const addtocart = () => {
    localStorage.setItem("cart", carts.push("product"));
  };
  let product = props.props.product;
  console.log("priductss---", product);
  return (
    <div>
      <h1> Product- Details</h1>

      <div className="product-detail">
        <div className="product-image">
          <img src={product.image} />
        </div>
        <div className="product-text">
          <div className="product-cat">{product.category}</div>
          <div style={{ float: "right" }}>
            <div
              style={{
                width: "180px",
                backgroundColor: "grey",
                textAlign: "center",
                padding: "20px",
                marginRight: "20px",
              }}
            >
              {product.price}
            </div>
          </div>
          <div className="product-title">{product.title}</div>
          <div className="product-desc">{product.description}</div>
          <div className="product-value">
            <button onClick={addtocart}>+ Add To Cart</button>
            <p>OR</p>
            <button style={{ background: "orangered" }} disabled={true}>
              + Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
