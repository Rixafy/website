const cache = [];

export function markdownCache($md, id, content) {
  if (!cache[id]) {
    cache[id] = $md.render(content);
  }

  return cache[id];
}
