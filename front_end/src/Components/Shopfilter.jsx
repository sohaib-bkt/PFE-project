export default function Shopfilter() {
    return (
        <>
        <div className="category-product col-lg-9 col-12 ratio_30">
    <div className="row g-4">
        {/* label and featured section */}
        <div className="col-md-12">
            <ul className="short-name">
            </ul>
        </div>
        <div className="col-12">
            <div className="filter-options">
                <div className="select-options">
                    <div className="page-view-filter">
                        <div className="dropdown select-featured">
                            <select className="form-select" name="orderby" id="orderby">
                                <option value="-1" selected={order === -1}>Default</option>
                                <option value="1" selected={order === 1}>Date, New To Old</option>
                                <option value="2" selected={order === 2}>Date, Old To New</option>
                                <option value="3" selected={order === 3}>Price, Low To High</option>
                                <option value="4" selected={order === 4}>Price, High To Low</option>
                            </select>
                        </div>
                    </div>
                    <div className="dropdown select-featured">
                        <select className="form-select" name="size" id="pagesize">
                            <option value="12">12 Products Per Page</option>
                            <option value="24">24 Products Per Page</option>
                            <option value="52">52 Products Per Page</option>
                            <option value="100">100 Products Per Page</option>
                        </select>
                    </div>
                </div>
                <div className="grid-options d-sm-inline-block d-none">
                    <ul className="d-flex">
                        <li className="two-grid">
                            <a href="#">
                                <img src="assets/svg/grid-2.svg" className="img-fluid blur-up lazyload" alt="" />
                            </a>
                        </li>
                        <li className="three-grid d-md-inline-block d-none">
                            <a href="#">
                                <img src="assets/svg/grid-3.svg" className="img-fluid blur-up lazyload" alt="" />
                            </a>
                        </li>
                        <li className="grid-btn active d-lg-inline-block d-none">
                            <a href="#">
                                <img src="assets/svg/grid.svg" className="img-fluid blur-up lazyload" alt="" />
                            </a>
                        </li>
                        <li className="list-btn">
                            <a href="#">
                                <img src="assets/svg/list.svg" className="img-fluid blur-up lazyload" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

        </>
        )
}