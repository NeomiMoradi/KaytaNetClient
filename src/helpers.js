export const getCurrentDate = () =>{
   return new Date().toISOString().slice(0, 10);
}