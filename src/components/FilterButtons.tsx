import React, { useState } from "react";
import { MdArrowDropDown, MdClear } from "react-icons/md";
import { Box, Button, HStack, Select } from "@chakra-ui/react";

import { IFilter } from "../interface/filter";
import { getSeries, getSkills } from "../service/filterData";
import { IKeyValuePair } from "../config/filters";

interface IFilterButtonsProps {
  events?: IKeyValuePair[];
  onFilterChange?: (filter: IFilter, column: string) => void;
}

type filterColumns = {
  Series: string;
  Event: string;
  Task: string;
};

const FilterButtons: React.FC<IFilterButtonsProps> = ({
  events,
  onFilterChange,
}) => {
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

  const handleReset = () => {
    setSelect({ Series: "", Event: "", Task: "" });
    if (onFilterChange) onFilterChange({ columnKey: "", value: "" }, "");
  };

  return (
    <>
      <Box boxSize="60%">
        <HStack padding="10px">
          <Select
            borderColor="blue"
            onChange={(event) => handleSelect(event, "Series")}
            variant="outline"
            value={select.Series || ""}
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
            value={select.Event || ""}
            onChange={(event) => handleSelect(event, "Event")}
            icon={<MdArrowDropDown />}
          >
            {events &&
              events.map((event) => (
                <option key={event.key} value={event.value}>
                  {event.value}
                </option>
              ))}
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
          <Button
            leftIcon={<MdClear />}
            marginLeft="20px"
            size="lg"
            width="400px"
            height="40px"
            colorScheme="orange"
            variant="outline"
            onClick={handleReset}
          >
            Clear filters
          </Button>
        </HStack>
      </Box>
    </>
  );
};

export default FilterButtons;
