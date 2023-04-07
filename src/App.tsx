import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
//import "./App.css";
import SheetList from "./components/SheetList";
import Header from "./components/Header";
import FilterForm from "./components/FilterForm";

function App() {
  return (
    <>
      <Box padding={2}>
        <Header />
        <SheetList />
      </Box>
    </>
    // <Grid
    //   templateAreas={{
    //     base: `"header" "main"`,
    //     lg: `"header header" "main"`,
    //   }}
    //   //gridTemplateRows={"50px 1fr 30px"}
    //   //gridTemplateColumns={"550px 1fr"}
    //   // h="200px"
    //   gap="1"
    //   // color="blackAlpha.700"
    // >
    //   <GridItem pl="2" bg="gray.200" area={"header"}>
    //     <Flex>
    //       <Header />
    //     </Flex>
    //   </GridItem>

    //   <GridItem pl="2" bg="blue.200" area={"main"}>
    //     <SheetList />
    //   </GridItem>
    // </Grid>
  );
}

export default App;
