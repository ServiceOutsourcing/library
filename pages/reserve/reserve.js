Page({
  data:{
    date:'2017-06-05',
    time: '13:00',
    start_time:'09:00',
    end_time:'17:00',
    start_date:'2017-06-01',
    end_date:'2017-06-10',
    hidden:false,
    nocancel:false
  },

  reserve:function(e){
    wx.showToast({
        title:'预约成功',
        icon:'success',
        success:function(){
          wx.navigateBack({
            delta: 2, // 回退前 delta(默认为1) 页面
          })
        }
    })
  },

  cancel:function(){
    this.setData({
      hidden:true
    })
  },

  confirm:function(){
    this.setData({
      nocancel:!this.data.nocancel
    })
    console.log("clicked confirm");
  },

  bindDateChange:function(e){
      this.setData({
          date:e.detail.value
      })
  },

  bindTimeChange:function(e){
    this.setData({
        time: e.detail.value
    })
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    String2
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    String3
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    String4
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    String5
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    String6
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    String7
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    String8
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})