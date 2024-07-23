import { createSlice } from "@reduxjs/toolkit";
// יצירה של משתנה סטייט עבור החלק הזה של הרדיוסר
const initialValue = {
    currentCamp: sessionStorage.getItem('currentCamp')
        ? JSON.parse(sessionStorage.getItem('currentCamp')) :
        null,
}

const campSlice = createSlice({
    name: "camp",//מגדיר את השם עבור החלק הזה של הרידקס
    initialState: initialValue,//הגדרת אובייקט סטייט התחלתי עבור החלק הזה
    // הגדרה של הפעולות ברדיוסר - זה בעצם הפעולות עבור החלק הזה של המשתנה סטייט
    //בתוך האובייקט הזה נכתוב את הפונקציות שאחראיות על שינוי המשתנים שמוגדרים באובייקט סטייט
    reducers: {
        setCurrentCamp: (state, action) => {
            // setLoggedUser מעדכן את המשתנה לערך שנשלח לנו מהקומפוננטה איפה שהפעלנו את הפונקציה
            state.currentCamp = action.payload;
            sessionStorage.setItem('currentCamp', JSON.stringify(action.payload))
        }
    }
})

// ייצוא של הפונקציות - הפעולות שכתבנו שמשנים את המשתנים שבמשתנה סטייט
// וכך נוכל לייבא את זה בקומפוננטה ולהתשמש בפונקציה
export const { setCurrentCamp } = campSlice.actions;
//שיצרנו store והגדרה שלו במשתנה  index.jsוייבוא שלו ב reducer ייצוא של ה
export default campSlice.reducer;