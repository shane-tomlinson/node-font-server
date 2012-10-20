exports.extend = function(toExtend) {
  var mixins = [].slice.call(arguments, 1);
  for(var index=0, mixin; mixin=mixins[index]; ++index) {
    for(var key in mixin) {
      var type = Object.prototype.toString.call(mixin[key]);
      if(type === "[object Object]") {
        toExtend[key] = toExtend[key] || {};
        extend(toExtend[key], mixin[key]);
      }
      else {
        toExtend[key] = mixin[key];
      }
    }
  }
  return toExtend;
};

exports.parseBool = function(value) {
  switch(value) {
    case 'true':
    case 'TRUE':
    case '1':
    case true:
      return true;
      break;
    case 'false':
    case 'FALSE':
    case '0':
    case false:
      return false;
      break;
    default:
      throw new TypeError("invalid boolean value: " + value);
      break;
  }
};

