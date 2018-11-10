// pages/index/calculator/cal.js

var save = function(e) {
  var ep = wx.getStorageSync("cal-his") || []
  ep.unshift(e);
  wx.setStorageSync('cal-his', ep);
}

var cal = function(a, x, c) {
  var data;
  a = parseFloat(a);
  c = parseFloat(c);
  switch (x) {
    case "+":
      data = a + c;
      break;
    case "-":
      data = a - c;
      break;
    case "*":
      data = a * c;
      break;
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
    flag: true,
    re: "0",
    lastoper: "+",
    id1: "history",
    id2: "clear",
    id3: "back",
    id4: "div",
    id5: "num_7",
    id6: "num_8",
    id7: "num_9",
    id8: "mul",
    id9: "num_4",
    id10: "num_5",
    id11: "num_6",
    id12: "sub",
    id13: "num_1",
    id14: "num_2",
    id15: "num_3",
    id16: "add",
    id17: "negative",
    id18: "num_0",
    id19: "dot",
    id20: "equ",
    expr: "",
  },

  clickButton: function(e) {
    var data = this.data.re;
    var tmp = this.data.temp;
    var lastoper1 = this.data.lastoper;
    var noNumFlag = this.data.flag;
    var expr1 = this.data.expr;
    var shuju = '';

    if (e.target.id >= 'num_0' && e.target.id <= 'num_9') {
      data += e.target.id.split("_")[1];
      if (this.data.re == '0' || noNumFlag) {
        data = e.target.id.split('_')[1];
      }
      shuju = data;
      noNumFlag = false;
    } else if (e.target.id == "dot") {
      if (data.toString().indexOf(".") == -1) {
        data += ".";
        shuju = data;
      }
    } else if (e.target.id == "back") {
      if (data.toString().length > 1) {
        data = data.substr(0, data.toString().length - 1);
      } else {
        data = 0;
      }
      shuju = data;
    } else {
      noNumFlag = true;
      console.log(e.target.id);
      if (e.target.id == "clear") {
        expr1 = "";
        data = 0;
        tmp = 0;
        lastoper1 = "+";
        shuju = data;
      } else if (e.target.id == "negative") {
        data = -1 * data;
        shuju = data;
      } else if (e.target.id == "history") {
        wx.navigateTo({
          url: 'history/his',
        })
      } else if (e.target.id == "div") {
        expr1 += data.toString() + "/";
        data = cal(tmp, lastoper1, data);
        shuju = data + '/';
        tmp = data;
        lastoper1 = "/";
      } else if (e.target.id == "mul") {
        expr1 += data.toString() + "*";
        data = cal(tmp, lastoper1, data);
        shuju = data + '*';
        tmp = data;
        lastoper1 = "*";
      } else if (e.target.id == "sub") {
        expr1 += data.toString() + "-";
        data = cal(tmp, lastoper1, data);
        shuju = data + '-';
        tmp = data;
        lastoper1 = "-";
      } else if (e.target.id == "add") {
        expr1 += data.toString() + "+";
        data = cal(tmp, lastoper1, data);
        shuju = data + '+';
        tmp = data;
        lastoper1 = "+";
      } else if (e.target.id == "equ") {
        expr1 += data.toString() + "=";
        data = cal(tmp, lastoper1, data);
        shuju = '=' + data;
        expr1 += data;
        save(expr1);
        expr1 = '';
        tmp = data;
        lastoper1 = "+";
      }
    }
    this.setData({
      re: shuju,
      lastoper: lastoper1,
      temp: tmp,
      flag: noNumFlag,
      expr: expr1
    })
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