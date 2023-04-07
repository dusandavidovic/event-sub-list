import { useState } from "react";

export interface Column {
  label: string;
  key: string;
}

export interface Filter {
  columnKey: string;
  value: string;
}

interface Props {
  columns: Column[];
  onFilterChange: (filters: Filter[]) => void;
}

export default function FilterForm({ columns, onFilterChange }: Props) {
  const [filters, setFilters] = useState<Filter[]>([{ columnKey: "", value: "" }]);

  function handleColumnSelectChange(event: React.ChangeEvent<HTMLSelectElement>, index: number) {
    const { value } = event.target;
    setFilters((prevFilters) =>
      prevFilters.map((filter, i) => (i === index ? { ...filter, columnKey: value } : filter))
    );
  }

  function handleValueInputChange(event: React.ChangeEvent<HTMLInputElement>, index: number) {
    const { value } = event.target;
    setFilters((prevFilters) =>
      prevFilters.map((filter, i) => (i === index ? { ...filter, value } : filter))
    );
  }

  function handleAddFilterClick() {
    setFilters((prevFilters) => [...prevFilters, { columnKey: "", value: "" }]);
  }

  function handleRemoveFilterClick(index: number) {
    setFilters((prevFilters) => prevFilters.filter((filter, i) => i !== index));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onFilterChange(filters.filter((filter) => filter.columnKey && filter.value));
  }

  return (
    <form onSubmit={handleSubmit}>
      {filters.map((filter, index) => (
        <div key={index}>
          <select
            value={filter.columnKey}
            onChange={(event) => handleColumnSelectChange(event, index)}
          >
            <option value="">Select a column</option>
            {columns.map((column) => (
              <option key={column.key} value={column.key}>
                {column.label}
              </option>
            ))}
          </select>
          <input
            type="text"
            value={filter.value}
            onChange={(event) => handleValueInputChange(event, index)}
          />
          {index > 0 && (
            <button type="button" onClick={() => handleRemoveFilterClick(index)}>
              Remove
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={handleAddFilterClick}>
        Add Filter
      </button>
      <button type="submit">Apply Filters</button>
    </form>
  );
}
