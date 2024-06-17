import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { signInUser } = useContext(AuthContext);
  const auth = getAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter");
    } else if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter");
    } else {
      console.log(email, password);
      setError("");
    }

    signInUser(email, password)
      .then((result) => {
        console.log("Logged in user:", result.user);
        toast.success("Successfully logged in!");
      })
      .catch((error) => {
        console.error("Error logging in:", error.message);
        toast.error("Invalid credentials, please try again.");
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Google logged in user:", result.user);
        toast.success("Successfully logged in with Google!");
      })
      .catch((error) => {
        console.error("Google login error:", error.message);
        toast.error("Error logging in with Google, please try again.");
        setError(error.message);
      });
  };

  const handleGithubLogin = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("GitHub logged in user:", result.user);
        toast.success("Successfully logged in with GitHub!");
      })
      .catch((error) => {
        console.error("GitHub login error:", error.message);
        toast.error("Error logging in with GitHub, please try again.");
        setError(error.message);
      });
  };

  const handleFacebookLogin = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Facebook logged in user:", result.user);
        toast.success("Successfully logged in with Facebook!");
      })
      .catch((error) => {
        console.error("Facebook login error:", error.message);
        toast.error("Error logging in with Facebook, please try again.");
        setError(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login Here!</h1>
          <div className="flex mt-11 gap-5">
            <FaGoogle onClick={handleGoogleLogin} className="cursor-pointer" />
            <FaGithub onClick={handleGithubLogin} className="cursor-pointer" />
            <FaFacebook onClick={handleFacebookLogin} className="cursor-pointer" />
          </div>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            {error && (
              <div className="text-red-500">
                {error}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
            )}
            <div className="form-control mt-6">
              <button className="btn btn-accent" type="submit">
                Login
              </button>
            </div>
            <p>
              New Here? Please, <Link to='/register' className="text-green-500">Register</Link>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;