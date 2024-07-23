import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import StudentAttendanceRow from './StudentAttendanceRow';
import dayjs from 'dayjs';
import { Typography } from '@mui/material';

export default function StudentAttendanceTable({ selectedGroup }) {


    const students = useSelector(state => state.student.students);
    const currentCamp = useSelector(state => state.camp.currentCamp);
    const currentDate = dayjs()
    React.useEffect(() => {
        console.log(students[currentCamp.id].filter(s => s.groupId === selectedGroup))
    }, [])
    return (
        <TableContainer component={Paper}>
            <Typography>{currentDate.format("YYYY/MM/DD")}</Typography>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>שם</TableCell>
                        <TableCell align="right">סטטוס</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {students[currentCamp.id]
                        ?.filter(s => s.groupId === selectedGroup)
                        ?.map((student) => (
                            <StudentAttendanceRow student={student}></StudentAttendanceRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
