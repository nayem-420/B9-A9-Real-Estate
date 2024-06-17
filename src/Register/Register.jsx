import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { auth } from "../firebase/firebase.config";

const Register = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [registerError, setRegisterError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
    } else if (!/[A-Z]/.test(password)) {
      alert("Password must contain at least one uppercase letter");
    } else if (!/[a-z]/.test(password)) {
      alert("Password must contain at least one lowercase letter");
    } else {
      console.log(name, email, photo, password);
      setError("");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        alert("user created successfully");

        updateProfile(user, { displayName: name, photoURL: photo }).then(() => {
          alert("Profile updated successfully");
        });

        console.log(user);
        sendEmailVerification(user)
          .then(() => {
            alert("Please check your email for verification");
          })
          .catch((verificationError) => {
            console.error(verificationError.message);
            setRegisterError(verificationError.message);
          });
      })
      .catch((error) => {
        console.error(error.message);
        setRegisterError(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Here!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            {error && <div className="text-red-500">{error}</div>}
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Register
              </button>
            </div>
          </form>
          {registerError && <p className="text-red-500">{registerError}</p>}
        </div>
      </div>
    </div>
  );
};

export default Register;
