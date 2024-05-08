import { Link } from "react-router-dom";

export default function Card({product}) {
  const createdDate = new Date(product.created_at);
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate - createdDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (
    <div className="col-lg-4 col-md-6 col-grid-box">
      <div className="card blog-categority">
      <Link to={`/detail/${product.slug}`} className="blog-img">
          <img
            src={`http://localhost:8000/api/images/products/${product.image}`}
            alt=""
            className="card-img-top blur-up lazyload bg-img"
            style={{objectFit:'cover' , width:'100%', height:'200px'}}
          />
        </Link>
        <div className="card-body">
          <h5>{product.name}</h5>
          <a href="blog/details.html">
            <h2 className="card-title">
              {product.description}
            </h2>
          </a>
          <div className="blog-profile">
            <div className="image-name">
              <h6>{diffDays} days ago</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
