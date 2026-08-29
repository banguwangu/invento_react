
import {Outlet } from "react-router-dom";
import Sidebar from "./inc/Sidebar";

export default function AdminLayout() {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
