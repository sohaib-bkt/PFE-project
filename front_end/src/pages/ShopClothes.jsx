import SectionStart from "@Components/SectionStart";
import Shopfilter from "@Components/Shopfilter";


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
