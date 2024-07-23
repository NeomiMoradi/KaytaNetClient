import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStudentsByCampId } from "../../utils/Student";
import { setStudents } from "../../slices/studentSlice";
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button, TextField, Grid, Box, Typography, Alert, Container, Dialog } from "@mui/material";
import { createGroups, getGroupsByCampId } from "../../utils/Group";
import Swal from "sweetalert2";
import { setGroups } from "../../slices/groupSlice";

const Groups = () => {
    const students = useSelector(state => state.student.students);
    const currentCamp = useSelector(state => state.camp.currentCamp);
    const groups = useSelector(state => state.group.groups);
    const[openD,setOpenD] =  React.useState(false);
    const dispatch = useDispatch();
    const [divideBy, setDivideBy] = React.useState({ parameter: 'students', amount: 0 });
    const [error, setError] = React.useState(false);

    useEffect(() => {
        if (currentCamp) {
            if (!students[currentCamp.id]?.length) {
                getAllStudentsByCampId(currentCamp.id).then(res =>
                    dispatch(setStudents({ ...students, [currentCamp.id]: res.data }))
                );
            }
            if (!groups[currentCamp.id]?.length) {
                getGroupsByCampId(currentCamp.id).then(res =>
                    dispatch(setGroups({ ...groups, [currentCamp.id]: res.data }))
                );
            }
        }
    }, [currentCamp]);

    const onCreateGroups = () => {
        if (divideBy.amount <= 0) {
            setError('יש להזין ערך גדול מאפס');
            return
        }
        if (divideBy.amount > students[currentCamp.id]?.length && divideBy.parameter === 'groups') {
            setError('יש להזין ערך  קטן ממספר התלמידים');
            return
        }
        createGroups(divideBy.parameter, divideBy.amount, currentCamp.id).then(res => {
            Swal.fire('קבוצות נוספו בהצלחה', '', 'success');
            dispatch(setGroups({ ...groups, [currentCamp.id]: res.data }));
        });
    };

    const handleStudentClick = (student) => {
        // Handle click on student
    };

    return (
        <Container maxWidth="md">
            {students[currentCamp.id]?.length
                ? <div>
                    <Dialog open ={openD} onClose={()=>setOpenD(false)}><Box mt={3} textAlign="center">
                        <Typography>
                            מספר התלמידים בקייטנה : {students[currentCamp.id]?.length}
                        </Typography>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">בחר פרמטרים ליצירת קבוצות</FormLabel>
                            <RadioGroup
                                aria-label="parameter"
                                name="parameter"
                                value={divideBy.parameter}
                                onChange={(e) => setDivideBy({ ...divideBy, parameter: e.target.value })}
                            >
                                <FormControlLabel value="students" control={<Radio />} label="מקסימום תלמידים בקבוצה" />
                                <FormControlLabel value="groups" control={<Radio />} label="מספר קבוצות מקסימלי" />
                            </RadioGroup>
                            <TextField
                                required
                                fullWidth
                                id="amount"
                                label={divideBy.parameter === 'students' ? 'מספר תלמידים בקבוצה' : 'מספר קבוצות'}
                                value={divideBy.amount}
                                type='number'
                                onChange={(e) => setDivideBy({ ...divideBy, amount: e.target.value })}
                                error={error}
                                helperText={error}
                            />
                            <Box mt={2}>
                                <Button variant="contained" onClick={()=>{onCreateGroups();setOpenD(false)}}>צור קבוצות {groups[currentCamp.id]?.length ? 'מחדש' :''}</Button>
                            </Box>
                        </FormControl>
                    </Box></Dialog>
                    
                    <Box mt={2}>
                                <Button variant="contained" onClick={()=>setOpenD(true)}>צור קבוצות {groups[currentCamp.id]?.length ? 'מחדש' :''}</Button>
                    </Box>
                    {/* <Box mt={5} textAlign="center">
                        {groups[currentCamp.id]?.length > 0 ? (
                            groups[currentCamp.id]?.map((group, index) => (
                                <Box key={group.id} mt={3}>
                                    <Typography variant="h6">{index + 1} קבוצה   </Typography>
                                    <Box mt={1}>
                                        {group.students?.map(student => (
                                            <Button key={student.id} onClick={() => handleStudentClick(student)}>
                                                {student.firstName} {student.lastName}
                                            </Button>
                                        ))}
                                    </Box>
                                </Box>
                            ))
                        ) : (
                            <Alert severity="info">יש ליצור קבוצות כדי להציג תוצאות</Alert>
                        )}
                    </Box> */}
                </div>
                :  <Alert severity="info">אין תלמידים רשומים לקייטנה</Alert>
            }
        </Container>
    );
};

export default Groups;
