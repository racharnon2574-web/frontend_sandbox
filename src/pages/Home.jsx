import React from 'react'

function Home() {
    return (
        <div className="min-h-screen bg-green-50">
            {/* Search */}
            <div className="p-6">
                <input
                    type="text"
                    placeholder="ค้นหาวิดีโอ หรือบทความที่คุณสนใจ..."
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-5 gap-4 px-6">
                {["3 วิดีโอ", "3 เอกสาร", "6 กิจกรรม", "4.8 คะแนนเฉลี่ย"].map((item, i) => (
                    <div key={i} className="bg-white p-4 rounded-lg shadow text-center">
                        <p className="text-green-600 font-bold">{item}</p>
                    </div>
                ))}
            </div>

            {/* Content Cards */}
            <div className="grid grid-cols-3 gap-6 p-6">
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <img src="python.jpg" alt="Python" className="w-full h-40 object-cover" />
                    <div className="p-4">
                        <h3 className="font-bold text-lg">พื้นฐานการเขียนโปรแกรม Python</h3>
                        <p className="text-gray-600 text-sm">สำหรับผู้เริ่มต้น</p>
                        <div className="flex justify-between mt-2 text-sm text-gray-500">
                            <span>⭐ 4.8</span>
                            <span>45 นาที</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
