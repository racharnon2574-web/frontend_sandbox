import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router'

// ถ้ามันช้าค่อยมาทำ lazy 
import Home from '../pages/Home'
import AddLesson from '../pages/AddLesson'
import EditLesson from '../pages/EditLesson'
import Lesson from '../pages/Lesson'
import Login from '../pages/LoginPage'
import Register from '../pages/RegisterPage'
import axios from 'axios'
import useUserLogin from '../Utils/login'

// ถ้าไม่มี user ให้มาใช้ part นี้
const guestRouter = createBrowserRouter([
    { path: '/', element: <Login /> },
    { path: '/Register', element: <Register /> },
    { path: '*', element: <Navigate to='/' /> },
])
// ถ้ามี user ให้มาใช้ partนี้
const userRouter = createBrowserRouter([{
    path: "/", element: <>
        <p>Header</p>
        <Outlet />
    </>, children: [
        { path: "", element: <Home /> },
        { path: "add-lesson", element: <AddLesson /> },
        { path: "edit-lesson", element: <EditLesson /> },
        { path: "lesson", element: <Lesson /> }
    ]
}])

function AppRouter() {
    // กำหนดให้ไม่มี user
    const user = useUserLogin((state) => state.user)
    // ตรวจสอบว่ามี user ไหม
    const finalRouter = user ? userRouter : guestRouter
    return (
        <RouterProvider router={finalRouter} />
    )
}

export default AppRouter
