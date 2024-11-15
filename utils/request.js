/**
 * 封装网络请求
 * @param {string} url - 请求的 URL
 * @param {('GET'|'POST')} method - 请求方法
 * @param {string|object|ArrayBuffer} data - 请求数据
 */
function request(url, method, data) {
  wx.showLoading({ title: '加载数据..', mask: true });

  const promise = new Promise((resolve, reject) => {
      wx.request({
          url: url,
          method: method,
          data: data,
          header: {
              'Content-Type': 'application/x-www-form-urlencoded'
          },
          success(res) {
              resolve(res);
          },
          fail(err) {
              reject(err);
          },
          complete() {
              wx.hideLoading();
          }
      });
  });

  return promise;
}

module.exports = request;
