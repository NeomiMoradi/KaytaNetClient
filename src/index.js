import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userSlice from './slices/userSlice';
import campSlice from './slices/campSlice';
import studentSlice from './slices/studentSlice';
import groupSlice from './slices/groupSlice';

//@reduxjs/toolkit מהספרייה configureStore עי שימוש בפונקציה store יצירה של משתנה ה
//שיהיה כתוב בצורה יותר נקייה ומסודרת store הספריה הזאת עוזרת לנהל את ה
//שמכיל יצירה של חלק מהרדיוסר הכללי Slice יוצרים לכל נושא מסוים קובץ :reducer איך יוצרים
//userSlice אחד שנקרא Slice בפרויקט שלנו יצרנו לדוגמא רק 
//user - כינוי למשתנה שיכיל את הקובץ שיצרנו כשננסה לגשת בקומפוננטה למשתנים שבקובץ הזה
//לדוגמא שימוש של משתנה שמוגדר שם בקומפוננטה - 
//const logedUser = useSelector(state => state.user.logedUser);
const store = configureStore({
  reducer: {
    //slice כאן יהיה את כל ה
    user: userSlice,
    camp: campSlice,
    student: studentSlice,
    group : groupSlice,
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*react-redux מהספריה Provider תגית */}
    {/*App שיצרנו וכך הוא יזהה את המשתנים בכל הקומפוננטות שנמצאות בתוך ה store העברה בפרופ של המשתנה של ה */}
    <Provider store={store}>
      {/* הרכיב BrowserRouter הוא רכיב מפתח המסופק על ידי ספריית ה-React Router (react-router-dom).*/}
      {/* React הוא משמש להפעלת פונקציונליות ניתוב באפליקציית */}
      {/* BrowserRouter על ידי גלישת האפליקציה כולה ברכיב, */}
      {/*Route, Routes ו-Link נוכל להשתמש ברכיבי ניתוב אחרים כמו   */}
      {/* כדי להגדיר את תצורת הניתוב ולטפל בניווט בתוך האפליקציה שלנו. */}
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
