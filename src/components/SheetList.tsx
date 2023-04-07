import React from "react";
import useSheets from "../hooks/useSheet";
import { Text } from "@chakra-ui/react";

const SheetList = () => {
  const { entries, error, isLoading } = useSheets();

  return (
    <>
      <Text>{error ? error : ""}</Text>
    </>
  );
};

export default SheetList;
