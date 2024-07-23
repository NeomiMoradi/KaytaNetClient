import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { login } from "../../utils/user";
import Swal from "sweetalert2";
import { setLoggedUser } from "../../slices/userSlice";
import { useDispatch } from "react-redux";
//אם לא שלחו navigateTo הולך לדף
const Login = ({ navigateTo = '/' }) => {

    const [userDetails, setUserDetails] = useState({})//בתוך הסוגריים מכניסים ערך התחלתי
    const navigate = useNavigate() //משתנה מהספריה של ראוט 
    const dispatch = useDispatch()

    const handleChangeUser = (key, event) => {   //עושה סט לאובייקט של פרטי המשתמש ומוסיף לשדה והווליו החדש או דורס
        setUserDetails({ ...userDetails, [key]: event.target.value }) //משתנה ראשוני שמפעיל מה שהמשתמש הקליד     }
    }

    const loginUser = () => {    //פונקציה שמופעלת שלוחצים על הכפתור הירשם
        login(userDetails)     //קריאה לפונקציה ביוטיל
            .then(res => {
                if (res.status === 200) {
                    dispatch(setLoggedUser(res.data))//קריאה לפונקציה שבסליס
                    Swal.fire(`${res.data.firstName}, 'ברוך שובך`, '', "success")//פונקציה שמקבלת 3 דברים: בותרת, טקסט,
                    navigate(navigateTo)
                }

            }).catch(error => Swal.fire('משתמש לא קיים', '', "error")
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
                    onChange={(event) => handleChangeUser('email', event)} //
                />
                <TextField
                    required
                    onChange={(event) => handleChangeUser('password', event)} //
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
                
            </div>
            <Button variant="contained" onClick={loginUser}>היכנס</Button>
        </Box>
    );
}

export default Login
