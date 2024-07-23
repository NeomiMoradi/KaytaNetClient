import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { addUser } from "../../utils/user";
import Swal from "sweetalert2";
import { getCurrentDate } from "../../helpers";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedUser } from "../../slices/userSlice";
import { addCamp } from "../../utils/Camp";
import { setCurrentCamp } from "../../slices/campSlice";

//אם לא שלחו navigateTo הולך לדף
const NewCamp = (props) => {

    const [campDetail, setcampDetail] = useState({ date: getCurrentDate() })//בתוך הסוגריים מכניסים ערך התחלתי
    const navigate = useNavigate() //משתנה מהספריה של ראוט 
    const dispatch = useDispatch()
    const logedUser = useSelector(state => state.user.logedUser);//לקבל את המשתמש בכל הדפים

    const handleChangeCamp = (key, event) => {   //עושה סט לאובייקט של פרטי המשתמש ומוסיף לשדה והווליו החדש או דורס
        setcampDetail({ ...campDetail, [key]: event.target.value }) //משתנה ראשוני שמפעיל מה שהמשתמש הקליד     }
    }

    const saveCamp = () => {
        if (!logedUser) {
            Swal.fire({
                title: "Do you want to save the changes?",
                showConfirmButton: true,
                showCancelButton: true,
                confirmButtonText: "הרשם עכשיו",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/SignIn')
                }
            });
            return;
        }
        //פונקציה שמופעלת שלוחצים על הכפתור הירשם
        const data = {
            "statusId": 1,
            "userId": logedUser.id,
            ...campDetail
        }
        addCamp(data)     // ששומרת קיטנה !! קריאה לפונקציה ביוטיל
            .then(res => {
                if (res.status === 200) {
                    dispatch(setCurrentCamp(res.data))
                    Swal.fire(`${campDetail.name}, נרשמת בהצלחה`, '', "success")//פונקציה שמקבלת 3 דברים: בותרת, טקסט,
                    navigate('/ManageCamp')
                }
            }).catch(error => Swal.fire('המייל קיים במערכת', '', "error")
            )
    }
    // לשנות את הפרטים

    return (
        <Box style={{ display: "flex", justifyContent: "center", margin: 20, flexDirection: "column", direction: "rtl" }}
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <Typography style={{ fontSize: 30 }}>רישום תלמידים</Typography>
            <div style={{ marginRight: 100, marginLeft: 100 }}>
                <TextField
                    value={campDetail.name}
                    required
                    id="name"
                    label="Name"
                    onChange={(event) => handleChangeCamp('name', event)} //
                />
                <TextField
                    value={campDetail.tochnit}
                    required
                    id="tochnit"
                    label="tochnit"
                    onChange={(event) => handleChangeCamp('tochnit', event)} //
                />
                <TextField
                    value={campDetail.address}
                    required
                    onChange={(event) => handleChangeCamp('address', event)} //
                    label="address"
                    type="text"
                />
                <TextField
                    value={campDetail.numSudents}
                    onChange={(event) => handleChangeCamp('numSudents', event)} //
                    required
                    id="numSudents"
                    label="numSudents"
                    type="number"
                />
                <TextField
                    required
                    type="date"
                    id="dateStart"
                    // label="dateStart"
                    onChange={(event) => handleChangeCamp('dateStart', event)}
                    value={campDetail.dateStart}
                />
                <TextField
                    required
                    type="date"
                    id="dateEnd"
                    // label="dateEnd"
                    onChange={(event) => handleChangeCamp('dateEnd', event)}
                    value={campDetail.dateEnd}
                />

            </div>
            <Button style={{ marginRight: 110, marginLeft: 100, backgroundColor: "#F5AFBC", width: 100}} variant="contained" onClick={saveCamp}>הרשם</Button>

        </Box>
    );
}

export default NewCamp