import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import Menuitem from "../../../components/MenuItem/Menuitem";

const MenuCategory = ({ item, btnText, img, title, description }) => {
    return (
        <div className="my-14">
            {title && <Cover img={img} title={title} description={description}></Cover>}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
                {
                    item.map(item => <Menuitem key={item._id} menu={item}></Menuitem>)
                }
            </div>
            <div className="flex justify-center items-center my-4">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline border-b-4 border-0 mt-4">{btnText}</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;