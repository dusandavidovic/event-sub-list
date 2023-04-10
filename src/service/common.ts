export function toCamelCase(input: string): string {
  return input
    .replace(/[-_]+/g, " ")
    .replace(/[^\w\s]/g, "")
    .replace(/\s+(.)/g, (_, match) => match.toUpperCase())
    .replace(/\s/g, "")
    .replace(/^(.)/, (_, match) => match.toLowerCase());
}

function toPascalCase(input: string): string {
  return input
    .replace(/[-_]+/g, " ")
    .replace(/[^\w\s]/g, "")
    .replace(/\s+(.)/g, (_, match) => match.toUpperCase())
    .replace(/\s/g, "")
    .replace(/^(.)/, (_, match) => match.toUpperCase());
}

export function filterValues(values: string[][], filter: string): string[][] {
  const aaa = values.filter((row) => row.some((cell) => cell.includes(filter)));
  return aaa;
}

export function sortByColumn(
  values: string[][],
  columnIndex: number
): string[][] {
  return values.sort((a, b) => a[columnIndex].localeCompare(b[columnIndex]));
}

export function removeColumns(
  matrix: string[][],
  hiddenColumns: { [key: number]: string }
): string[][] {
  const columnsToRemove = Object.keys(hiddenColumns).map(Number);
  const newMatrix = matrix.map((row) =>
    row.filter((_, index) => !columnsToRemove.includes(index))
  );
  return newMatrix;
}

export function removeColumnsFromArray(
  data: string[],
  hiddenColumns: Record<number, string>
): string[] {
  return data.filter((_, index) => !hiddenColumns[index]);
}
