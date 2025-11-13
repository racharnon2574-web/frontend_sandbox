import React from 'react'
import { Outlet } from 'react-router'

function Header() {
    return (
        <div>
            <header className="flex justify-between items-center p-4 bg-white shadow">
                <div className="flex items-center gap-2">
                    <span className="text-green-600 text-2xl font-bold">📚 ระบบการเรียนการสอน</span>
                </div>
                <div className="flex gap-4">
                    <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">+ เพิ่มเนื้อหา</button>
                    <button className="border border-green-600 text-green-600 px-4 py-2 rounded hover:bg-green-100">ออกจากระบบ</button>
                </div>
            </header>
            {/* เจาะช่อง */}
            <Outlet />
        </div>
    )
}

export default Header
