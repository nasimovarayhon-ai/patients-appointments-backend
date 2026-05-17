import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Patients Appointments System</h1>
      <p>Frontend application for managing patients and appointments.</p>
    </div>
  );
}

function PatientsList() {
  return (
    <div>
      <h2>Patients List</h2>

      <ul>
        <li>John Smith</li>
        <li>Emma Johnson</li>
        <li>Michael Brown</li>
      </ul>
    </div>
  );
}

function AppointmentsList() {
  return (
    <div>
      <h2>Appointments List</h2>

      <ul>
        <li>Dental Check - 20 May 2026</li>
        <li>Cardiology Visit - 25 May 2026</li>
        <li>Eye Examination - 28 May 2026</li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/patients">Patients</Link> |{" "}
        <Link to="/appointments">Appointments</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patients" element={<PatientsList />} />
        <Route path="/appointments" element={<AppointmentsList />} />
      </Routes>
    </div>
  );
}

export default App;
