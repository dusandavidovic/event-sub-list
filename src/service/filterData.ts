import { series, skills } from "../config/filters";
import { IFilter } from "../interface/filter";
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
  columns: string[];
  rows: string[][];
}

export const filterRows = ({ filter, columns, rows }: IfilterRowsProps) => {};
