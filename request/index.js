const app = getApp()
const request = (url, options) => {
  return new Promise((resolve, reject) => {
    wx.request({
      // todo 修改远程Host: url:`${app.globalData.remoteHost}${url}`
      url: `${app.globalData.host}${url}`,
      method: options.method,
      data: options.method === 'GET' ? options.data : JSON.stringify(options.data),
      header: {
        'Content-Type': 'application/json ; charset=UTF-8',
      },
      success(res) {
        if (res.data.code === 200) {
          resolve(res.data)
        } else {
          reject(res)
        }
      },
      fail(err) {
        reject(err)
      }
    })
  })
}


const upload = (url, formData, filePath) => {
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      url: `${app.globalData.host}${url}`,
      header: {
        "Content-Type": "multipart/form-data"
      },
      filePath:filePath,
      name:'file',
      formData,
      success: function (res) {
        resolve(res.data)
      },
      fail: function (err) {
        reject(err.data)
      } 
    }) 
  })
}

const get = (url, options = {}) => {
  return request(url, {
    method: 'GET',
    data: options
  })
}

const post = (url, options) => {
  return request(url, {
    method: 'POST',
    data: options
  })
}

const put = (url, options) => {
  return request(url, {
    method: 'PUT',
    data: options
  })
}
const remove = (url, options) => {
  return request(url, {
    method: 'DELETE',
    data: options
  })
}

module.exports = {
  get, post, put, remove,upload
}