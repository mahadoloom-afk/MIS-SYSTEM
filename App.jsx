import React, { useState } from "react";

export default function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");

  const addStudent = () => {
    if (!name) return;
    setStudents([...students, { name }]);
    setName("");
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>نظام شؤون الطلاب - معهد العلوم العصرية</h1>

      <input
        placeholder="اسم الطالب"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addStudent}>إضافة</button>

      <h2>الطلاب</h2>
      {students.map((s, i) => (
        <div key={i}>{s.name}</div>
      ))}
    </div>
  );
}
