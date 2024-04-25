import img from "@Assets/images/fashion/instagram/4.jpg";
export default function ProdCard() {


  return (
  
    <div>
      <style
  dangerouslySetInnerHTML={{
    __html:
      "\n            .r-price {\n                display: flex;\n                flex-direction: row;\n                gap: 20px;\n            }\n\n            .r-price .main-price {\n                width: 100%;\n            }\n\n            .r-price .rating {\n                padding-left: auto;\n            }\n\n            .product-style-3.product-style-chair .product-title {\n                text-align: left;\n                width: 100%;\n            }\n\n            @media (max-width:600px) {\n\n                .product-box p,\n                .product-box a {\n                    text-align: left;\n                }\n\n                .product-style-3.product-style-chair .main-price {\n                    text-align: right !important;\n                }\n            }\n        "
  }}
/>
    
    <div className="product-box">
      <div className="img-wrapper">
        <a href="{{route('shop.product.details',['slug'=>$product->slug])}}">
          <img
            src={img}
            className="w-100 bg-img blur-up lazyload"
            alt="{{ $product->name }}"
          />
        </a>
        <div className="circle-shape" />
        <div className="cart-wrap">
          <ul>
            <li>
            <a href="#">
            <i data-feather="eye" />
            </a>
            </li>
            <li>
              <a href="#" className="wishlist">
                <i data-feather="heart" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="product-style-3 product-style-chair">
            <div className="product-title d-block mb-0">
              <div className="r-price">
                <h3 className="theme-color">$21.99</h3>
                <div className="main-price">
                <p className="font-light mb-sm-2 mb-0">desc</p>
            </div>
              </div>
              <a href="product/details.html" className="font-default">
                <h3>ProdName</h3>
              </a>
            </div>
          </div>
    </div>
  </div>
     
  );
}