import React from "react";
import defaultUser from "../assets/test_user-3.svg";

export default function Table({ data, onSort, sortConfig }) {
  const getArrow = key =>
    sortConfig.key === key ? (sortConfig.direction === "asc" ? "▲" : "▼") : "";

  return (
    <table className="customers-table">
      <thead>
        <tr>
          <th onClick={() => onSort("name")}>Customer {getArrow("name")}</th>
          <th onClick={() => onSort("score")}>Score {getArrow("score")}</th>
          <th onClick={() => onSort("email")}>Email {getArrow("email")}</th>
          <th onClick={() => onSort("lastMessageAt")}>Last message sent at {getArrow("lastMessageAt")}</th>
          <th onClick={() => onSort("addedBy")}>Added by {getArrow("addedBy")}</th>
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr key={row.id}>
            <td>
              <div className="user-cell">
                <img
                  src={row.avatar || defaultUser}
                  alt="avatar"
                  onError={(e) => (e.target.src = defaultUser)}
                />
                <div>
                  <p className="name">{row.name}</p>
                  <p className="phone">{row.phone}</p>
                </div>
              </div>
            </td>
            <td>{row.score}</td>
            <td>{row.email}</td>
            <td>{row.lastMessageAt}</td>
            <td>{row.addedBy}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
