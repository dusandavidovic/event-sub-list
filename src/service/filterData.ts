import { series, skills } from "../config/filters";
import { IFilter } from "../interface/filter";
import { filterValues } from "./common";
//import { filterValues } from "./common";

interface ITable {
  columns: string[];
  rows: string[][];
}

// export const getSeries = ({ columns, rows }: ITable) => {
//   const idx = columns.indexOf("Series");

//   //const aaa = filterValues(rows, "series");

//   const aaa = rows.map((row) => row[idx]);
//   console.log("getSeries", aaa);
//   const mySet = new Set(aaa);
//   console.log("mySet", mySet);
// };

export const getSeries = () => {
  return series;
};
export const getSkills = () => {
  return skills;
};

interface IfilterRowsProps {
  filter: IFilter;
  //columns: string[];
  rows: string[][];
  columnIndex: number;
}

const filterRowsByColumn = ({
  filter,
  rows,
  columnIndex,
}: IfilterRowsProps) => {
  return rows.filter((row, index) => {
    return filter.value === row[columnIndex];
  });
};

export const filterRows = (
  filter: IFilter,
  rows: string[][],
  columnIndex: number
) => {
  let newRows: string[][] = [];
  if (columnIndex < 0) return filterValues(rows, filter.value);
  return filterRowsByColumn({
    filter: filter,
    rows: rows,
    columnIndex: columnIndex,
  });
};

export const setNewFilter = (
  filter: IFilter,
  filters: IFilter[],
  index: number
) => {
  let newFilter: IFilter[] = filters;
  if (!filter.columnKey) {
    // remove filter
    newFilter.length = 0;
    return newFilter;
  }
  if (index >= 0) {
    newFilter.splice(index, 1, filter); // replaces element on position index
  } else {
    newFilter.splice(1, 0, filter); // // Inserts at index 1
  }
  return newFilter;
};
