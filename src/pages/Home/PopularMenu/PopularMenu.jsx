import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Menuitem from "../../../components/MenuItem/Menuitem";

const PopularMenu = () => {
    const [menu,setMenu]=useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularMenu = data.filter(item => item.category === 'popular');
            setMenu(popularMenu)
        })
    },[])
    return (
        <div className="mb-10">
            <SectionTitle subHeading={'Check it out'} heading={'Popular Menu'}></SectionTitle>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {
                    menu.map(item => <Menuitem key={item._id} menu={item}></Menuitem>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;