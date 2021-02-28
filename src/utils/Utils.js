const Utils = {
  isLongerArray(arr, threshold) {
    return Array.isArray(arr) && Number.isInteger(threshold) && arr.length > threshold;
  },
  getDayStr(millis) {
    return new Date(millis).toDateString().substring(0, 3);
  },
  getDateStr(millis) {
    return new Date(millis).toDateString().substring(4, 10);
  }
}

export default Utils;
