/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  let newObject = {};
  for (const objectKey in obj) {
    if (!fields.includes(objectKey)) {
      newObject[objectKey] = objectKey;
    }
  }
  return newObject;
};
