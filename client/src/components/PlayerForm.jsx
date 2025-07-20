import React, { useState } from "react";
import { motion } from "framer-motion";
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
            setForm({
                name: "",
                age: "",
                role: "",
                battingStyle: "",
                bowlingStyle: "",
                team: "",
            });
        } catch (err) {
            alert("Error: " + err.message);
        }
    };

    const inputStyle = {
        backgroundColor: "#f8f9fa",
        borderRadius: "8px",
        border: "1px solid #ced4da",
    };

    const labelStyle = {
        fontWeight: 600,
        color: "#495057",
    };

    return (
        <div className="container mt-5">
            <motion.h2
                className="text-center mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                    fontWeight: 800,
                    background: "linear-gradient(to right, #f12711, #f5af19)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: "2rem",
                }}
            >
                <i className="bi bi-person-plus-fill me-2"></i>
                Cricket Player Registration
            </motion.h2>

            <motion.form
                onSubmit={handleSubmit}
                className="mx-auto p-4 shadow-sm rounded"
                style={{ maxWidth: "600px", backgroundColor: "#ffffff" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Name */}
                <div className="mb-3">
                    <label style={labelStyle}>
                        <i className="bi bi-person-fill me-2 text-primary"></i>Name
                    </label>
                    <input
                        className="form-control"
                        style={inputStyle}
                        name="name"
                        placeholder="Enter name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Age */}
                <div className="mb-3">
                    <label style={labelStyle}>
                        <i className="bi bi-hourglass-top me-2 text-info"></i>Age
                    </label>
                    <input
                        className="form-control"
                        style={inputStyle}
                        name="age"
                        type="number"
                        placeholder="Enter age"
                        value={form.age}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Role */}
                <div className="mb-3">
                    <label style={labelStyle}>
                        <i className="bi bi-shield-lock-fill me-2 text-success"></i>Role
                    </label>
                    <select
                        className="form-control"
                        style={inputStyle}
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Role</option>
                        <option value="Batsman">Batsman</option>
                        <option value="Bowler">Bowler</option>
                        <option value="All-Rounder">All-Rounder</option>
                    </select>
                </div>

                {/* Batting Style */}
                <div className="mb-3">
                    <label style={labelStyle}>
                        <i className="bi bi-bullseye me-2 text-purple"></i>Batting Style
                    </label>
                    <input
                        className="form-control"
                        style={inputStyle}
                        name="battingStyle"
                        placeholder="e.g. Right-hand bat"
                        value={form.battingStyle}
                        onChange={handleChange}
                    />
                </div>

                {/* Bowling Style */}
                <div className="mb-3">
                    <label style={labelStyle}>
                        <i className="bi bi-crosshair me-2 text-info"></i>Bowling Style
                    </label>
                    <input
                        className="form-control"
                        style={inputStyle}
                        name="bowlingStyle"
                        placeholder="e.g. Right-arm medium"
                        value={form.bowlingStyle}
                        onChange={handleChange}
                    />
                </div>

                {/* Team */}
                <div className="mb-4">
                    <label style={labelStyle}>
                        <i className="bi bi-people-fill me-2 text-danger"></i>Team
                    </label>
                    <input
                        className="form-control"
                        style={inputStyle}
                        name="team"
                        placeholder="Enter team name"
                        value={form.team}
                        onChange={handleChange}
                    />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <motion.button
                        className="btn btn-warning px-4 py-2 fw-bold"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                    >
                        <i className="bi bi-send-check-fill me-2"></i>Submit
                    </motion.button>
                </div>
            </motion.form>
        </div>
    );
}

export default PlayerForm;
