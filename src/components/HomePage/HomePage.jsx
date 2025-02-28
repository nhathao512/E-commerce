import MyHeader from '@components/Header/Header';
import Banner from '@components/Banner/Banner';
import styles from './styles.module.scss';
import Info from '@components/Info/Info';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import HeadingListProduct from '@components/HeadingListproduct/HeadingListProduct';
import { getProducts } from '@/apis/productService';
import { useEffect } from 'react';
import PopularProduct from '@components/PopularProduct/PopularProduct';
import { useState } from 'react';
import SaleHomePage from '@components/SaleHomePage/SaleHomePage';
import MyFooter from '@components/Footer/Footer';

function Homepage() {

    const [listProducts, setListProducts] = useState([]);
    useEffect(() => {
        getProducts().then(res => {
            setListProducts(res.contents);
        });

    }, []);
    // console.log(listProducts, 'listProducts');
    return (
        <div>
            <div>
                <MyHeader />
                <Banner />
                <Info />
                <AdvanceHeadling />
                <HeadingListProduct data={listProducts.slice(0, 2)} />
                <PopularProduct data={listProducts.slice(2, 10)} />
                <SaleHomePage />
                <MyFooter />
            </div>
        </div>
    );
}

export default Homepage;