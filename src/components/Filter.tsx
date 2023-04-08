import { Box, Button, HStack } from "@chakra-ui/react";
import { IFilter } from "../interface/filter";
import FilterLine from "./FilterLine";

interface IFilterProps {
  columns: string[];
  onFilterChange: (filters: IFilter[], action: string) => void;
}

const Filter: React.FC<IFilterProps> = ({ columns, onFilterChange }) => {
  return (
    <>
      <Box boxSize="35%">
        <HStack padding={"10px"}>
          <Button
            width="170px"
            type="submit"
            bg={"blue.500"}
            onClick={() => onFilterChange([], "apply")}
          >
            Apply Filters
          </Button>
          <Button
            width="170px"
            type="submit"
            bg={"blue.500"}
            onClick={() => onFilterChange([], "remove")}
          >
            Remove Filters
          </Button>
        </HStack>
      </Box>
      <FilterLine columns={columns} onFilterChange={onFilterChange} />
    </>
  );
};

export default Filter;
