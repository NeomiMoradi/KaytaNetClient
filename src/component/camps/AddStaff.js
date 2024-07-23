import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { getAllUsers } from "../../utils/user";
import Swal from "sweetalert2";
import { getCurrentDate } from "../../helpers";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedUser } from "../../slices/userSlice";
import { addStaff } from "../../utils/Staff";

//אם לא שלחו navigateTo הולך לדף
const AddStaff = () => {

    const [StaffDetails, setStaffDetails] = useState({ enrollmentDate: getCurrentDate() })//בתוך הסוגריים מכניסים ערך התחלתי
    const navigate = useNavigate() //משתנה מהספריה של ראוט 
    const dispatch = useDispatch()

    const currentCamp = useSelector(state => state.camp.currentCamp)

    const handleChangeStaff = (key, event) => {   //עושה סט לאובייקט של פרטי המשתמש ומוסיף לשדה והווליו החדש או דורס
        setStaffDetails({ ...StaffDetails, [key]: event.target.value }) //משתנה ראשוני שמפעיל מה שהמשתמש הקליד     }
    }

    const saveStaff = () => {    //פונקציה שמופעלת שלוחצים על הכפתור הירשם
        addStaff(StaffDetails.email, currentCamp.id )     //קריאה לפונקציה ביוטיל
            .then(res => {
                if (res.status === 200) {
                    Swal.fire(`הוספת מדריך בהצלחה`, '', "success")//פונקציה שמקבלת 3 דברים: בותרת, טקסט,
                    setStaffDetails({})
                }
            }).catch(error => Swal.fire('error!', '', "error")
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
            <TextField
                onChange={(event) => handleChangeStaff('email', event)} //
                required
                type='mail'
                id="email"
                label="מייל"
                value={StaffDetails.email ?? ''}
            />
            
            <Button variant="contained" onClick={saveStaff}>הוסף מדריך</Button>
        </Box>
    );

}
export default AddStaff