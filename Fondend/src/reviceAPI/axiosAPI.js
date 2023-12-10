import axios from "./Creatsaxios";
const login = (values) => {
    return axios.post(`/login`, values);
}
const deleteUser = (id) => {
    return axios.delete(`/delete/` + id)
}
const updateUser = (Values) => {
    return axios.post(`/addUser`, Values)
}
const editUser = (id, valuse) => {
    return axios.put(`/EditUser/` + id, valuse);
}
export { login, deleteUser, updateUser, editUser }