Page({
  jump1: function (){
    wx.navigateTo({
  url: '/pages/index/single/single',
})
  },
  jump2: function (){
    wx.showModal({  
        
      title: "",
        content: "暂时未开放",
        success: function (res) {
          if (res.confirm) {//这里是点击了确定以后
            console.log('用户点击确认')
          } else {//这里是点击了取消以后
            console.log('用户点击取消')
          }
        }  
    });
    
  },

  jump3: function (){
    wx.navigateTo({
  url: '/pages/index/srule/srule'
})
  },

  jump4: function (){
    wx.showModal({  
        
      title:  "首充送VIP6",
      success: function (res) {
        if (res.confirm) {//这里是点击了确定以后
          console.log('用户点击确认')
        } else {//这里是点击了取消以后
          console.log('用户点击取消')
        }
      }
    });
    
  },
  jump5: function (){
    wx.showModal({
    title: "暂时未开发设置，敬请等候",
    success: function (res) {
      if (res.confirm) {//这里是点击了确定以后
        console.log('用户点击确认')
      } else {//这里是点击了取消以后
        console.log('用户点击取消')
      }
    }
  })
  },
  jump6: function (){
    wx.showModal({
    title: "确认退出游戏",
    success: function (res) {
      if (res.confirm) {//这里是点击了确定以后
        console.log('用户点击确认')
      } else {//这里是点击了取消以后
        console.log('用户点击取消')
      }
    }
  })
  },


  data:{// text:"这是一个页面"
  },
  onLoad:function(options){// 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){// 页面渲染完成
  },
  onShow:function(){// 页面显示
  },
  onHide:function(){// 页面隐藏
  },
  onUnload:function(){// 页面关闭
  }
})
