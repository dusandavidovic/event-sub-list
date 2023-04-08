import React, { useState } from "react";
import { BsChevronDown, BsPlusCircle } from "react-icons/bs";
import { IFilter } from "../interface/filter";
import { Box, Button, HStack, Input, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

interface IFilterLineProps {
  //filters: Filter[];
  columns: string[];
  //onFilterChange: (filters: Filter[]) => void;
}
const FilterLine: React.FC<IFilterLineProps> = ({ columns }) => {
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
    //setFilters((prevFilters) => [...prevFilters, { columnKey: column.key, value: "" }]);
    console.log("InputChange", value);
  }

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
          variant="outline"
          placeholder="filter value"
          size="20%"
          padding="10px"
          onChange={(event) => handleValueInputChange(event)}
        ></Input>
        <Button rightIcon={<BsPlusCircle />}>Add filter</Button>
      </HStack>
    </Box>
  );
};

export default FilterLine;
