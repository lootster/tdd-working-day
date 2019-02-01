class ParameterUtil {
  setParameter(value, defaultValue) {
    if (value === undefined) value = defaultValue;
    return value;
  }
}

module.exports = ParameterUtil;
