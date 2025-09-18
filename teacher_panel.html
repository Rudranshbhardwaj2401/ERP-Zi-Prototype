import React, { useState } from "react";
import {
  Users,
  BookOpen,
  FileText,
  BarChart,
  ClipboardList,
  Calendar,
  CheckCircle,
} from "lucide-react";

const TeacherDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [attendance, setAttendance] = useState({});

  const handleAttendanceChange = (studentId, status) => {
    setAttendance((prev) => ({
      ...prev,
      [studentId]: status,
    }));
  };

  const sections = [
    { id: "dashboard", label: "Dashboard", icon: BarChart },
    { id: "attendance", label: "Attendance", icon: ClipboardList },
    { id: "assignments", label: "Assignments", icon: FileText },
    { id: "marks", label: "Marks", icon: CheckCircle },
    { id: "students", label: "Students", icon: Users },
    { id: "timetable", label: "Timetable", icon: Calendar },
  ];

  const students = [
    { id: 1, name: "Rahul Sharma", rollNo: "CSE001" },
    { id: 2, name: "Priya Verma", rollNo: "CSE002" },
    { id: 3, name: "Amit Kumar", rollNo: "CSE003" },
    { id: 4, name: "Sneha Patel", rollNo: "CSE004" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-xl">
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold text-blue-600">Teacher Panel</h2>
        </div>
        <nav className="mt-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center w-full px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all ${
                activeSection === section.id ? "bg-blue-100 text-blue-700" : ""
              }`}
            >
              <section.icon className="mr-3 h-5 w-5" />
              {section.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {activeSection === "dashboard" && (
          <div>
            <h1 className="text-3xl font-bold mb-8 text-gray-800">
              Welcome Teacher 👩‍🏫
            </h1>
            <p className="text-gray-600">
              Use the sidebar to manage attendance, assignments, marks, students,
              and timetable.
            </p>
          </div>
        )}

        {/* Attendance Section */}
        {activeSection === "attendance" && (
          <div>
            <h1 className="text-3xl font-bold mb-8 text-gray-800">
              Upload Attendance
            </h1>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-blue-100 text-left">
                  <tr>
                    <th className="px-6 py-3">Roll No</th>
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.id} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4">{student.rollNo}</td>
                      <td className="px-6 py-4">{student.name}</td>
                      <td className="px-6 py-4 flex space-x-2">
                        {["present", "absent", "late"].map((status) => (
                          <button
                            key={status}
                            onClick={() =>
                              handleAttendanceChange(student.rollNo, status)
                            }
                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                              attendance[student.rollNo] === status
                                ? status === "present"
                                  ? "bg-green-100 text-green-800 border-2 border-green-300 shadow-md"
                                  : status === "absent"
                                  ? "bg-red-100 text-red-800 border-2 border-red-300 shadow-md"
                                  : "bg-yellow-100 text-yellow-800 border-2 border-yellow-300 shadow-md"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                          </button>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Assignments Section */}
        {activeSection === "assignments" && (
          <div>
            <h1 className="text-3xl font-bold mb-8 text-gray-800">
              Assignments
            </h1>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Upload Assignment</h2>
              <input
                type="file"
                className="mb-4 block w-full text-sm text-gray-500
                           file:mr-4 file:py-2 file:px-4
                           file:rounded-full file:border-0
                           file:text-sm file:font-semibold
                           file:bg-blue-50 file:text-blue-700
                           hover:file:bg-blue-100"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700">
                Upload
              </button>
            </div>
            <div className="mt-6 bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold mb-4">
                Submitted Assignments
              </h2>
              <ul className="space-y-3">
                {students.map((s) => (
                  <li
                    key={s.id}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <span>{s.name} - {s.rollNo}</span>
                    <button className="bg-green-600 text-white px-4 py-1 rounded-lg hover:bg-green-700">
                      Grade
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Marks Section */}
        {activeSection === "marks" && (
          <div>
            <h1 className="text-3xl font-bold mb-8 text-gray-800">
              Upload Marks
            </h1>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <input
                type="file"
                className="mb-4 block w-full text-sm text-gray-500
                           file:mr-4 file:py-2 file:px-4
                           file:rounded-full file:border-0
                           file:text-sm file:font-semibold
                           file:bg-green-50 file:text-green-700
                           hover:file:bg-green-100"
              />
              <button className="bg-green-600 text-white px-6 py-2 rounded-xl shadow hover:bg-green-700">
                Upload
              </button>
            </div>
          </div>
        )}

        {/* Students Section */}
        {activeSection === "students" && (
          <div>
            <h1 className="text-3xl font-bold mb-8 text-gray-800">
              Student Details
            </h1>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-green-100 text-left">
                  <tr>
                    <th className="px-6 py-3">Roll No</th>
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.id} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4">{student.rollNo}</td>
                      <td className="px-6 py-4">{student.name}</td>
                      <td className="px-6 py-4">
                        <button className="text-blue-600 hover:underline">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Timetable Section */}
        {activeSection === "timetable" && (
          <div>
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Timetable</h1>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <p className="text-gray-600">Upload or view class timetable.</p>
              <input
                type="file"
                className="mt-4 block w-full text-sm text-gray-500
                           file:mr-4 file:py-2 file:px-4
                           file:rounded-full file:border-0
                           file:text-sm file:font-semibold
                           file:bg-purple-50 file:text-purple-700
                           hover:file:bg-purple-100"
              />
              <button className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-xl shadow hover:bg-purple-700">
                Upload
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default TeacherDashboard;
