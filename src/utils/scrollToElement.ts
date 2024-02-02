export function scrollToElement(elementId: "footer" | "navbar") {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
}
