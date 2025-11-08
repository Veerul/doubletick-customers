import React, { useState } from "react";
import filterIcon from "../assets/test_Filter.svg";

export default function FiltersDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown">
      <button onClick={() => setOpen(!open)}>
        <img src={filterIcon} alt="Filter" className="filter-icon" />
        Add Filters ▾
      </button>
      {open && (
        <div className="dropdown-content">
          {["Filter 1", "Filter 2", "Filter 3", "Filter 4"].map(f => (
            <p key={f}>{f}</p>
          ))}
        </div>
      )}
    </div>
  );
}
