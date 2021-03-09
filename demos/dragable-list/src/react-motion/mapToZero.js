
// currently used to initiate the velocity style object to 0
export default function mapToZero(obj) {
  let ret = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      ret[key] = 0;
    }
  }
  return ret;
}
