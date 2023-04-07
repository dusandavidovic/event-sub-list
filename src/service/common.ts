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

function filterValues(values: string[][], filter: string): string[][] {
  return values.filter((row) => row.some((cell) => cell.includes(filter)));
}

function sortByColumn(values: string[][], columnIndex: number): string[][] {
  return values.sort((a, b) => a[columnIndex].localeCompare(b[columnIndex]));
}
