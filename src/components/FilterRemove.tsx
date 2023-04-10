import { Button } from "@chakra-ui/react";
import { IFilter } from "../interface/filter";

interface IFilterRemoveProps {
  onPress: (filter: IFilter, column: string) => void;
}

const FilterRemove: React.FC<IFilterRemoveProps> = ({ onPress }) => {
  const handleButtonClick = () => {
    console.log("Remove Filter pressed");
    onPress({ columnKey: "", value: "" }, "");
  };

  return (
    <Button colorScheme="orange" variant="outline" onClick={handleButtonClick}>
      Clear filters
    </Button>
  );
};

export default FilterRemove;
