import { useContext, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoEyeSharp } from "react-icons/io5";
import { Link, Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  // useState
  const [signToggle, setSignToggle] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  // AuthContext
  const {
    registerWithEmail,
    updateUserProfile,
    setRefetch,
    loginInWithGoogle,
    user,
  } = useContext(AuthContext);

  // navigate
  const navigate = useNavigate();

  // password validation
  const minLength = /.{6,}/;
  const hasUpperCase = /[A-Z]/;
  const hasLowerCase = /[a-z]/;

  // if User exists, navigate to Home
  if (user) {
    return <Navigate to="/"></Navigate>;
  }

  // handle Register
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photoURL.value;
    const password = e.target.password.value;
    setPasswordError("");

    // 6 characters password validation
    const validatePassword = (password) => {
      if (!minLength.test(password)) {
        return "Password should be at least 6 characters long";
      }

      // UpperCase password validation
      if (!hasUpperCase.test(password)) {
        return "Uppercase letter include must to the password";
      }

      // LowerCase password validation
      if (!hasLowerCase.test(password)) {
        return "Lowercase letter include must to the password";
      }
      return "";
    };

    const errorMessage = validatePassword(password);

    if (errorMessage) {
      setPasswordError(errorMessage);
      return;
    }

    registerWithEmail(email, password)
      .then(() => {
        e.target.reset();
        toast.success("Register Successfully");
        navigate("/");
        updateUserProfile({ displayName: name, photoURL: photo }).then(() => {
          setRefetch(Date.now());
        });
      })
      .catch(() => {
        toast.error("Email already in use");
      });
  };

  const handleToggleSignBtn = () => {
    setSignToggle(!signToggle);
  };

  return (
    <div>
      <h1>Register</h1>
    </div>
  );
};

Register.propTypes = {};

export default Register;
