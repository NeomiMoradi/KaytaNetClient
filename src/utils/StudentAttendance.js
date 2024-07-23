export const addStudentAttendance = async(data) => {
    return await api.post(`StudentAttendance/AddStudentAttendance`, data).then(res => res);
}
