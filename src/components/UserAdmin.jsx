import { useNavigate } from "react-router-dom";
import {  BsPersonPlus } from "react-icons/bs";

let data = [
  { id: 1, username: "john_doe", email: "john.doe@example.com", role: "User" },
  { id: 2, username: "jane_smith", email: "jane.smith@example.com", role: "User" }
];

export default function UserAdmin() {
    const navigate = useNavigate();
  return (
    <div className="">
        <div className="row mb-3 d-flex align-items-center justify-content-between">
            <div className="col-md-6">
                <h4 className="fw-bold text-dark m-0">User Management</h4>
            </div>
            <div className="col-md-6 text-end">
                <button className="btn btn-primary mb-3" onClick ={()=>navigate("/admin/user/add")}>
                    <BsPersonPlus />
                    Add New User
                </button>
            </div>
        </div>
        <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, index) => (
                        <tr key={user.id}>
                            <td scope="row">{index + 1}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );
}