export const PxtoRem = () => {
  let w = document.documentElement.clientWidth
  const size = w / 512

  document.documentElement.style.fontSize = size
  window.addEventListener('resize',PxtoRem)
  document.addEventListener('DOMContentLoaded',PxtoRem)
}

export const RemtoPx = (size) => {
  const rem = size/ 512
  return rem
}