import React, { useRef, useState } from "react";
import { BsChevronDown, BsPlusCircle } from "react-icons/bs";
import { IFilter } from "../interface/filter";
import { Box, Button, HStack, Input, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

interface IFilterLineProps {
  filter: IFilter;
  columns: string[];
  onFilterChange: (filters: IFilter[], action: string) => void;
}
const FilterLine: React.FC<IFilterLineProps> = ({ filter, columns, onFilterChange }) => {
  const [column, setColumn] = useState("");
  const [value, setValue] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  function handleAddColumnFilter(column: string) {
    setColumn(column);
    console.log(column);
  }
  function handleValueInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setValue(value);
    console.log("InputChange", value);
  }
  const handleFilterLine = (action: string) => {
    const filter: IFilter = {
      columnKey: column,
      value: value,
      add: column && value ? false : true,
    };
    onFilterChange([filter], action);
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
                {column || filter.columnKey}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <Input
          //   value={filter.value}
          variant="outline"
          placeholder="filter value"
          size="10%"
          padding="10px"
          borderRadius={10}
          onChange={(event) => handleValueInputChange(event)}
        />
        {filter.add === false ? (
          <Button
            width="170px"
            type="button"
            colorScheme="orange"
            onClick={() => handleFilterLine("remove")}
          >
            Remove
          </Button>
        ) : (
          <Button
            width="170px"
            type="button"
            colorScheme="teal"
            onClick={() => handleFilterLine("add")}
          >
            Add line
          </Button>
        )}
      </HStack>
    </Box>
  );
};

export default FilterLine;
