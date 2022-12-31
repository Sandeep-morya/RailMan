import { days } from "./variables";
import { months } from "./variables";
export function getNextDay(count) {
  const today = new Date();
  today.setDate(today.getDate() + count); // even 32 is acceptable
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const formatMe = (val) => {
    return val < 10 ? `0${val}` : val;
  };
  return `${year}-${formatMe(month)}-${formatMe(day)}`;
}

export const dummyArray = (length, text) => {
  const arr = new Array(length).fill(text);
  return arr;
};

export const swichQuery = (
  query,
  e,
  setQuery,
  setRotate,
  rotate,
  direction
) => {
  setQuery({
    ...query,
    origin: query.destination,
    destination: query.origin,
  });
  e.target.style.transform = `rotate${direction}(${rotate ? 0 : 360}deg)`;
  e.target.style.transformStyle = "preserve-3d;";
  e.target.style.transition = "transform 0.5s";
  setRotate(!rotate);
};

export function getDayName(count) {
  const today = new Date();
  today.setDate(today.getDate() + count); // even 32 is acceptable
  return days[today.getDay()];
}
export function getMonthName(count) {
  const today = new Date();
  today.setDate(today.getDate() + count);
  return months[today.getMonth()];
}

export const switchBetween = (
  e,
  origin,
  destination,
  rotate,
  setOrigin,
  setDestination,
  setRotate,
  direction
) => {
  const temp = origin;
  setOrigin(destination);
  setDestination(temp);
  e.target.style.transform = `rotate${direction}(${rotate ? 0 : 360}deg)`;
  e.target.style.transformStyle = "preserve-3d;";
  e.target.style.transition = "transform 0.5s";
  setRotate(!rotate);
};
