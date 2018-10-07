var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = {};
  obj = Object.assign({}, Object);
  obj.key = value;
  return obj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}