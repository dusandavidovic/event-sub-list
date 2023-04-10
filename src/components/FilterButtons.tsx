import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { Box, HStack, Select } from "@chakra-ui/react";

import { IFilter } from "../interface/filter";
import { getSeries, getSkills } from "../service/filterData";

interface IFilterButtonsProps {
  event?: string[];
  onFilterChange?: (filter: IFilter, column: string) => void;
}

type filterColumns = {
  Series: string;
  Event: string;
  Task: string;
};
// const FilterButtons: React.FC<IFilterButtonsProps> = ({ series, skills, onFilterChange }) => {
const FilterButtons: React.FC<IFilterButtonsProps> = ({ onFilterChange }) => {
  const [select, setSelect] = useState<filterColumns>({
    Series: "",
    Event: "",
    Task: "",
  });

  const handleSelect = (
    event: React.ChangeEvent<HTMLSelectElement>,
    column: string
  ) => {
    const { value } = event.target;
    setSelect({ ...select, [column]: value });

    if (onFilterChange)
      onFilterChange({ columnKey: column, value: value }, column);
  };

  return (
    <>
      <Box boxSize="40%">
        <HStack padding="10px">
          <Select
            borderColor="blue"
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
            borderColor="blue"
            variant="outline"
            placeholder="Select event"
            icon={<MdArrowDropDown />}
          >
            <option>R1</option>
          </Select>
          <Select
            borderColor="blue"
            onChange={(event) => handleSelect(event, "Task")}
            variant="outline"
            value={select.Task || ""}
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
