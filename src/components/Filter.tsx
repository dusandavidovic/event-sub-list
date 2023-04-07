import { useState } from "react";

interface Column {
  label: string;
  key: string;
}

interface Filter {
  columnKey: string;
  value: string;
}

interface Props {
  columns: Column[];
  onFilterChange: (filters: Record<string, string>) => void;
}

export default function FilterForm({ columns, onFilterChange }: Props) {
  const [filters, setFilters] = useState<Record<string, string>>({});

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onFilterChange(filters);
  }

  return (
    <form onSubmit={handleSubmit}>
      {columns.map((column) => (
        <div key={column.key}>
          <label htmlFor={column.key}>{column.label}</label>
          <input
            type="text"
            id={column.key}
            name={column.key}
            value={filters[column.key] || ""}
            onChange={handleInputChange}
          />
        </div>
      ))}
      <button type="submit">Apply Filters</button>
    </form>
  );
}
