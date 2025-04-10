
// src/utils.js or src/utils/getImageUrl.js
export function getImageUrl(path) {
  return new URL(`../assets/${path}`, import.meta.url).href;
}
