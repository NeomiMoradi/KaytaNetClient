import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedUser } from "../slices/userSlice";

const Entrance = (props) => {

    const navigate = useNavigate();
    const logedUser = useSelector(state => state.user.logedUser);//לקבל את המשתמש בכל הדפים
    const dispatch = useDispatch()

    const onUnLogged = () => {
        navigate("/")
        dispatch(setLoggedUser(null))
    }

    return logedUser
        ? <>
         <Button variant="contained"
                onClick={onUnLogged}
            >התנתק</Button></>
        : <div>
            <Button variant="contained"
                onClick={() => navigate("/Login")}
            >התחבר</Button>
            <Button variant="contained"
                onClick={() => navigate("/SignIn")}
            >הרשם</Button>


        </div>
}

export default Entrance;