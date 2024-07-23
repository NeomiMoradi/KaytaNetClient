import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { addUser } from "../../utils/user";
import Swal from "sweetalert2";
import { getCurrentDate } from "../../helpers";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedUser } from "../../slices/userSlice";
import { getAllAges } from "../../utils/GeneralController";
import { addStudent } from "../../utils/Student";

//אם לא שלחו navigateTo הולך לדף
const AddStudent = () => {
    const [studentDetails, setStudentDetails] = useState({
        id: 0,
        firstName: "",
        ageId: 0,
        phone: 0,
        email: "",
        address: "",
        groupId: null,
        campId: 0,
        lastName: "",
        userId: 0
    })//משתנה של אובייקט - הגדרה{}
    const navigate = useNavigate() //  בין דפים משתנה מהספריה של ראוט 
    const dispatch = useDispatch() //redacx שם שומרים מידע של משתמש 
    const [ages, setAges] = useState([{}]) //][משתנה של מערך גילאים
    const currentCamp = useSelector(state => state.camp.currentCamp)//קשור גם לרידקס מייבאת מה שיש בו
    const handleChangeStudent = (key, event) => { //עושה סט לאובייקט של פרטי המשתמש ומוסיף לשדה והווליו החדש או דורס
        setStudentDetails({ ...studentDetails, [key]: event.target.value }) //משתנה ראשוני שמפעיל מה שהמשתמש הקליד 
    }

    useEffect(() => {
        console.log("hhh")                         //פונקציה שמורה
        getAllAges().then(res => { setAges(res.data); }).catch(err => console.log(err))
    }, [])

    const saveStudent = () => {    //פונקציה שמופעלת שלוחצים על הכפתור הירשם
        addStudent({ ...studentDetails, campId: currentCamp.id })     //קריאה לפונקציה ביוטיל
            .then(res => {
                console.log(res.request.status);
                if (res.request.status === 200 || res.request.status === 201) {
                    Swal.fire(`${studentDetails.firstName}, נרשמת בהצלחה`, '', "success")//פונקציה שמקבלת 3 דברים: בותרת, טקסט,
                    setStudentDetails({})
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
            <div>

                <TextField
                    onChange={(event) => handleChangeStudent('firstName', event)} //
                    required
                    id="firstName"
                    label="First Name"
                    value={studentDetails.firstName ?? ''}
                />

                <TextField
                    required
                    id="lastName"
                    label="Last Name"
                    onChange={(event) => handleChangeStudent('lastName', event)} //
                    value={studentDetails.lastName ?? ''}
                />
                <TextField
                    required
                    id="phone"
                    label="Mobile Number"
                    onChange={(event) => handleChangeStudent('phone', event)} //
                    value={studentDetails.phone ?? ''}
                />
                <TextField
                    id="address"
                    label="Address"
                    onChange={(event) => handleChangeStudent('address', event)} //
                    value={studentDetails.address ?? ''}
                />
                <TextField
                    required
                    id="mail"
                    label="Mail"
                    onChange={(event) => handleChangeStudent('email', event)} //
                    value={studentDetails.email ?? ''}
                />

                <FormControl>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={studentDetails.ageId ?? null}
                        label="Age"
                        onChange={(event) => handleChangeStudent('ageId', event)}
                    >
                        <MenuItem value={null}>
                            בחר גיל
                        </MenuItem>
                        {
                            ages && ages.map(age => {
                                return <MenuItem key={age.id} value={age.id}>
                                    {age.description}
                                </MenuItem>
                            })
                        }
                    </Select>
                </FormControl>
            </div>
            <Button variant="contained" onClick={saveStudent}>הוסף תלמיד</Button>
        </Box>
    );
}

export default AddStudent
