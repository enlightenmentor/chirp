export const HOME = "home";
export const MESSAGES = "messages";
export const NOTIFICATIONS = "notifications";
export const AUTH = "auth";
export const LOGIN = "login";
export const REGISTER = "register";
export const STATUS = "status";

export const LINK = {
  INDEX: `/`,
  LOGIN: `/${AUTH}/${LOGIN}`,
  REGISTER: `/${AUTH}/${REGISTER}`,
  HOME: `/${HOME}`,
  NOTIFICATIONS: `/${NOTIFICATIONS}`,
  MESSAGES: `/${MESSAGES}`,
  PROFILE: (username: string) => `/${username}`,
  STATUS: (username: string, postId: string) => `/${STATUS}/${postId}`,
};

export enum BREAKPOINT {
  "SM" = "30em",
  "MD" = "48em",
  "LG" = "62em",
  "XL" = "80em",
  "2XL" = "96em",
}
