export const HOME = 'home'
export const MESSAGES = 'messages'
export const NOTIFICATIONS = 'notifications'
export const AUTH = 'auth'
export const SIGNIN = 'signin'
export const SIGNUP = 'signup'
export const STATUS = 'status'

export const LINK = {
  INDEX: `/`,
  SIGNIN: `/${AUTH}/${SIGNIN}`,
  SIGNUP: `/${AUTH}/${SIGNUP}`,
  HOME: `/${HOME}`,
  NOTIFICATIONS: `/${NOTIFICATIONS}`,
  MESSAGES: `/${MESSAGES}`,
  PROFILE: (username: string) => `/${username}`,
  STATUS: (username: string, postId: string) => `/${STATUS}/${postId}`,
}

export enum BREAKPOINT {
  'BASE' = '0em',
  'SM' = '30em',
  'MD' = '48em',
  'LG' = '62em',
  'XL' = '80em',
  'XXL' = '96em',
}
