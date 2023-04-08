import React, { useState } from "react";
import { BsChevronDown, BsPlusCircle } from "react-icons/bs";
import { IFilter } from "../interface/filter";
import { Box, Button, HStack, Input, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

interface IFilterLineProps {
  //filters: Filter[];
  columns: string[];
  onFilterChange: (filters: IFilter[], action: string) => void;
}
const FilterLine: React.FC<IFilterLineProps> = ({ columns, onFilterChange }) => {
  const [filters, setFilters] = useState<IFilter[]>([{ columnKey: "", value: "" }]);
  const [column, setColumn] = useState("");
  const [value, setValue] = useState("");

  function handleAddColumnFilter(column: string) {
    //setFilters((prevFilters) => [...prevFilters, { columnKey: column, value: "" }]);
    setColumn(column);
    console.log(column);
  }
  function handleValueInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setValue(value);
    //setFilters((prevFilters) => [...prevFilters, { columnKey: column.key, value: "" }]);
    console.log("InputChange", value);
  }
  const handleAddFilter = () => {
    onFilterChange([{ columnKey: column, value: value }], "add");
  };

  return (
    <Box boxSize="40%">
      <HStack padding="10px">
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />} width="30%">
            {column || "column..."}
          </MenuButton>
          <MenuList>
            {columns.map((column) => (
              <MenuItem key={column} onClick={() => handleAddColumnFilter(column)}>
                {column}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <Input
          value={value}
          variant="outline"
          placeholder="filter value"
          size="10%"
          padding="10px"
          onChange={(event) => handleValueInputChange(event)}
        />
        <Button onClick={handleAddFilter} rightIcon={<BsPlusCircle />}>
          Add filter
        </Button>
      </HStack>
    </Box>
  );
};

export default FilterLine;
