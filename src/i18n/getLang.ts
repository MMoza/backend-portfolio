export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");

  if (lang === "es") return "es";

  return "en";
}