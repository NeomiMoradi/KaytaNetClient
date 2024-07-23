import { FormControl, InputLabel, MenuItem, Select, TableCell, TableRow } from '@mui/material';
import { useEffect, useState } from 'react';
import { getAllStatusStuAttendances } from '../../utils/GeneralController';
import dayjs from 'dayjs';

const StudentAttendanceRow = ({ student }) => {

    const [studentAttend, setStudentAttend] = useState({
        id: 0,
        studentId: student.id,
        date: {
            year: 0,
        month:0,
        day:0,
        dayOfWeek: 0
    },
        statusStuAttendanceId: 0,
        groupId: student.groupId

    })
const [statuses, setStatuses] = useState()
const [status, setStatus] = useState()
const currentDate = dayjs()
useEffect(() => {
    getAllStatusStuAttendances().then(data => setStatuses(data))
    setStudentAttend({...studentAttend,date:currentDate})
}, [])

const saveAttedance = (event) => {
   // setStatus(event.target.value)
    setStudentAttend({...studentAttend,statusStuAttendanceId:event.target.value.id})
}

return <TableRow
    key={student.id}
    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
>
    <TableCell component="th" scope="row">
        {student.firstName + student.lastName}
    </TableCell>
    <TableCell align="right">
        <FormControl>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status ?? null}
                label="סטטוס"
                onChange={saveAttedance}
            >
                <MenuItem value={null}>
                    בחר סטטוס
                </MenuItem>
                {
                    statuses?.map(s => {
                        return <MenuItem key={s.id} value={s.id}>
                            {s.description}
                        </MenuItem>
                    })
                }
            </Select>
        </FormControl>
    </TableCell>
</TableRow>

}

export default StudentAttendanceRow