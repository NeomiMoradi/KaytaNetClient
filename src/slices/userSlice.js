import { createSlice } from "@reduxjs/toolkit";
// יצירה של משתנה סטייט עבור החלק הזה של הרדיוסר
const initialValue = {
    logedUser: sessionStorage.getItem('logedUser')
        ? JSON.parse(sessionStorage.getItem('logedUser')) :
        null,
}

const userSlice = createSlice({
    name: "user",//מגדיר את השם עבור החלק הזה של הרידקס
    initialState: initialValue,//הגדרת אובייקט סטייט התחלתי עבור החלק הזה
    // הגדרה של הפעולות ברדיוסר - זה בעצם הפעולות עבור החלק הזה של המשתנה סטייט
    //בתוך האובייקט הזה נכתוב את הפונקציות שאחראיות על שינוי המשתנים שמוגדרים באובייקט סטייט
    reducers: {
        setLoggedUser: (state, action) => {
            // setLoggedUser מעדכן את המשתנה לערך שנשלח לנו מהקומפוננטה איפה שהפעלנו את הפונקציה
            state.logedUser = action.payload;
            sessionStorage.setItem('logedUser', JSON.stringify(action.payload))
        }
    }
})

// ייצוא של הפונקציות - הפעולות שכתבנו שמשנים את המשתנים שבמשתנה סטייט
// וכך נוכל לייבא את זה בקומפוננטה ולהתשמש בפונקציה
export const { setLoggedUser } = userSlice.actions;
//שיצרנו store והגדרה שלו במשתנה  index.jsוייבוא שלו ב reducer ייצוא של ה
export default userSlice.reducer;