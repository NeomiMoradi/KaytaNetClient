import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Camps = (props) => {

    const navigate = useNavigate()
    const loggedUser = useSelector(state => state.user.logedUser);//לקבל את המשתמש בכל הדפים

    return <div style={{ display: "flex", justifyContent: "center", margin: 40}}>
        <Button style={{ margin: 10, backgroundColor: "#F5AFBC"}} variant="contained" onClick={() => navigate("/newCamp")}>קייטנה חדשה</Button>
        {
            loggedUser
                ? <Button style={{ margin: 10, backgroundColor: "#F5AFBC"}} variant="contained" onClick={() => navigate("/campsList")}>קייטנה קיימת</Button>
                : null
        }
    </div>
}

export default Camps;