import { Grid, GridItem } from "@chakra-ui/react";
import SheetList from "./components/SheetList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"header" "main"`,
        lg: `"header header" "main"`,
      }}
      // gridTemplateRows={"50px 1fr 30px"}
      //gridTemplateColumns={"250px 1fr"}
      // h="200px"
      // gap="1"
      // color="blackAlpha.700"
    >
      <GridItem pl="2" bg="gray.200" area={"header"}>
        Header
      </GridItem>

      <GridItem pl="2" bg="blue.200" area={"main"}>
        <SheetList />
      </GridItem>
    </Grid>
  );
}

export default App;
