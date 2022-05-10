import { useDispatch, useSelector } from "react-redux";
import { LoginGoogle } from "./../../config/redux/actions/authAction";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const handleLogin = async () => {
    const data = await dispatch(LoginGoogle());
    if (data) navigate("/home");
  };
  return (
    <div className="App">
      <img src={auth.dataLogin?.user.photoURL} alt="" />
      <h1>{auth.dataLogin?.user.displayName}</h1>
      <p>{auth.dataLogin?.user.email}</p>
      <button onClick={() => handleLogin()}>Login with Google</button>
    </div>
  );
};

export default Login;
