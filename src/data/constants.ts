export const COLORS = {
}

export const BREAKPOINT_SIZES = {

}

export const BREAKPOINT = {

}

export const READING_WIDTH = 0;
export const EXTRA_WIDE_WIDTH = 0;

const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i
const userAgent =
  typeof window !== 'undefined' ? window.navigator.userAgent
    : 'node'
export const IS_MOBILE_USER_AGENT = mobileRegex.test(userAgent)

export const Z_INDICES = {

}