import { IFilter } from "../interface/filter";
import FilterLine from "./FilterLine";

interface IFilterProps {
  columns: string[];
  onFilterChange: (filters: IFilter[], action: string) => void;
}

const Filter: React.FC<IFilterProps> = ({ columns, onFilterChange }) => {
  return <FilterLine columns={columns} onFilterChange={onFilterChange} />;
};

export default Filter;
