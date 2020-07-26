export function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}

export function splitCamelCase(s) {
  return s.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
}

export function splitDashes(s) {
  return s.replace(/-/g, ' ');
}

export function splitSpaces(s) {
  return s.split(' ');
}

export function concatString(s) {
  return s.join(' ');
}

export function camelToKebab(s) {
  return splitSpaces(splitCamelCase(s))
    .map((word) => word.toLowerCase())
    .join('-');
}

export function presetText(choice) {
  const sentences = [
    'Cillum qui quis adipisicing amet.',
    'Est ut ut sunt qui amet dolor voluptate id cupidatat irure ea proident ad. Lorem ipsum ex mollit labore fugiat eu aute nulla in dolore laborum tempor in in ut eiusmod nostrud irure. Lorem ipsum duis ut.',
    'Elit exercitation consequat qui consequat eu cupidatat consectetur enim.',
    'Reprehenderit dolore magna mollit eu ullamco labore in est minim sed id ut in nulla esse veniam proident.',
    'Consectetur amet.',
    'The quick brown fox jumps over the lazy dog.',
  ];
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  return {
    alphabet,
    numbers,
    sentence: sentences[Math.floor(Math.random() * (sentences.length - 1))],
  }[choice];
}
