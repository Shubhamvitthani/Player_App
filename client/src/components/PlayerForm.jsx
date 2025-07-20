import React, { useState } from "react";
import API from "../api";

function PlayerForm() {
    const [form, setForm] = useState({
        name: "",
        age: "",
        role: "",
        battingStyle: "",
        bowlingStyle: "",
        team: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await API.post("/players", form);
            alert("Player registered successfully!");
            setForm({ name: "", age: "", role: "", battingStyle: "", bowlingStyle: "", team: "" });
        } catch (err) {
            alert("Error: " + err.message);
        }
    };

    return (
        <div className="container mt-4">
            <h2>Cricket Player Registration Form</h2>
            <form onSubmit={handleSubmit} className="mt-3">
                <input className="form-control mb-2" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
                <input className="form-control mb-2" name="age" type="number" placeholder="Age" value={form.age} onChange={handleChange} required />
                <select className="form-control mb-2" name="role" value={form.role} onChange={handleChange} required>
                    <option value="">Select Role</option>
                    <option value="Batsman">Batsman</option>
                    <option value="Bowler">Bowler</option>
                    <option value="All-Rounder">All-Rounder</option>
                </select>
                <input className="form-control mb-2" name="battingStyle" placeholder="Batting Style" value={form.battingStyle} onChange={handleChange} />
                <input className="form-control mb-2" name="bowlingStyle" placeholder="Bowling Style" value={form.bowlingStyle} onChange={handleChange} />
                <input className="form-control mb-2" name="team" placeholder="Team Name" value={form.team} onChange={handleChange} />
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default PlayerForm;
