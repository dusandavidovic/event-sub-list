import FilterForm from "./FilterFormSimple";

const columns = [
  { label: "Name", key: "name" },
  { label: "Email", key: "email" },
];

function handleFilterChange(filters: Record<string, string>) {
  console.log(filters);
}

export default function App() {
  return (
    <div>
      <FilterForm columns={columns} onFilterChange={handleFilterChange} />
      {/* Render data table here */}
    </div>
  );
}
