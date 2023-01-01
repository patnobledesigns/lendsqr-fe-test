import { useSelector } from "react-redux";
import { getLoginState } from "../redux/features/authentication/loginSlice";


const useAuth = () => {
    const { token } = useSelector(getLoginState)
    return token;
};

export default useAuth;
