import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

import { hiddenColumns } from "../interface/eventSubscription";
import { removeColumns, removeColumnsFromArray } from "../service/common";

interface ISheetTableProps {
  columns: string[];
  rows: string[][];
}
const SheetTable: React.FC<ISheetTableProps> = ({ columns, rows }) => {
  const displayColumns = removeColumnsFromArray(columns, hiddenColumns);
  const displayRows = removeColumns(rows, hiddenColumns);

  return (
    <Table>
      <Thead>
        <Tr>
          {displayColumns.map((column) => (
            <Th key={column}>{column}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {displayRows.map((row, index) => (
          <Tr key={index}>
            {row.map((cell, index) => (
              <Td
                key={index}
                style={{ whiteSpace: "nowrap", textAlign: "left" }}
              >
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
