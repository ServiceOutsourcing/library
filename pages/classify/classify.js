Page({
  data:{
    url: '/pages/searchResult/searchResult',
    src: '/img/left_crow.png',
    array:[{
        title:'哲学',
    },{
        title:'经济学',
    },{
        title:'法学',
    },{
        title:'教育学',
    },{
        title:'文学',
    },{
        title:'历史学',
    },{
        title:'理学',
    },{
        title:'工学'
    },{
        title:'农学',
    },{ 
        title:'医学',
    },{
        title:'军事学',
    },{
        title:'管理学',
    }]
  },

  toast:function(e){
    wx.navigateTo({
      url: '/pages/searchResult/searchResult',
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