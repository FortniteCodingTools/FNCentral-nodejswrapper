export default (version: string): string => {
  const parsedNumber = parseFloat(version);

  if (parsedNumber && parsedNumber > 0 && parsedNumber < 100) {
    return parsedNumber.toFixed(2);
  }

  throw new Error("Invalid Version Submitted");
}
