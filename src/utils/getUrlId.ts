export const getIdFromUrl = (url: string) => {
  const parsedUrl = new URL(url);
  const urlParts = parsedUrl.pathname.split("/");
  const id = urlParts[urlParts.length - 2]; 
  return id;
};
