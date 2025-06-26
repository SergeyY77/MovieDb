export function debounce(func, delay) {
  let timer;

  return (...args) =>
    new Promise((resolve) => {
      if (timer) clearTimeout(timer);

      timer = setTimeout(async () => {
        const result = await func(...args);
        resolve(result);
      }, delay);
    });
}
