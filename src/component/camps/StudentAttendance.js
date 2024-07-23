import { Container, FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { getAllStudentsByCampId } from "../../utils/Student";
import { setStudents } from "../../slices/studentSlice";
import { getGroupsByCampId } from "../../utils/Group";
import { setGroups } from "../../slices/groupSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Groups from "./Groups";
import StudentAttendanceTable from "./StudentAttendanceTable";

const StudentAttendance = (props) => {

    const students = useSelector(state => state.student.students);
    const currentCamp = useSelector(state => state.camp.currentCamp);
    const groups = useSelector(state => state.group.groups);
    const [selectedGroup, setSelectedGroup] = useState(null)
    const dispatch = useDispatch();

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

    return <Container>
        <Groups></Groups>

        <FormControl>
            <InputLabel id="demo-simple-select-label">בחר קבוצה</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedGroup ?? null}
                label="Age"
                onChange={(event) => setSelectedGroup(event.target.value)}
            >
                <MenuItem value={null}>
                    בחר קבוצה
                </MenuItem>
                {
                    groups[currentCamp.id] && groups[currentCamp.id].map(g => {
                        return <MenuItem key={g.id} value={g.id}>
                            {g.id}
                        </MenuItem>
                    })
                }
            </Select>
        </FormControl>

        {
            selectedGroup
                ? <StudentAttendanceTable selectedGroup={selectedGroup}></StudentAttendanceTable>
                : null
        }
    </Container>

}

export default StudentAttendance