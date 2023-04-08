import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Column, Filter } from "./FilterForm";
import { Button, HStack, Input, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

interface IFilterLineProps {
  //filters: Filter[];
  columns: Column[];
  //onFilterChange: (filters: Filter[]) => void;
}
const FilterLine: React.FC<IFilterLineProps> = ({ columns }) => {
  const [filters, setFilters] = useState<Filter[]>([{ columnKey: "", value: "" }]);
  const [column, setColumn] = useState("");
  const [value, setValue] = useState("");

  function handleAddColumn(column: Column) {
    setFilters((prevFilters) => [...prevFilters, { columnKey: column.key, value: "" }]);
    console.log(filters);
  }

  return (
    <HStack>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Filter
        </MenuButton>
        <MenuList>
          {columns.map((column) => (
            <MenuItem key={column.label} onClick={() => handleAddColumn(column)}>
              {column.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
      <Input placeholder="filter value" size="sm"></Input>
    </HStack>
  );
};

export default FilterLine;
