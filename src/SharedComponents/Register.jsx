import { Link, useNavigate } from "react-router-dom";
import { useContext, useState,  } from "react";
import Swal from "sweetalert2";
import Navbar from "../Components/Navbar/Navbar";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
    const {createUser, googleLogin} = useContext(AuthContext);
    const [pError, setError] = useState('')
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        setError('');
        if(!/[A-Z]/.test(password)){
            setError('Your Password Should have at least one Uppercase characters')
            return
        }else if(!/[#$?@&!*^-]/.test(password)){
          setError('Your Password Should have at least one special characters')
          return
        }
        createUser(email, password)
        .then(res => {
          const user = {email};
            fetch('https://brand-shop-server-75fl384hx-masuds-projects-c3df1a1c.vercel.app/myCart',{
              method: "POST",
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
              
              console.log(data)
            })
          navigate('/')
          Swal("Good job!", "You Register SuccessFully!", "success")
            console.log(res.user)
            
        })
        .catch(error => {
          setError(error.message)
          Swal("error!", "Try Again Please!", "error")
        })
    }
    const handleWithGool = () => {
        googleLogin()
        .then(res => console.log(res.user))
        .catch(error => {setError(error.message)})
    }
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-green-400">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your First Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-info text-white">Register</button>
                </div>
              </form>

              <a href="">
                You Are Now?{" "}
                <Link to="/login" className="text-green-600 font-bold">
                  Login
                </Link>
              </a>
              <button onClick={handleWithGool} className="btn btn-outline btn-success">Google</button>
              
              {
                pError && <p className="text-red-700 font-bold">{pError}</p>
              } 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
