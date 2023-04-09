// This component uses FilterLine
// import { Box, Button, HStack, List, ListItem } from "@chakra-ui/react";
// import { IFilter } from "../interface/filter";
// import FilterLine from "./FilterLine";

// interface IFilterProps {
//   filters: IFilter[];
//   columns: string[];
//   onFilterChange: (filters: IFilter[], action: string) => void;
// }

// const Filter: React.FC<IFilterProps> = ({ filters, columns, onFilterChange }) => {
//   let lineIdx = 0;
//   return (
//     <>
//       <Box boxSize="35%">
//         <HStack padding={"10px"}>
//           <Button
//             width="170px"
//             type="submit"
//             bg={"blue.500"}
//             onClick={() => onFilterChange([], "apply")}
//           >
//             Apply Filters
//           </Button>
//           <Button
//             width="170px"
//             type="submit"
//             bg={"blue.500"}
//             onClick={() => onFilterChange([], "remove")}
//           >
//             Remove Filters
//           </Button>
//         </HStack>
//       </Box>
//       <List>
//         {filters.map((filter) => (
//           <ListItem key={lineIdx++}>
//             <FilterLine filter={filter} columns={columns} onFilterChange={onFilterChange} />
//           </ListItem>
//         ))}
//       </List>
//     </>
//   );
// };

// export default Filter;
