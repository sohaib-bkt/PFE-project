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
            <div className="theme-color">
              $100,23
            </div>
            <div className="main-price">
              <ul className="rating mb-1 mt-0">
                <li>
                  <i className="fas fa-star theme-color" />
                </li>
                <li>
                  <i className="fas fa-star theme-color" />
                </li>
                <li>
                  <i className="fas fa-star" />
                </li>
                <li>
                  <i className="fas fa-star" />
                </li>
                <li>
                  <i className="fas fa-star" />
                </li>
              </ul>
            </div>
          </div>
          <p className="font-light mb-sm-2 mb-0">
            short_description
          </p>
          <a
            href="{{route('shop.product.details',['slug'=>$product->slug])}}"
            className="font-default"
          >
            <h5>
               $product-name
            </h5>
          </a>
        </div>
      </div>
    </div>
  </div>
     
  );
}
