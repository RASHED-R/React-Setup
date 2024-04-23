import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <>
            <h3>Header</h3>
            <Outlet />
            <h3>Footer</h3>
        </>
    )
}

export default Layout;