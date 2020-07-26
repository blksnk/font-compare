import { v4 as createId } from 'uuid';
import { objToPairs } from '@/helpers/data';
import {
  capitalize,
  splitCamelCase,
  splitDashes,
  splitSpaces,
  concatString,
  camelToKebab,
} from '@/helpers/string';

function matchFileType(name) {
  switch (name.split('.')[1]) {
    case 'otf':
      return 'opentype';
    case 'ttf':
      return 'truetype';
    case 'woff':
      return 'woff';
    case 'woff2':
      return 'woff2';
    case 'eot':
      return 'eot';
    default:
      return null;
  }
}

export function formatFontTitle(fileName) {
  let words = splitDashes(splitCamelCase(fileName));
  words = splitSpaces(words).map((word) => capitalize(word));
  return concatString(words);
}

export function formatFont(file) {
  const title = formatFontTitle(file.name.split('.')[0]);
  const fileType = matchFileType(file.name);
  const id = createId();

  return {
    file,
    title,
    fileType,
    id,
  };
}

export async function createFontFace(font) {
  let ff;

  try {
    const data = await font.file.arrayBuffer();
    ff = new FontFace(`font_${font.id}`, data);
  } catch (e) {
    console.error(e);
  }
  return ff;
}

export async function registerFont(font) {
  await font.fontFace.load();
  document.fonts.add(font.fontFace);
}

export async function generateFont(file) {
  const font = formatFont(file);
  const fontFace = await createFontFace(font);
  return {
    ...font,
    fontFace,
  };
}

export function createStyleString(style) {
  // map obj to array to string
  return objToPairs(style)
    .map(([key, val]) => {
      let cssVal;
      if (typeof val === 'number') {
        cssVal = `${val}px`;
      } else {
        cssVal = camelToKebab(val);
      }
      return `${camelToKebab(key)}: ${cssVal}`;
    })
    .join('; ');
}

export function sortByTitle(list) {
  return Object.fromEntries(
    objToPairs(list).sort((a, b) => {
      if (a[1].title < b[1].title) {
        return -1;
      }
      if (a[1].title > b[1].title) {
        return 1;
      }
      return 0;
    })
  );
}

export function checkUnique(font, stored) {
  let bool = true;
  Object.keys(stored).forEach((key) => {
    if (font.title === stored[key].title) {
      bool = false;
    }
  });
  return bool;
}
