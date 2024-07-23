//קומפוננטה שמציגה רשימת קייטנות לפי הרשה טבצד כפתור כניסה לקייטנה
// להשתמשב  

import { useEffect, useState } from "react"
import { getAllCampsByUserId } from "../../utils/Camp"
import { useDispatch, useSelector } from "react-redux";
import { Button, Typography } from "@mui/material";
import { setCurrentCamp } from "../../slices/campSlice";
import { useNavigate } from "react-router-dom";

const CampsList = () => {

    const [camps, setCamps] = useState([])
    const loggedUser = useSelector(state => state.user.logedUser);//לקבל את המשתמש בכל הדפים
    const dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(() => {
        if (loggedUser) {
            getAllCampsByUserId(loggedUser.id).then(res => setCamps(res.data))
        }
    }, [loggedUser])

    const moveToCamp = (camp) => {
        dispatch(setCurrentCamp(camp))
        navigate('/ManageCamp')
    }

    return <div>
        {
            camps.length
            ? camps?.map((camp, index) =>
                <Button key={index} variant="contained"
                    onClick={() => moveToCamp(camp)}>
                    {camp.name}
                </Button>
            )
            : <div>
                <Typography>אין קייטנות קימות</Typography>
                <Button variant="contained" onClick={() => navigate("/newCamp")}>קייטנה חדשה</Button>
            </div>
        }
    </div>
}

export default CampsList