import {
    Users,
    FileText,
    Bell,
    AlertTriangle,
    Home,
    ClipboardCheck,
    Plus,
    LogOut,
} from "lucide-react";

export default function AdminDashboard() {
    return (
        <div className="min-h-screen bg-slate-100">
            {/* Navbar */}
            <header className="bg-[#071633] text-white">
                <div className="flex justify-between items-center px-10 py-4">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center font-bold text-xl">
                            B
                        </div>

                        <h1 className="text-3xl font-bold">
                            Barangay Monitoring Portal
                        </h1>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="text-right">
                            <h3 className="font-semibold">
                                Barangay Administrator
                            </h3>
                            <p className="text-slate-300 text-sm">
                                admin@barangay.gov.ph
                            </p>
                        </div>

                        <button className="border border-red-500 px-5 py-3 rounded-xl flex items-center gap-2 text-red-400 hover:bg-red-500 hover:text-white transition">
                            <LogOut size={18} />
                            Logout
                        </button>
                    </div>
                </div>
            </header>

            <main className="p-10">
                {/* Welcome Banner */}
                <div className="bg-gradient-to-r from-[#02112f] via-[#062847] to-[#39b37f]
         rounded-3xl p-10 text-white shadow-lg flex justify-between items-center">
                    <div>
                        <span className="bg-green-900/40 text-green-300 px-4 py-2 rounded-full text-sm">
                            Admin Portal Active
                        </span>

                        <h2 className="text-5xl font-bold mt-6">
                            Welcome Back, Administrator!
                        </h2>

                        <p className="mt-3 text-lg text-slate-200">
                            Manage residents, approve requests, create announcements,
                            and monitor community reports.
                        </p>
                    </div>

                    <button className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl font-semibold shadow-lg">
                        + New Announcement
                    </button>
                </div>

                {/* Statistics Cards */}
                <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mt-10">

                    <StatCard
                        icon={<Users />}
                        title="Residents"
                        value="1,245"
                        color="bg-purple-100"
                    />

                    <StatCard
                        icon={<FileText />}
                        title="Pending Requests"
                        value="18"
                        color="bg-yellow-100"
                    />

                    <StatCard
                        icon={<ClipboardCheck />}
                        title="Approved"
                        value="532"
                        color="bg-green-100"
                    />

                    <StatCard
                        icon={<Home />}
                        title="Households"
                        value="387"
                        color="bg-blue-100"
                    />

                    <StatCard
                        icon={<Bell />}
                        title="Announcements"
                        value="25"
                        color="bg-orange-100"
                    />

                    <StatCard
                        icon={<AlertTriangle />}
                        title="Emergencies"
                        value="4"
                        color="bg-red-100"
                    />
                </div>

                {/* Quick Actions */}
                <div className="mt-10 bg-white rounded-3xl p-8 shadow">
                    <h2 className="text-2xl font-bold mb-6">
                        Quick Actions
                    </h2>

                    <div className="grid md:grid-cols-3 gap-5">
                        <ActionButton title="Add Resident" />
                        <ActionButton title="Manage Requests" />
                        <ActionButton title="Create Announcement" />
                        <ActionButton title="Manage Households" />
                        <ActionButton title="Emergency Reports" />
                        <ActionButton title="Generate Reports" />
                    </div>
                </div>

                {/* Requests Table */}
                <div className="bg-white rounded-3xl shadow mt-10 overflow-hidden">
                    <div className="p-8 border-b">
                        <h2 className="text-2xl font-bold">
                            Pending Document Requests
                        </h2>
                    </div>

                    <table className="w-full">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="p-5 text-left">Request ID</th>
                                <th className="p-5 text-left">Resident</th>
                                <th className="p-5 text-left">Document</th>
                                <th className="p-5 text-left">Date</th>
                                <th className="p-5 text-left">Status</th>
                                <th className="p-5 text-left">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="border-t">
                                <td className="p-5">REQ-1001</td>
                                <td className="p-5">Juan Dela Cruz</td>
                                <td className="p-5">Barangay Clearance</td>
                                <td className="p-5">Nov 11, 2026</td>

                                <td className="p-5">
                                    <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm">
                                        Pending
                                    </span>
                                </td>

                                <td className="p-5">
                                    <button className="text-green-600 font-semibold">
                                        Review
                                    </button>
                                </td>
                            </tr>

                            <tr className="border-t">
                                <td className="p-5">REQ-1002</td>
                                <td className="p-5">Maria Santos</td>
                                <td className="p-5">Certificate of Residency</td>
                                <td className="p-5">Nov 10, 2026</td>

                                <td className="p-5">
                                    <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">
                                        Processing
                                    </span>
                                </td>

                                <td className="p-5">
                                    <button className="text-blue-600 font-semibold">
                                        View
                                    </button>
                                </td>
                            </tr>

                            <tr className="border-t">
                                <td className="p-5">REQ-1003</td>
                                <td className="p-5">Pedro Reyes</td>
                                <td className="p-5">Certificate of Indigency</td>
                                <td className="p-5">Nov 09, 2026</td>

                                <td className="p-5">
                                    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">
                                        Approved
                                    </span>
                                </td>

                                <td className="p-5">
                                    <button className="text-green-700 font-semibold">
                                        Print
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}

function StatCard({ icon, title, value, color }) {
    return (
        <div className="bg-white rounded-3xl p-6 shadow">
            <div className="flex items-center gap-4">
                <div className={`${color} p-4 rounded-2xl`}>
                    {icon}
                </div>

                <div>
                    <p className="text-slate-500">{title}</p>
                    <h3 className="text-3xl font-bold">{value}</h3>
                </div>
            </div>
        </div>
    );
}

function ActionButton({ title }) {
    return (
        <button className="bg-slate-50 border hover:bg-green-500 hover:text-white
    transition rounded-2xl py-5 font-semibold">
            <Plus className="inline mr-2" size={18} />
            {title}
        </button>
    );
}