import React from 'react';
import { toast } from "react-toastify"

export default function Register() {
    const hdlSubmit = async data => {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000))
            const resp = await authApi.post('/register', data)
            toast.success(resp.data?.message)
            document.getElementById("register-form").close()
            reset()
        } catch (err) {
            console.log(err)
            const errMsg = err.response?.data?.message || err.message
            toast.error(errMsg)
        }
    }

    return (
        <div className="min-h-screen bg-green-50 flex items-center justify-center p-6">
            <div className="flex flex-col md:flex-row gap-6 max-w-6xl w-full">

                {/* Left Register Form */}
                <div className="bg-white rounded-xl shadow-lg p-6 flex-1">
                    <div className="flex items-center gap-2 text-green-700 text-xl font-bold mb-4">
                        <span>🎓</span> สมัครสมาชิก
                    </div>
                    <p className="text-gray-600 mb-6">เริ่มต้นการเรียนรู้กับเราวันนี้</p>
                    <form className="flex flex-col gap-4" onSubmit={hdlSubmit}>
                        {/* 1. ชื่อและนามสกุล */}
                        <div className="flex gap-4">
                            <input
                                type="text"
                                name="firstName" // เพิ่ม name
                                placeholder="ชื่อ"
                                className="border border-gray-300 rounded-lg w-full p-3 focus:ring-2 focus:ring-green-400"
                                required // เพิ่ม Validation
                            />
                            <input
                                type="text"
                                name="lastName" // เพิ่ม name
                                placeholder="นามสกุล"
                                className="border border-gray-300 rounded-lg w-full p-3 focus:ring-2 focus:ring-green-400"
                                required // เพิ่ม Validation
                            />
                        </div>

                        {/* 2. อีเมล */}
                        <input
                            type="email"
                            name="email" // เพิ่ม name
                            placeholder="อีเมล"
                            className="border border-gray-300 rounded-lg w-full p-3 focus:ring-2 focus:ring-green-400"
                            required
                        />

                        {/* 3. รหัสผ่าน */}
                        <input
                            type="password"
                            name="password" // เพิ่ม name
                            placeholder="รหัสผ่าน"
                            className="border border-gray-300 rounded-lg w-full p-3 focus:ring-2 focus:ring-green-400"
                            required
                            minLength="8" // เพิ่มเงื่อนไขรหัสผ่าน
                        />

                        {/* 4. ยืนยันรหัสผ่าน */}
                        <input
                            type="password"
                            name="confirmPassword" // เพิ่ม name
                            placeholder="ยืนยันรหัสผ่าน"
                            className="border border-gray-300 rounded-lg w-full p-3 focus:ring-2 focus:ring-green-400"
                            required
                        />

                        {/* 5. ปุ่ม Submit */}
                        <button
                            type="submit" // **สำคัญมาก:** เปลี่ยนเป็น type="submit"
                            className="bg-green-600 text-white w-full py-3 rounded-lg hover:bg-green-700 transition"
                        // ไม่ต้องมี onClick แล้ว เพราะฟังก์ชันถูกผูกกับ onSubmit ของ form
                        >
                            สมัครสมาชิก
                        </button>

                        {/* 6. ลิงก์เข้าสู่ระบบ */}
                        <p className="text-center text-gray-600 mt-2">
                            มีบัญชีอยู่แล้ว? <a href="#" className="text-green-600 hover:underline">เข้าสู่ระบบ</a>
                        </p>
                    </form>
                </div>

                {/* Right Info Section */}
                <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 flex-1 ">
                    <div className="flex items-center gap-2 text-green-700 text-xl font-bold">
                        <span>📖</span>แก้ไขเนื้อหา 01
                    </div>
                    <p className="text-gray-600">
                        แก้ไขเนื้อหา 02
                    </p>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 bg-green-100 rounded-lg p-3">
                            <span>✅</span> แก้ไขเนื้อหา 01
                        </div>
                        <div className="flex items-center gap-3 bg-green-100 rounded-lg p-3">
                            <span>✅</span> แก้ไขเนื้อหา 01
                        </div>
                        <div className="flex items-center gap-3 bg-green-100 rounded-lg p-3">
                            <span>✅</span> แก้ไขเนื้อหา 01
                        </div>
                        <div className="flex items-center gap-3 bg-green-100 rounded-lg p-3">
                            <span>✅</span> แก้ไขเนื้อหา 01
                        </div>
                    </div>
                    <img src="/images/sample.jpg" alt="กิจกรรม" className="rounded-lg mt-4" />
                </div>
            </div>
        </div>
    );
}
