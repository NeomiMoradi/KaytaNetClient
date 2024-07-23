import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { addUser } from "../../utils/user";
import Swal from "sweetalert2";
import { getCurrentDate } from "../../helpers";
import { useDispatch } from "react-redux";
import { setLoggedUser } from "../../slices/userSlice";

//אם לא שלחו navigateTo הולך לדף
const SignIn = ({ navigateTo = '/' }) => {

    const [userDetails, setUserDetails] = useState({ enrollmentDate: getCurrentDate() })//בתוך הסוגריים מכניסים ערך התחלתי
    const navigate = useNavigate() //משתנה מהספריה של ראוט 
    const dispatch = useDispatch()
    const handleChangeUser = (key, event) => {   //עושה סט לאובייקט של פרטי המשתמש ומוסיף לשדה והווליו החדש או דורס
        setUserDetails({ ...userDetails, [key]: event.target.value }) //משתנה ראשוני שמפעיל מה שהמשתמש הקליד     }
    }

    const saveUser = () => {    //פונקציה שמופעלת שלוחצים על הכפתור הירשם
        addUser(userDetails)     //קריאה לפונקציה ביוטיל
            .then(res => {
                if (res.status === 200) {
                    dispatch(setLoggedUser(res.data))
                    Swal.fire(`${userDetails.firstName}, נרשמת בהצלחה`, '', "success")//פונקציה שמקבלת 3 דברים: בותרת, טקסט,
                    navigate(navigateTo)
                }
                else if(res.status == 204){
                    Swal.fire('המייל קיים במערכת', '', "error")
                }
            }).catch(error => Swal.fire('ארעה שגיאה בהתחברות נסה שוב מאוחר יותר', '', "error")
            )
    }

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    required
                    id="mail"
                    label="Mail"
                    onChange={(event) => handleChangeUser('mail', event)} //
                />
                <TextField
                    required
                    onChange={(event) => handleChangeUser('password', event)} //
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
                <TextField
                    onChange={(event) => handleChangeUser('firstName', event)} //
                    required
                    id="firstName"
                    label="First Name"
                />

                <TextField
                    required
                    id="lastName"
                    label="Last Name"
                    onChange={(event) => handleChangeUser('lastName', event)} //
                />
                <TextField
                    required
                    id="phone"
                    label="Mobile Number"
                    onChange={(event) => handleChangeUser('phone', event)} //
                />
                <TextField
                    required
                    id="address"
                    label="Address"
                    onChange={(event) => handleChangeUser('address', event)} //
                />
                {/* <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        /> */}
            </div>
            <Button variant="contained" onClick={saveUser}>הרשם</Button>
        </Box>
    );
}

export default SignIn
