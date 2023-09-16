const isPrimitive = (element) => !(Object(element) === element);

export const deepStrictEqual = (obj_1, obj_2) => {
  if (isPrimitive(obj_1) && isPrimitive(obj_2)) {
    return Object.is(obj_1, obj_2);
  }

  if (Reflect.ownKeys(obj_1).length !== Reflect.ownKeys(obj_2).length) {
    return false;
  }

  return Reflect.ownKeys(obj_1).every((obj_1_key) => {
    return Reflect.has(obj_2, obj_1_key)
      ? deepStrictEqual(obj_2[obj_1_key], obj_1[obj_1_key])
      : false;
  });
};
