import React, { useEffect, useState, useMemo } from "react";
import Table from "./components/Table";
import FiltersDropdown from "./components/FiltersDropdown";
import { generateCustomers } from "./utils/generateData";
import logo from "./assets/DoubletickLogo.png";
import searchIcon from "./assets/test_Search-3.svg";

export default function App() {
  const [customers, setCustomers] = useState([]);
  const [visible, setVisible] = useState(30);
  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  useEffect(() => {
    setCustomers(generateCustomers(1_000_000));
  }, []);

  const [debounced, setDebounced] = useState(search);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(search), 250);
    return () => clearTimeout(t);
  }, [search]);

  const filtered = useMemo(() => {
    if (!debounced) return customers;
    return customers.filter(
      c =>
        c.name.toLowerCase().includes(debounced.toLowerCase()) ||
        c.email.toLowerCase().includes(debounced.toLowerCase()) ||
        c.phone.includes(debounced)
    );
  }, [customers, debounced]);

  const sorted = useMemo(() => {
    if (!sortConfig.key) return filtered;
    const sortedData = [...filtered].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "asc" ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
    return sortedData;
  }, [filtered, sortConfig]);

  const handleSort = key => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc"
    }));
  };

  const handleScroll = e => {
    if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight - 20) {
      setVisible(v => Math.min(v + 30, sorted.length));
    }
  };

  return (
    <div className="app">
      <div className="header">
        <img src={logo} alt="DoubleTick Logo" className="logo" />
        <h2 className="title"></h2>
      </div>

      <div className="topbar">
        <span className="count">{sorted.length.toLocaleString()} Customers</span>
        <div className="search-container">
          <img src={searchIcon} alt="Search" className="search-icon" />
          <input
            type="text"
            placeholder="Search Customers"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <FiltersDropdown />
      </div>

      <div className="table-container" onScroll={handleScroll}>
        <Table data={sorted.slice(0, visible)} onSort={handleSort} sortConfig={sortConfig} />
      </div>
    </div>
  );
}
