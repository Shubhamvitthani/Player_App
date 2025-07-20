import React, { useEffect, useState } from "react";
import API from "../api";

function AdminView() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const res = await API.get("/players");
                setPlayers(res.data);
            } catch (err) {
                alert("Error fetching players");
            }
        };
        fetchPlayers();
    }, []);

    return (
        <div className="container mt-4">
            <h2>All Registered Players</h2>
            <table className="table table-striped mt-3">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Role</th>
                        <th>Batting</th>
                        <th>Bowling</th>
                        <th>Team</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, idx) => (
                        <tr key={idx}>
                            <td>{player.name}</td>
                            <td>{player.age}</td>
                            <td>{player.role}</td>
                            <td>{player.battingStyle}</td>
                            <td>{player.bowlingStyle}</td>
                            <td>{player.team}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminView;
