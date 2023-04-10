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
  columnIndex?: number
) => {
  let newRows: string[][] = [];
  if (!columnIndex) newRows = filterValues(rows, filter.value);
  if (columnIndex)
    newRows = filterRowsByColumn({
      filter: filter,
      rows: rows,
      columnIndex: columnIndex,
    });
  return newRows;
};
