import '@Css/ProdCard.scss';
export default function ProdCard() {
    return (
      <>
      <main role="main">
  <div className="product">
    <figure>
      <img
        src="https://raw.githubusercontent.com/itbruno/productpreview/master/assets/img/t-shirt.jpg"
        alt="Product Image"
        className="product-image"
      />
    </figure>
    <div className="product-description">
      <div className="info">
        <h1>LOREM IPSUM</h1>
        <p>short disc</p>
      </div>
      <div className="price">89</div>
    </div>
    <div className="product-sidebar">
      <button className="buy">
        <span>BUY ITEM</span>
      </button>
      <button className="info">
        <span>MORE INFO</span>
      </button>
      <button className="size">
        <span>SIZES</span>
      </button>
      <button className="colors">
        <span>
          <a href="" className="color black" />
          <a href="" className="color white" />
          <a href="" className="color red" />
        </span>
      </button>
    </div>
  </div>
</main>

      </>
      )
}