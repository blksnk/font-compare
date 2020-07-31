export function objToPairs(obj) {
  return Object.keys(obj).map((key) => [key, obj[key]]);
}

export function mapFilledValues(obj) {
  return Object.fromEntries(
    objToPairs(obj).filter(
      (pair) => pair[1] !== null && pair[1] !== undefined
    )
  );
}

export async function urlToFile(url, name) {
  let file;
  try {
    const res = await window.fetch(url, {
      method: 'GET',
      mode: 'cors',
    });
    const blob = await res.blob();
    file = new File([blob], `${name}.${blob.type.split('/')[1]}`);
  } catch (e) {
    console.error(e);
  }
  if (file) {
    return file;
  }
  return null;
}

export function shiftArrayPosition(arr, oldIndex, newIndex) {
  const copy = arr;
  const movingEl = arr[oldIndex];
  const oldEl = arr[newIndex];
  copy[newIndex] = movingEl;
  copy[oldIndex] = oldEl;

  return copy;
}
