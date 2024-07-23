import { createSlice } from "@reduxjs/toolkit";
// יצירה של משתנה סטייט עבור החלק הזה של הרדיוסר
const initialValue = {
    groups: {}
}

const groupsSlice = createSlice({
    name: "group",//מגדיר את השם עבור החלק הזה של הרידקס
    initialState: initialValue,//הגדרת אובייקט סטייט התחלתי עבור החלק הזה
    // הגדרה של הפעולות ברדיוסר - זה בעצם הפעולות עבור החלק הזה של המשתנה סטייט
    //בתוך האובייקט הזה נכתוב את הפונקציות שאחראיות על שינוי המשתנים שמוגדרים באובייקט סטייט
    reducers: {
        setGroups: (state, action) => {
            state.groups = action.payload;
        }
    }
})

// ייצוא של הפונקציות - הפעולות שכתבנו שמשנים את המשתנים שבמשתנה סטייט
// וכך נוכל לייבא את זה בקומפוננטה ולהתשמש בפונקציה
export const { setGroups } = groupsSlice.actions;
//שיצרנו store והגדרה שלו במשתנה  index.jsוייבוא שלו ב reducer ייצוא של ה
export default groupsSlice.reducer;