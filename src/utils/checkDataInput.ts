export function checkData(data: string | object | undefined): boolean {
  return typeof data !== "string" || data.length === 0;
}
