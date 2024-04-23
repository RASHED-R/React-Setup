import { Outlet } from "react-router-dom"

const AdminLayout = () => {
    return (
        <>
            <h3>Admin Header</h3>
            <Outlet />
            <h3>Admin Footer</h3>
        </>
    )
}

export default AdminLayout;