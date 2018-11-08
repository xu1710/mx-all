// pages/index/calculator/cal.js

var ce = function(a, x, c) {
  var data;
  a = parseFloat(a);
  c = parseFloat(c);
  switch (x) {
    case "/":
      if (c == 0) {
        data = 0;
      } else {
        data = a / c;
      }
      break;
  }
  return data;
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    temp: "0",
    id1: "history",
    flag: true,
    id2: "clear",
    id4: "/",
    id5: "7",
    id6: "8",
    id7: "9",
  },

  clickButton: function(e) {
    var data = this.data.re;
    var tem = this.data.temp;
    var lastoper1 = this.data.lastoper;
    var noNumFlag = this.data.flag;
    var expr1 = this.data.expr;

    if (e.target.id >= 'num_0' && e.target.id <= 'num_9') {
      data += e.target.id.split('_')[1];

      if (e.target.id == '0' || noNumFlag) {
        data = e.target.id.split('_')[1];
      }
      noNumFlag = false;
    }
    else if(e.target.id=="back"){
      if(data.toString().length>1){

      }
    else if(0){

    }
    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})