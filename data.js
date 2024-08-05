export const API_KEY = 'AIzaSyApg4PiDR0c08mZKRGFjZN6RROF5PFH5nk';

export const value_conveter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  }
  else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  }
  else {
    return value;
  }
}