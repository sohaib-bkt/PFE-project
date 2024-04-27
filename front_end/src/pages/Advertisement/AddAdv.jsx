export default function AddAdv() {
    return (
       <>
       <section className="section-b-space">
  <div className="container">
    <div className="row g-4">
      <div className="col-lg-8">
        <form
          className="needs-validation"
          method="POST"
          action="{{route('user.StoreProduct')}}"
          encType="multipart/form-data"
        >
          @csrf
          <input
            type="hidden"
            name="user_id"
            defaultValue="{{ Auth::user()->id }}"
          />
          <div id="billingAddress" className="row g-4">
            <h3 className="mb-3 theme-color">Billing address</h3>
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter Full Name"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="slug" className="form-label">
                Slug
              </label>
              <input
                type="text"
                className="form-control"
                id="slug"
                name="slug"
                placeholder="Enter Phone Number"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="short_description" className="form-label">
                Short Description
              </label>
              <input
                type="text"
                className="form-control"
                id="short_description"
                name="short_description"
                placeholder="Short Description"
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                defaultValue={""}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="regular_price" className="form-label">
                Regular Price
              </label>
              <input
                type="number"
                className="form-control"
                id="regular_price"
                name="regular_price"
                placeholder="Regular Price"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="sale_price" className="form-label">
                Sale Price
              </label>
              <input
                type="number"
                className="form-control"
                id="sale_price"
                name="sale_price"
                placeholder="Sale Price"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="SKU" className="form-label">
                SKU
              </label>
              <input
                type="text"
                className="form-control"
                id="SKU"
                name="SKU"
                placeholder="SKU"
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="stock_status" className="form-label">
                Stock Status
              </label>
              <select
                className="form-select custome-form-select"
                id="stock_status"
                name="stock_status"
              >
                <option selected="" disabled="" value="">
                  Choose...
                </option>
                <option value="instock">In Stock</option>
                <option value="outofstock">Out of Stock</option>
              </select>
            </div>
            {"{"}
            {"{"}--{" "}
            <div className="col-md-6" style={{ display: "none" }}>
              <input
                type="number"
                className="form-control"
                id="featured"
                name="featured"
                placeholder="Featured"
                defaultValue="null"
              />
            </div>{" "}
            --{"}"}
            {"}"}
            <div className="col-md-6">
              <label htmlFor="quantity" className="form-label">
                Quantity
              </label>
              <input
                type="number"
                className="form-control"
                id="quantity"
                name="quantity"
                placeholder="Quantity"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="image" className="form-label">
                Photo
              </label>
              <input
                type="file"
                className="form-control"
                id="image"
                name="image"
                placeholder="image"
                required=""
                accept="image/png, image/jpeg"
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="category_id" className="form-label">
                Categories
              </label>
              <select
                className="form-select custome-form-select"
                id="category_id"
                name="category_id"
              >
                @foreach($categories as $categorie)
                <option value="{{ $categorie->id }}">
                  {"{"}
                  {"{"} $categorie-&gt;name {"}"}
                  {"}"}
                </option>
                @endforeach
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="brand_id" className="form-label">
                Brands
              </label>
              <select
                className="form-select custome-form-select"
                id="brand_id"
                name="brand_id"
              >
                @foreach($brands as $brand)
                <option value="{{ $brand->id }}">
                  {"{"}
                  {"{"} $brand-&gt;name {"}"}
                  {"}"}
                </option>
                @endforeach
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="categorie_product" className="form-label">
                categorie_product
              </label>
              <select
                className="form-select custome-form-select"
                id="categorie_product"
                name="categorie_product"
              >
                <option value="VET">Vetement</option>
                <option value="INF">Materiel Informatique</option>
              </select>
            </div>
            <input
              type="hidden"
              name="user_id"
              defaultValue="{{ Auth::user()->id }}"
            />
            <button className="btn btn-solid-default mt-4" type="submit">
              Ajouter Produit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

       </>
    )
}