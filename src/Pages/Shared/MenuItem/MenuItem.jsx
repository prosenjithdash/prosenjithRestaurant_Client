
const MenuItem = ({item}) => {
    const {name,image, price, recipe } = item;
    return (
        <div data-aos="fade-down-right" data-aos-duration="4000" className="flex space-x-6 ">
            <img style={{borderRadius: '0 200px 150px 200px'}} className="w-[100px]" src={image} alt="" />
            <div>
                <h3 className="uppercase text-green-400">{name}-------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-600">${price}</p>
        </div>
    );
};

export default MenuItem;