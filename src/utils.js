const debounce = (callback, delay = 100) => {
  let timeoutId
  return () => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(callback, delay)
  }
}

const getViewDimensions = () => ({
  width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), 
  height: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
})

export {
  debounce,
  getViewDimensions
}