import SectionStart from "@Components/SectionStart";
import Shopfilter from "@Components/Shopfilter";

const testData = {
    brands: [
        { id: 1, name: "Brand 1", productsCount: 10 },
        { id: 2, name: "Brand 2", productsCount: 15 },
        { id: 3, name: "Brand 3", productsCount: 20 }
    ],
    q_brands: "1,2",
    categories: [
        { id: 1, name: "Category 1", productsCount: 8 },
        { id: 2, name: "Category 2", productsCount: 12 },
        { id: 3, name: "Category 3", productsCount: 18 }
    ],
    q_categories: "1,3",
    order: 3,
    size: 24,
    page: 1,
    products: [
        { id: 1, name: "Product 1", regular_price: 50, image: "product1.jpg" },
        { id: 2, name: "Product 2", regular_price: 75, image: "product2.jpg" },
        { id: 3, name: "Product 3", regular_price: 100, image: "product3.jpg" }
    ],
    from: 10,
    to: 100
};
export default function ShopClothing() {
    return (
        <>
        <SectionStart title="Shop" activeBreadcrumb="Shop"/>
        <Shopfilter {...testData} />
        </>

    )
}
