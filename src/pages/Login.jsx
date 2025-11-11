
import React from 'react';

export default function Login() {
    return (
        <div className="min-h-screen bg-green-50 flex items-center justify-center p-6">

            {/* ครอบทั้งอันให้อยู่ตรงกลาง และกำหนดให้หากจอเล็กจะเปลี่ยนแบบการวาง */}
            <div className="flex flex-col lg:flex-row gap-6 max-w-6xl w-full">

                {/* จัดทางซ้าย */}
                <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 flex-1">
                    <div className="flex items-center gap-2 text-green-700 text-xl font-bold">
                        <span>📚</span> แก้ไขเนื้อหา 01
                    </div>
                    <p className="text-gray-600">
                        แก้ไขเนื้อหา 02
                    </p>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 bg-green-100 rounded-lg p-3">
                            <span>✅</span> แก้ไขเนื้อหา 03
                        </div>
                        <div className="flex items-center gap-3 bg-green-100 rounded-lg p-3">
                            <span>✅</span> แก้ไขเนื้อหา 04
                        </div>
                        <div className="flex items-center gap-3 bg-green-100 rounded-lg p-3">
                            <span>✅</span> แก้ไขเนื้อหา 05
                        </div>
                    </div>
                    <img src="/images/sample.jpg" alt="กิจกรรมการเรียน" className="rounded-lg mt-4" />
                </div>

                {/* จัดทางขวา */}
                <div className="bg-white rounded-xl shadow-lg p-6 flex-1">
                    <div className="flex items-center gap-2 text-green-700 text-xl font-bold">
                        <span>📖</span> เข้าสู่ระบบ
                    </div>
                    <div className="mt-4 flex flex-col gap-4">
                        <input
                            type="email"
                            placeholder="กรอกอีเมลของคุณ"
                            className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                        <input
                            type="password"
                            placeholder="กรอกรหัสผ่านของคุณ"
                            className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                        <div className="flex items-center justify-between text-sm text-gray-600">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" /> จดจำฉันไว้
                            </label>
                            <a href="#" className="text-green-600 hover:underline">
                                ลืมรหัสผ่าน?
                            </a>
                        </div>
                        <button className="bg-green-600 text-white w-full py-3 rounded-lg hover:bg-green-700 transition">
                            เข้าสู่ระบบ
                        </button>
                        <p className="text-center text-gray-600 mt-2">
                            ยังไม่มีบัญชี?{' '}
                            <a href="#" className="text-green-600 hover:underline">
                                สมัครสมาชิก
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
