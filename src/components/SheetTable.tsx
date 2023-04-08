import React from "react";
import { Text, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

interface ISheetTableProps {
  columns: string[];
  rows: string[][];
}
const SheetTable: React.FC<ISheetTableProps> = ({ columns, rows }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          {columns.map((column) => (
            <Th key={column}>{column}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row, index) => (
          <Tr key={index}>
            {row.map((cell, index) => (
              <Td key={index} style={{ whiteSpace: "nowrap", textAlign: "left" }}>
                {cell}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default SheetTable;
