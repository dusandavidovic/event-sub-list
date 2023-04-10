import { Box, HStack, Select } from "@chakra-ui/react";
import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import { IKeyValuePair } from "../config/filters";
import { IFilter } from "../interface/filter";
import { getSeries, getSkills } from "../service/filterData";

interface IFilterButtonsProps {
  event?: string[];
  onFilterChange?: (filter: IFilter, column: string) => void;
}

// const FilterButtons: React.FC<IFilterButtonsProps> = ({ series, skills, onFilterChange }) => {
const FilterButtons: React.FC<IFilterButtonsProps> = ({ onFilterChange }) => {
  const handleSelect = (
    event: React.ChangeEvent<HTMLSelectElement>,
    column: string
  ) => {
    const { value } = event.target;
    if (onFilterChange)
      onFilterChange({ columnKey: column, value: value }, column);
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
            {getSeries().map((serie) => (
              <option key={serie.key} value={serie.value}>
                {serie.value}
              </option>
            ))}
          </Select>
          <Select
            variant="outline"
            placeholder="Select event"
            icon={<MdArrowDropDown />}
          >
            <option>R1</option>
          </Select>
          <Select
            onChange={(event) => handleSelect(event, "Task")}
            variant="outline"
            placeholder="Select task"
            icon={<MdArrowDropDown />}
          >
            {getSkills().map((skill) => (
              <option key={skill.key} value={skill.value}>
                {skill.value}
              </option>
            ))}
          </Select>
        </HStack>
      </Box>
    </>
  );
};

export default FilterButtons;
