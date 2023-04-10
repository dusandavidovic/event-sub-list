import { Button } from "@chakra-ui/react";

const FilterRemove = () => {
  const handleButtonClick = () => {
    console.log("Remove Filter pressed");
  };

  return (
    <Button colorScheme="orange" variant="outline" onClick={handleButtonClick}>
      Remove filter
    </Button>
  );
};

export default FilterRemove;
