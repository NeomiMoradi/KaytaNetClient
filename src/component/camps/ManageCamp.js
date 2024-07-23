import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import CraftKits from '../CraftKits';
import UploadFiles from './UploadFiles';
import AddStudent from './AddStudent';
import Groups from './Groups';
import StudentAttendance from './StudentAttendance';
import AddGuide from './AddStaff';

const ManageCamp = (props) => {

    const [value, setValue] = React.useState(0);
    const [currentComponent, setCurrentComponent] = React.useState(null)

    const pages = [
        { name: 'תכנית הקייטנה', component: <CraftKits></CraftKits> },
        { name: 'מסמכים', component: <UploadFiles></UploadFiles> },
        { name: 'רישום חניכים', component: <AddStudent></AddStudent> },
        { name: 'רישום מדריכים', component: <AddGuide></AddGuide> },
        { name: 'נוכחות חניכים', component: <StudentAttendance></StudentAttendance> },
        { name: 'נוכחות מדריכים', component: <CraftKits></CraftKits> },
        { name: 'מפעילים', component:  <CraftKits></CraftKits>},
    ]

    return (
        <Box >
            <BottomNavigation
                sx={{ backgroundColor: 'transparent !important' }}
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                {pages.map((page, index) => { // ריצה על המערך של העמודים ויצירת כפתור לכל אחד!
                    return <BottomNavigationAction
                        key={index}
                        label={page.name}
                        icon={page.icon}
                        onClick={() => setCurrentComponent(page.component)}
                    />
                })}

            </BottomNavigation>
            {currentComponent}
        </Box>

    );
}

export default ManageCamp
