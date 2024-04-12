import SectionStart from "@Components/SectionStart";
import Shopfilter from "@Components/Shopfilter";
import '@Public/assets/css/style.css';
import '@Public/assets/css/demo4.css';
import '@Public/assets/css/demo2.css';
import '@Public/assets/css/custom.css';
import '@Public/assets/css/vendors/slick/slick.css';
import '@Public/assets/css/vendors/slick/slick-theme.css';
import '@Public/assets/css/vendors/animate.css';
import '@Public/assets/css/vendors/bootstrap.css';
import '@Public/assets/css/vendors/feather-icon.css';
import '@Public/assets/css/vendors/font-awesome.css';
import '@Public/assets/css/vendors/ion.rangeSlider.min.css';
import { useEffect, useState } from "react";
import axiosClient from "../api/axios";

export default function ShopClothing() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const data = axiosClient.get('/api/products')
        
            .then(response => {
                console.log(response.data);
                setProducts(response.data.products);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <>
        <SectionStart title="Shop" activeBreadcrumb="Shop"/>
        <Shopfilter/>
        </>

    )
}
