import styles from '@Css/andrp.module.css';

import React from 'react';

export default function EditAdv() {
  return (
    <div className="row">
      <div className="col-md-8">
        <section className="section-b-space">
          <div className={`container ${styles.hoverableCard}`} style={{ border: '1px solid #dee2e6', margin: 'auto', width: '90%' }}>
                <form className="needs-validation" method="POST" action="/user/StoreProduct" encType="multipart/form-data">
                  <input type="hidden" name="user_id" defaultValue="{Auth::user()->id}" />
                  <div id="billingAddress" className="row g-4">
                    <h3 className="mb-3 theme-color">Billing address</h3>
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input type="text" className="form-control" id="name" name="name" placeholder="Enter Full Name" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="slug" className="form-label">Slug</label>
                      <input type="text" className="form-control" id="slug" name="slug" placeholder="Enter Phone Number" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="short_description" className="form-label">Short Description</label>
                      <input type="text" className="form-control" id="short_description" name="short_description" placeholder="Short Description" />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="description" className="form-label">Description</label>
                      <textarea className="form-control" id="description" name="description" defaultValue={""} />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="regular_price" className="form-label">Regular Price</label>
                      <input type="number" className="form-control" id="regular_price" name="regular_price" placeholder="Regular Price" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="sale_price" className="form-label">Sale Price</label>
                      <input type="number" className="form-control" id="sale_price" name="sale_price" placeholder="Sale Price" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="SKU" className="form-label">SKU</label>
                      <input type="text" className="form-control" id="SKU" name="SKU" placeholder="SKU" />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="stock_status" className="form-label">Stock Status</label>
                      <select className="form-select custome-form-select" id="stock_status" name="stock_status">
                        <option selected="" disabled="" value="">Choose...</option>
                        <option value="instock">In Stock</option>
                        <option value="outofstock">Out of Stock</option>
                      </select>
                    </div>
                    <div className="col-md-6" style={{ display: "none" }}>
                      <input type="number" className="form-control" id="featured" name="featured" placeholder="Featured" defaultValue="null" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="quantity" className="form-label">Quantity</label>
                      <input type="number" className="form-control" id="quantity" name="quantity" placeholder="Quantity" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="image" className="form-label">Photo</label>
                      <input type="file" className="form-control" id="image" name="image" placeholder="image" required="" accept="image/png, image/jpeg" />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="category_id" className="form-label">Categories</label>
                      <select className="form-select custome-form-select" id="category_id" name="category_id">
                        {/* Map over categories */}
                      </select>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="brand_id" className="form-label">Brands</label>
                      <select className="form-select custome-form-select" id="brand_id" name="brand_id">
                        {/* Map over brands */}
                      </select>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="categorie_product" className="form-label">Categorie Product</label>
                      <select className="form-select custome-form-select" id="categorie_product" name="categorie_product">
                        <option value="VET">Vetement</option>
                        <option value="INF">Materiel Informatique</option>
                      </select>
                    </div>
                    <button className="btn btn-solid-default mt-4" type="submit">Ajouter Produit</button>
                  </div>
                </form>
              
          </div>
        </section>
      </div>
      <div className="col-md-3">
      <div className={`card ${styles.hoverableCard}`} role="alert" style={{position: 'sticky', top: '90px', border: '1px solid #dee2e6', margin: 'auto', width: '90%', marginTop: '59px'}}>
          <div className="card-body">
            <h3 className="card-title"> <svg   xmlns="http://www.w3.org/2000/svg"   xmlnsXlink="http://www.w3.org/1999/xlink"   height="25px"   width="35px"   version="1.1"   id="Layer_1"   viewBox="0 0 512 512"   xmlSpace="preserve" >   <g>     <path       style={{ fill: "#1E0478" }}       d="M499.246,166.15c6.849,0,12.386,5.549,12.386,12.386c0,6.849-5.536,12.386-12.386,12.386h-44.564   c-6.849,0-12.386-5.536-12.386-12.386c0-6.837,5.536-12.386,12.386-12.386H499.246z"     />     <path       style={{ fill: "#1E0478" }}       d="M453.59,358.614c4.83,4.83,4.83,12.671,0,17.514c-2.428,2.415-5.598,3.629-8.757,3.629   c-3.171,0-6.342-1.214-8.769-3.629l-32.302-32.302c-4.83-4.83-4.83-12.683,0-17.514c4.843-4.843,12.683-4.843,17.526,0   L453.59,358.614z"     />     <path       style={{ fill: "#1E0478" }}       d="M430.913,3.623c4.83,4.843,4.83,12.683,0,17.514l-31.534,31.534   c-2.415,2.415-5.586,3.629-8.757,3.629s-6.342-1.201-8.757-3.629c-4.843-4.83-4.843-12.671,0-17.514l31.534-31.534   C418.23-1.208,426.069-1.208,430.913,3.623z"     />     <path       style={{ fill: "#1E0478" }}       d="M411.331,196.111c0,41.654-14.925,86.478-40.935,122.991   c-19.978,28.054-30.544,59.254-30.544,90.243v77.882c0,13.649-11.11,24.772-24.772,24.772H196.92   c-13.662,0-24.772-11.122-24.772-24.772v-77.882c0-30.989-10.565-62.189-30.544-90.243c-26.01-36.513-40.935-81.338-40.935-122.991   c0-89.587,69.683-162.478,155.331-162.478S411.331,106.524,411.331,196.111z M350.219,304.735   c22.753-31.943,36.34-72.544,36.34-108.624c0-75.925-58.573-137.706-130.559-137.706s-130.559,61.781-130.559,137.706   c0,36.08,13.587,76.681,36.34,108.624c22.121,31.051,34.21,65.732,35.077,100.548h27.695l-9.339-140.753l-23.843-50.918   c-1.784-3.827-1.499-8.323,0.768-11.89c2.279-3.58,6.218-5.747,10.454-5.747h106.816c4.236,0,8.175,2.168,10.454,5.747   c2.267,3.567,2.551,8.063,0.756,11.89l-23.83,50.918l-9.339,140.753h27.682C316.008,370.467,328.097,335.799,350.219,304.735z    M315.093,487.228l-0.012-57.173H196.92v16.201H256c6.837,0,12.386,5.536,12.386,12.386c0,6.837-5.549,12.386-12.386,12.386h-59.08   v16.201h118.161C315.093,487.228,315.093,487.228,315.093,487.228z M273.365,256.146l16.572-35.399h-67.874l16.572,35.399   c0.644,1.387,1.04,2.886,1.139,4.422l9.599,144.716h13.253l9.599-144.716C272.337,259.031,272.721,257.533,273.365,256.146z"     />   </g>   <path     style={{ fill: "#94E7EF" }}     d="M386.559,196.111c0,36.08-13.587,76.681-36.34,108.624c-22.121,31.064-34.21,65.732-35.089,100.548  h-27.682l9.339-140.753l23.83-50.918c1.796-3.827,1.511-8.323-0.756-11.89c-2.279-3.58-6.218-5.747-10.454-5.747H202.592  c-4.236,0-8.175,2.168-10.454,5.747c-2.267,3.567-2.551,8.063-0.768,11.89l23.843,50.918l9.339,140.753h-27.695  c-0.867-34.817-12.956-69.497-35.077-100.548c-22.753-31.943-36.34-72.544-36.34-108.624c0-75.925,58.573-137.706,130.559-137.706  S386.559,120.186,386.559,196.111z"   />   <path     style={{ fill: "#9B8CCC" }}     d="M315.079,430.055l0.012,57.173c0,0,0,0-0.012,0H196.918v-16.201h59.08  c6.837,0,12.386-5.549,12.386-12.386c0-6.849-5.549-12.386-12.386-12.386h-59.08v-16.201L315.079,430.055L315.079,430.055z"   />   <path     style={{ fill: "#94E7EF" }}     d="M289.936,220.747l-16.572,35.399c-0.644,1.387-1.028,2.886-1.139,4.422l-9.599,144.716h-13.253  l-9.599-144.716c-0.099-1.536-0.495-3.035-1.139-4.422l-16.572-35.399L289.936,220.747L289.936,220.747z"   />   <g>     <path       style={{ fill: "#1E0478" }}       d="M130.123,35.145c4.83,4.83,4.83,12.683,0,17.514c-2.428,2.415-5.586,3.629-8.757,3.629   c-3.171,0-6.342-1.214-8.769-3.629l-31.51-31.51c-4.83-4.843-4.83-12.683,0-17.526c4.843-4.83,12.683-4.83,17.514,0L130.123,35.145   z"     />     <path       style={{ fill: "#1E0478" }}       d="M108.348,326.188c4.843,4.843,4.843,12.683,0,17.514l-32.414,32.426   c-2.428,2.415-5.598,3.629-8.769,3.629c-3.158,0-6.329-1.214-8.757-3.629c-4.83-4.843-4.83-12.683,0-17.514l32.426-32.426   C95.665,321.357,103.517,321.357,108.348,326.188z"     />     <path       style={{ fill: "#1E0478" }}       d="M57.319,166.15c6.837,0,12.386,5.549,12.386,12.386c0,6.849-5.549,12.386-12.386,12.386H12.754   c-6.849,0-12.386-5.536-12.386-12.386c0-6.837,5.536-12.386,12.386-12.386H57.319z"     />   </g> </svg>How to define my ad</h3>
            <div class="alert alert-info" role="alert"><svg   xmlns="http://www.w3.org/2000/svg"   width="20px"   height="40px"   viewBox="0 0 1024 1024"   className="icon"   version="1.1" >   <path     d="M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z"     fill="#2196F3"   />   <path     d="M469.333333 469.333333h85.333334v234.666667h-85.333334z"     fill="#FFFFFF"   />   <path     d="M512 352m-53.333333 0a53.333333 53.333333 0 1 0 106.666666 0 53.333333 53.333333 0 1 0-106.666666 0Z"     fill="#FFFFFF"   /> </svg>
            &nbsp;&nbsp;Choosing the right category when placing an ad can help increase visibility, relevance and effectiveness, and avoid any potential opt-outs.<br/><br/>
            It is important to include a clear and precise mailing address so that potential customers can easily find you.<br/><br/>
            Be sure to include a phone number where potential customers can reach you
            Keep your contact details up to date.           
             </div>
        
          </div>
        </div>
      </div>
    </div>
  );
}
