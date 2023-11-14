import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Menuitem from "../../../components/MenuItem/Menuitem";
import useMenu from "../../../hooks/useMenu/useMenu";

const PopularMenu = () => {
    const [menu]=useMenu();
    const popularMenu = menu.filter(item => item.category === 'popular');
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularMenu = data.filter(item => item.category === 'popular');
    //             setMenu(popularMenu)
    //         })
    // }, [])
    return (
        <div className="mb-10">
            <SectionTitle subHeading={'Check it out'} heading={'Popular Menu'}></SectionTitle>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {
                    popularMenu.map(item => <Menuitem key={item._id} menu={item}></Menuitem>)
                }
            </div>
            <div className="flex justify-center items-center my-4">
                <button className="btn btn-outline border-b-4 border-0 mt-4">view full menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;