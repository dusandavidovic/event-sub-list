import { Box, HStack, Select } from "@chakra-ui/react";
import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import { IKeyValuePair } from "../config/filters";
import { IFilter } from "../interface/filter";

// interface IFilterColumns {
//   series: string;
//   event: string;
//   skills: string;
//   //onFilterChange: (filters: IFilter[], action: string) => void;
// }

interface IFilterButtonsProps {
  series: IKeyValuePair[];
  event?: string[];
  skills: IKeyValuePair[];
  onFilterChange?: (filters: IFilter, action?: string) => void;
}

const FilterButtons: React.FC<IFilterButtonsProps> = ({ series, skills, onFilterChange }) => {
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>, column: string) => {
    const { value } = event.target;
    if (onFilterChange) onFilterChange({ columnKey: column, value: value });
  };

  return (
    <>
      <Box boxSize="40%">
        <HStack padding="10px">
          <Select
            onChange={(event) => handleSelect(event, "Series")}
            variant="outline"
            placeholder="Select series"
            icon={<MdArrowDropDown />}
          >
            {series.map((serie) => (
              <option key={serie.key} value={serie.value}>
                {serie.value}
              </option>
            ))}
          </Select>
          <Select variant="outline" placeholder="Select event" icon={<MdArrowDropDown />}>
            <option>R1</option>
          </Select>
          <Select variant="outline" placeholder="Select task" icon={<MdArrowDropDown />}>
            <option>Driver</option>
          </Select>
        </HStack>
      </Box>
    </>
  );
};

export default FilterButtons;
