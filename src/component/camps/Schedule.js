import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
const Schedule = ({ campId }) => {

    const [from, setFrom] = useState();
    const [to, setTo] = useState();
    const currentDate = dayjs();


    return (

        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}  >
                <Typography>מ</Typography>
                <DatePicker minDate={currentDate} onChange={(value) => setFrom(value.format("YYYY-MM-DD"))}
                />
                <Typography>עד</Typography>
                <DatePicker onChange={(value) => setTo(value.format("YYYY-MM-DD"))}
                    timeSteps={{ minutes: 30 }} />
            </LocalizationProvider>
        </Box>
    );
};

export default Schedule;
