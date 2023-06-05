export function getPath(name) {
  const serverPath = import.meta.env.VITE_SERVER_PATH;

  const httpHeader = getHeader();

  const path = httpHeader + serverPath + name;

  return path;
}

function getHeader() {
  if (import.meta.env.MODE === "development") {
    const header = "http://";
    return header;
  } else if (import.meta.env.MODE === "production") {
    // const header = "https://";
    const header = "http://";
    return header;
  }
}
