import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import img from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzatImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from "../../../hooks/useMenu/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menu]=useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={img} title={'Our Menu'} description={'Would you like to try a dish?'}></Cover>
            <SectionTitle subHeading={'Do not miss'} heading={"Today's offer"}></SectionTitle>
            <MenuCategory item={offered} btnText={'ORDER YOUR FAVOURITE FOOD'}></MenuCategory>   
            <MenuCategory
             item={desserts}
             img={dessertImg} 
             btnText={'ORDER YOUR FAVOURITE DESSERTS'} 
             title={'DESSERTS'} 
             description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCategory> 

            <MenuCategory
             item={pizza}
             img={pizzatImg} 
             btnText={'ORDER YOUR FAVOURITE PIZZA'} 
             title={'PIZZA'} 
             description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCategory>   

            <MenuCategory
             item={salad}
             img={saladImg} 
             btnText={'ORDER YOUR FAVOURITE SALAD'} 
             title={'SALAD'} 
             description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCategory>   

            <MenuCategory
             item={soup}
             img={soupImg} 
             btnText={'ORDER YOUR FAVOURITE SOUP'} 
             title={'SOUP'} 
             description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCategory>   
        </div>
    );
};

export default Menu;