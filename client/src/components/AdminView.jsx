import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import API from "../api";

function AdminView() {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const res = await API.get("/players");
                setPlayers(res.data);
            } catch (err) {
                alert("Error fetching players");
            } finally {
                setLoading(false);
            }
        };
        fetchPlayers();
    }, []);

    const rowVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.08 },
        }),
    };

    const getRoleBadge = (role) => {
        const color =
            role === "Batsman"
                ? "success"
                : role === "Bowler"
                    ? "primary"
                    : role === "All-Rounder"
                        ? "warning"
                        : "secondary";
        return <span className={`badge bg-${color}`}>{role}</span>;
    };

    const getTeamBadge = (team) => {
        const color = team.includes("A") ? "info" : "danger";
        return <span className={`badge bg-${color}`}>{team}</span>;
    };

    return (
        <div className="container mt-5">
            <motion.h2
                className="mb-4 text-center"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                style={{
                    fontWeight: 800,
                    background: "linear-gradient(to right, #FF512F, #DD2476)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: "2.4rem",
                }}
            >
                <i className="bi bi-trophy-fill me-2"></i> Player Management Dashboard
            </motion.h2>

            {loading ? (
                <motion.div
                    className="text-center mt-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="spinner-border text-danger" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </motion.div>
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div
                        className="table-responsive shadow-sm rounded"
                        style={{
                            border: "1px solid #dee2e6",
                            backgroundColor: "#fff",
                        }}
                    >
                        <table className="table table-hover table-borderless">
                            <thead style={{ backgroundColor: "#f8f9fa" }}>
                                <tr className="text-center align-middle">
                                    <th>
                                        <i
                                            className="bi bi-person-circle me-1"
                                            style={{ color: "#6f42c1" }}
                                        ></i>
                                        Name
                                    </th>
                                    <th>
                                        <i
                                            className="bi bi-hourglass-split me-1"
                                            style={{ color: "#0d6efd" }}
                                        ></i>
                                        Age
                                    </th>
                                    <th>
                                        <i
                                            className="bi bi-shield-lock-fill me-1"
                                            style={{ color: "#198754" }}
                                        ></i>
                                        Role
                                    </th>
                                    <th>
                                        <i
                                            className="bi bi-bullseye me-1"
                                            style={{ color: "#6610f2" }}
                                        ></i>
                                        Batting
                                    </th>
                                    <th>
                                        <i
                                            className="bi bi-crosshair me-1"
                                            style={{ color: "#0dcaf0" }}
                                        ></i>
                                        Bowling
                                    </th>
                                    <th>
                                        <i
                                            className="bi bi-people-fill me-1"
                                            style={{ color: "#fd7e14" }}
                                        ></i>
                                        Team
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {players.map((player, index) => (
                                    <motion.tr
                                        key={index}
                                        custom={index}
                                        initial="hidden"
                                        animate="visible"
                                        variants={rowVariants}
                                        whileHover={{
                                            scale: 1.01,
                                            backgroundColor: "#f0f8ff",
                                        }}
                                        className="text-center align-middle"
                                        style={{ cursor: "pointer" }}
                                    >
                                        <td style={{ color: "#343a40" }}>
                                            <i
                                                className="bi bi-person-fill me-1"
                                                style={{ color: "#6f42c1" }}
                                            ></i>
                                            {player.name}
                                        </td>
                                        <td>
                                            <span className="badge bg-primary">{player.age}</span>
                                        </td>
                                        <td>{getRoleBadge(player.role)}</td>
                                        <td>
                                            <i
                                                className="bi bi-circle-fill me-1"
                                                style={{ color: "#6f42c1" }}
                                            ></i>
                                            {player.battingStyle}
                                        </td>
                                        <td>
                                            <i
                                                className="bi bi-circle-fill me-1"
                                                style={{ color: "#0dcaf0" }}
                                            ></i>
                                            {player.bowlingStyle}
                                        </td>
                                        <td>{getTeamBadge(player.team)}</td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            )}
        </div>
    );
}

export default AdminView;
