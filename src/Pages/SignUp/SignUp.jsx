import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import signUpImg from '../../assets/others/logIn.png'


const SignUp = () => {

    const { register, handleSubmit, watch, formState: { errors }, } = useForm()

    const { createUser } = useContext(AuthContext);

    const onSubmit = (data) => {
        console.log(data)

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
        })
    }

    // console.log(watch("example")) // watch input value by passing the name of it

    return (
        <div>
            <Helmet prioritizeSeoTags>
                <title>P.R | Sign Up</title>
            </Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img className='rounded-3xl' src={signUpImg} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className="text-4xl font-bold text-center text-yellow-500">Sign Up</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered"  />
                                {errors.name && <span className="text-red-600 mt-2">Name field is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered"  />
                                {errors.email && <span className="text-red-600 mt-2">Email field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 10 })} name='password' placeholder="password" className="input input-bordered" />
                                
                                {errors.password?.type === 'required' && <span className="text-red-600 mt-2">Password field is required</span>}

                                {errors.password?.type === 'minLength' && <span className="text-red-600 mt-2">Password must be 6 Characters</span>}

                                {errors.password?.type === 'maxLength' && <span className="text-red-600 mt-2">Password must be less 10 Characters</span>}
                                
                            </div>
                            <div className="form-control mt-6">
                                <input  className="btn btn-primary bg-yellow-500 text-white" type="submit" value='Sign Up' />
                            </div>
                            <p className='text-center'><small>Already registered ? <Link to='/logIn'><button className="btn btn-link text-base font-bold">Go to login</button>
                            </Link> </small></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;