export default function createInt8TypedArray(length, position, value) {
  // Throw an error if the position is outside the bounds of the buffer
  if (position >= length) {
    throw new Error('Position outside range');
  }

  // Create a new ArrayBuffer and write the Int8 value at the specified position
  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer);
  dataView.setInt8(position, value);

  return dataView;
}
