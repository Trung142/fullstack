import "./tableUser.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import ModaleEdit from "./modals/modalEdit";
import ModaleAdd from "./modals/ModaleAdd";
import ModaleDelete from "./modals/modalDelete";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../reviceAPI/axiosAPI";
const TableUser = (props) => {
    const [listUser, setlistUser] = useState([]);
    const [showadd, setShowadd] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [dataEdit, setdataEdit] = useState({});
    const [showDelete, setShowDelete] = useState(false);
    const [DeleteData, setDeleteData] = useState({});
    useEffect(() => {
        getuser();
    }, [])
    //list
    const getuser = async () => {
        const res = await login();
        if (res && res.data) {
            setlistUser(res.data);
        }
    }
    // show modale
    const handleClose = () => {
        setShowadd(false);
        setShowDelete(false);
        setShowEdit(false);
    }
    // resert page
    const hanldeUpdate = (user) => {
        setlistUser([user, ...listUser]);
    }
    //Edit
    const handleEdit = (user) => {
        setShowEdit(true);
        setdataEdit(user);
    }
    const handleEditdata = (user) => {
        let listuser = [...listUser];
        const index = listUser.findIndex(items => items.id === user.id);
        listuser[index].name = user.name;
        listuser[index].email = user.email;
        listuser[index].password = user.password;
        setlistUser(listuser);
    }
    //delete
    const handledelete = (user) => {
        setShowDelete(true);
        setDeleteData(user)
    }
    const handledatadeleteUser = (user) => {
        let listuser = [...listUser];
        listuser = listUser.filter((items) => items.id !== user.id);
        setlistUser(listuser);
    }
    return (
        <>
            <div className="container">
                <div className="row p-3">
                    <div className="curtor">
                        <Link to='/'> thoát</Link>
                    </div>
                    <div className="col">
                        <span><strong>list User </strong></span>

                    </div>
                    <div className="col add">
                        <button onClick={() => setShowadd(true)} className="btn btn-danger" type="">Add User</button>
                    </div>
                </div>
                <div className="mb-3">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    ID
                                </th>
                                <th>
                                    Email
                                </th>
                                <th>
                                    Name
                                </th>
                                <th>
                                    Password
                                </th>
                                <th>
                                    Active
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {listUser && listUser.length > 0 && listUser.map((items, index) => {
                                return (
                                    <tr key={`user ${index}`}>
                                        <td>{items.id}</td>
                                        <td>{items.email}</td>
                                        <td>{items.name}</td>
                                        <td>{items.password}</td>
                                        <td>
                                            <div>
                                                <i onClick={() => handleEdit(items)} className="fa-regular fa-pen-to-square"></i>
                                                <i onClick={() => handledelete(items)} className="fa-regular fa-trash-can"></i>
                                            </div>
                                        </td>
                                    </tr>
                                )

                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <ModaleAdd
                show={showadd}
                handle={handleClose}
                hanldeUpdate={hanldeUpdate}
            />
            <ModaleDelete
                show={showDelete}
                handle={handleClose}
                DeleteData={DeleteData}
                handledatadeleteUser={handledatadeleteUser}
            />
            <ModaleEdit
                show={showEdit}
                handle={handleClose}
                dataEdit={dataEdit}
                handleEditdata={handleEditdata}
            />

        </>
    )
}
export default TableUser;