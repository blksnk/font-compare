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

export function streamToBlob(stream, mimeType) {
  if (mimeType != null && typeof mimeType !== 'string') {
    throw new Error('Invalid mimetype, expected string.');
  }
  return new Promise((resolve, reject) => {
    const chunks = [];
    stream
      .on('data', (chunk) => chunks.push(chunk))
      .once('end', () => {
        resolve(
          mimeType != null
            ? new Blob(chunks, { type: mimeType })
            : new Blob(chunks)
        );
      })
      .once('error', reject);
  });
}
