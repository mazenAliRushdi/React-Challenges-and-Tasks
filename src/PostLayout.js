import { Outlet } from "react-router-dom";

export default function PostLayout () {
    return (
        <>
            <p style={{background: 'green', color: 'white', textAlign: 'center'}}>Layout</p>
            <Outlet />
            <p style={{background: 'green', color: 'white', textAlign: 'center'}}>Layout</p>
        </>
    )
}