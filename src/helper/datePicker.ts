export const FormatDate =(dateString: string)=> {
  const date = new Date(dateString);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Note: Month is zero-based, so we add 1
  const year = date.getFullYear().toString();

  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
}