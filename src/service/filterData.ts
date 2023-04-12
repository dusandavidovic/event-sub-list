import {
  CurrentDateFilter,
  IKeyValuePair,
  series,
  skills,
} from "../config/filters";
import { IFilter } from "../interface/filter";
import { filterValues } from "./common";

interface ITable {
  columns: string[];
  rows: string[][];
}

export const getSeries = () => {
  return series;
};
export const getSkills = () => {
  return skills;
};

export const getEvents = ({ columns, rows }: ITable) => {
  const events: IKeyValuePair[] = [];
  const mySet = new Set();
  const colIdx = columns.indexOf("Event");
  for (let index = 0; index < rows.length; index++) {
    const eventValue = rows[index][colIdx];
    mySet.add(eventValue);
  }
  let ii = 0;
  mySet.forEach((value) => {
    let event: IKeyValuePair = { key: ++ii, value: value as string };
    events.push(event);
  });

  return events;
};

interface IfilterRowsProps {
  filter: IFilter;
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
  if (!filter.value) {
    newFilter.splice(index, 1); //removes element index
  } else {
    if (index >= 0) {
      newFilter.splice(index, 1, filter); // replaces element on position index
    } else {
      newFilter.splice(1, 0, filter); // // Inserts at index 1
    }
  }
  return newFilter;
};

export const filterByDate = ({
  filter,
  rows,
  columnIndex,
}: IfilterRowsProps) => {
  if (!filter.value) return rows;
  // let today = new Date("2023-05-30"); // TEST;
  let today = new Date();
  return rows.filter((row) => {
    let cellDate = new Date(row[columnIndex]);
    return today <= cellDate;
  });
};
