import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
// import axios from "axios";

const FoodCard = ({item}) => {
    const { name, image, price, recipe } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [,refetch]= useCart();
    
           
    const handleAddCart = (food) => {
       
        if (user && user.email) {
            //Send cart item to the database
            console.log(user.email, food);

            const cartItem = {
                
                email: user.email,
                name,
                image,
                price

            }

            axiosSecure.post('/carts', cartItem)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.insertedId) {
                            Swal.fire({
                                position: "top-center",
                                icon: "success",
                                title: `${name} added to your cart`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                            // refech cart to update the cart item count
                            refetch();
                        }
                })

        }
        else {
            Swal.fire({
                title: "You are not logged in.",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //send the user to the login page
                    navigate('/logIn', {state : { from: location }})
                }
            });
        }
    }

    return (
        <div >
            <div  className="card card-compact w-96 bg-base-100 shadow-xl ">
                <figure><img src={image} alt="Food" /></figure>
                <p className="absolute right-0 mr-4 mt-3 px-4 bg-slate-900 text-white rounded-lg">${price}</p>
                <div className="card-body flex flex-cols items-center ">
                    <h2 className="card-title ">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">

                        <button
                            onClick={()=>handleAddCart(item)}
                            className="btn btn-outline border-0 border-b-4 text-white text-xl bg-slate-800">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;