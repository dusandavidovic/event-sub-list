import { IFilter } from "../interface/filter";

interface IFilterProps {
  columns: string[];
  onFilterChange: (filters: IFilter[]) => void;
}

const Filter: React.FC<IFilterProps> = ({ columns, onFilterChange }) => {
  return <div>Filter</div>;
};

export default Filter;
