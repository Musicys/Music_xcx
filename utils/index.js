export const setStorageSync = (key, value) => {
  if (key) {
    let setVal
    try {
      setVal = JSON.stringify(value)
    } catch (e) {
      setVal = ''
    }
    uni.setStorageSync(key, setVal)
  }
}

export const getStorageSync = (key) => {
  let data = null
  if (key) {
    const res = uni.getStorageSync(key)
    try {
      data = JSON.parse(res)
    } catch (e) {
      data = res
    }
  }
  return data
}

