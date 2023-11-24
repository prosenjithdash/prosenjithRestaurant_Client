import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logInImg from'../../assets/others/logIn.png'
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Login = () => {

    const [disabled , setDisabled] = useState(true);

    const { logIn } = useContext(AuthContext);
    
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const handleLogin = event =>{

        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email,password)
            .then(result =>{
                const user = result.user;
                console.log(user)

                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Login is Succesfull",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })

    }

    const handleValidate = (e) =>{
        const user_captcha_value = e.target.value;
        console.log(user_captcha_value); 
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }


    return (
        <div>
            <Helmet prioritizeSeoTags>
                <title>P.R | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row ">
                    <div className="text-center lg:text-left">
                        <img className='rounded-3xl' src={logInImg} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
                        <h1 className="text-4xl font-bold text-center text-yellow-500">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                                <input onBlur={handleValidate} type="text"  name="captcha" placeholder="type the text above" className="input input-bordered" required />
                            

                        
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disabled} className="btn btn-primary bg-yellow-500 text-white" type="submit" value='Login' />
                        </div>
                        <p className='text-center'><small>New hare ?<Link to='/signUp'><button className="btn btn-link text-base font-bold">Create a new accout</button>
                        </Link> </small></p>
                    </form>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;