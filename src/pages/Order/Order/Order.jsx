import { useState } from "react";
import Cover from "../../../Shared/Cover/Cover";
import orderImg from '../../../assets/shop/banner2.jpg';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu/useMenu";
import OrderCart from "../../../components/OrderCart/OrderCart";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categories = ['salad','pizza','soup','dessert','drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover img={orderImg} title={'our shop'} description={'Would You Line To Try A Dish'}></Cover>

            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel>
                    <div className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            salad.map(item => <OrderCart key={item._id} item={item}></OrderCart>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            pizza.map(item => <OrderCart key={item._id} item={item}></OrderCart>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            soup.map(item => <OrderCart key={item._id} item={item}></OrderCart>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            desserts.map(item => <OrderCart key={item._id} item={item}></OrderCart>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            drinks.map(item => <OrderCart key={item._id} item={item}></OrderCart>)
                        }
                    </div>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Order;