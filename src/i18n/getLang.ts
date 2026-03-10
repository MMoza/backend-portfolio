export function getLangFromUrl(url: URL) {
  const pathname = url.pathname;
  
  // Si empieza con /es, es español
  if (pathname.startsWith("/es/") || pathname === "/es") {
    return "es";
  }

  return "en";
}

export function getPreferredLang(): "en" | "es" {
  if (typeof localStorage !== "undefined") {
    const saved = localStorage.getItem("lang");
    if (saved === "es") return "es";
  }
  return "en";
}