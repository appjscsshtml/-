var app = getApp()
Page({
  data: {

    // 屏幕可用宽高
    windowWidth: wx.getSystemInfoSync().windowWidth,
    windowHeight: wx.getSystemInfoSync().screenHeight,
    imgUrls: [
      // 'http://xiaolupic.eacase.cn/images/share/share1.png',
      // '../../images/parents.png',
      // 'http://xiaolupic.eacase.cn/images/share/frendship.png',
      // 'http://xiaolupic.eacase.cn/images/share/love.png',
      'https://www.baidu.com/img/bd_logo1.png',
    ],
    swiperIndex: 0,
    /** 
    * 页面配置 
    */
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
    heights: 'heights',
  },
  onLoad: function (e) {
    var that = this;
    var imgUrls = this.data.imgUrls
    wx.getImageInfo({
      src: imgUrls[0],//服务器返回的带参数的小程序码地址
      success: function (res) {
        //res.path是网络图片的本地地址
        let qrCodePath = res.path;
        that.setData({
          localImageUrl: qrCodePath
          
        })
        console.log(res.path)
      },
      fail: function (res) {
        //失败回调
        console.log(res)
      }
    });


    // console.log(e)
    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight,
        });
      }
    });
  },

  //先制作一个canvas标签，再保存成图片
  onSaveImg: function () {


    // 11111111111111111111
    if (this.data.currentTab==0){
      console.log(0)
      const ctx = wx.createCanvasContext('myCanvas');         //看回wxml里的canvas标签，这个的myCanvas要和标签里的canvas-id一致

      ctx.clearRect(0, 0, 644, 966);
      ctx.drawImage(this.data.localImageUrl, 0, 0, 646, 966);//背景
      ctx.drawImage("http://xiaolupic.eacase.cn/images/share/head_01_03.png", 10, 10, 80, 100)//背景
      ctx.drawImage("http://xiaolupic.eacase.cn/images/navs2.png", 15, 37, 70, 70)//头像
      ctx.drawImage("http://xiaolupic.eacase.cn/images/share/ma_07.png", 270, 500, 90, 90)
      // // ctx.drawImage("http://xiaolupic.eacase.cn/images/share/share1.png" + this.data.tipsImgId + ".png", 79, 291 - 60, 492, 244);
      ctx.setFillStyle("#fff");
      ctx.setFontSize(13);
      ctx.fillText("亲爱的", 14, 140);
      ctx.setTextAlign("center");
      ctx.setTextAlign("left");
      ctx.setFillStyle("black");
      ctx.setFontSize(18);
      ctx.setFontSize(22);
      var self = this;
      ctx.draw(true, setTimeout(function () {     //延迟100毫秒 是为了解决在android生成时有时图片跑偏的可能
        wx.canvasToTempFilePath({
          x: 0,
          y: 0,
          width: 646,
          height: 966,
          destWidth: 646,
          destHeight: 966,
          canvasId: 'myCanvas',
          success: function (res) {
            self.data.savedImgUrl = res.tempFilePath;
            self.saveImageToPhoto();
          }
        })
      }, 100))

    // 22222222222222222222222222
    } else if (this.data.currentTab == 1){
      const ctx = wx.createCanvasContext('myCanvas');       

      ctx.clearRect(0, 0, 644, 966);
      ctx.drawImage("https://www.baidu.com/img/bd_logo1.png", 0, 0, 646, 966);//背景
      ctx.drawImage("http://xiaolupic.eacase.cn/images/share/head_01_03.png", 10, 10, 80, 100)//背景
      ctx.drawImage("http://xiaolupic.eacase.cn/images/navs2.png", 15, 37, 70, 70)//头像
      ctx.drawImage("http://xiaolupic.eacase.cn/images/share/ma_07.png", 270, 500, 90, 90)
      // // ctx.drawImage("http://xiaolupic.eacase.cn/images/share/share1.png" + this.data.tipsImgId + ".png", 79, 291 - 60, 492, 244);
      ctx.setFillStyle("#000");
      ctx.setFontSize(13);
      ctx.fillText("亲爱的", 14, 140);
      ctx.setTextAlign("center");
      ctx.setTextAlign("left");
      ctx.setFillStyle("black");

      var self = this;
      ctx.draw(true, setTimeout(function () {     //延迟100毫秒 是为了解决在android生成时有时图片跑偏的可能
        wx.canvasToTempFilePath({
          x: 0,
          y: 0,
          width: 646,
          height: 966,
          destWidth: 646,
          destHeight: 966,
          canvasId: 'myCanvas',
          success: function (res) {
            self.data.savedImgUrl = res.tempFilePath;
            self.saveImageToPhoto();
          }
        })
      }, 100))
      console.log(1)

      // 333333333333333333333333
    } else if (this.data.currentTab == 2) {
      const ctx = wx.createCanvasContext('myCanvas');         //看回wxml里的canvas标签，这个的myCanvas要和标签里的canvas-id一致

      ctx.clearRect(0, 0, 644, 966);
      ctx.drawImage("https://www.baidu.com/img/bd_logo1.png", 0, 0, 646, 966);//背景
      ctx.drawImage("http://xiaolupic.eacase.cn/images/share/head_01_03.png", 10, 10, 80, 100)//背景
      ctx.drawImage("http://xiaolupic.eacase.cn/images/navs2.png", 15, 37, 70, 70)//头像
      ctx.drawImage("http://xiaolupic.eacase.cn/images/share/ma_07.png", 270, 500, 90, 90)
      // // ctx.drawImage("http://xiaolupic.eacase.cn/images/share/share1.png" + this.data.tipsImgId + ".png", 79, 291 - 60, 492, 244);
      ctx.setFillStyle("#fff");
      ctx.setFontSize(13);
      ctx.fillText("乌尼日琪琪格", 6, 140);
      ctx.setTextAlign("center");
      // ctx.setTextAlign("left");
      ctx.setFillStyle("black");
      var self = this;
      ctx.draw(true, setTimeout(function () {     //延迟100毫秒 是为了解决在android生成时有时图片跑偏的可能
        wx.canvasToTempFilePath({
          x: 0,
          y: 0,
          width: 646,
          height: 966,
          destWidth: 646,
          destHeight: 966,
          canvasId: 'myCanvas',
          success: function (res) {
            self.data.savedImgUrl = res.tempFilePath;
            self.saveImageToPhoto();
          }
        })
      }, 100))
      console.log(2)
      // 444444444444444444444444444444444444444
    } else if (this.data.currentTab == 3) {
      const ctx = wx.createCanvasContext('myCanvas');         //看回wxml里的canvas标签，这个的myCanvas要和标签里的canvas-id一致

      ctx.clearRect(0, 0, 644, 966);
      ctx.drawImage("https://www.baidu.com/img/bd_logo1.png", 0, 0, 646, 966);//背景
      ctx.drawImage("http://xiaolupic.eacase.cn/images/share/head_01_03.png", 10, 10, 80, 100)//背景
      ctx.drawImage("http://xiaolupic.eacase.cn/images/navs2.png", 15, 37, 70, 70)//头像
      ctx.drawImage("http://xiaolupic.eacase.cn/images/share/ma_07.png", 270, 500, 90, 90)
      // // ctx.drawImage("http://xiaolupic.eacase.cn/images/share/share1.png" + this.data.tipsImgId + ".png", 79, 291 - 60, 492, 244);
      ctx.setFillStyle("#000");
      ctx.setFontSize(13);
      ctx.fillText("亲爱的", 14, 140);
      ctx.setTextAlign("center");
      ctx.setTextAlign("left");
      ctx.setFillStyle("black");
      ctx.setFontSize(18);
      ctx.setFontSize(22);
      var self = this;
      ctx.draw(true, setTimeout(function () {     //延迟100毫秒 是为了解决在android生成时有时图片跑偏的可能
        wx.canvasToTempFilePath({
          x: 0,
          y: 0,
          width: 646,
          height: 966,
          destWidth: 646,
          destHeight: 966,
          canvasId: 'myCanvas',
          success: function (res) {
            self.data.savedImgUrl = res.tempFilePath;
            self.saveImageToPhoto();
          }
        })
      }, 100))
      console.log(3)
    }

    

  },
  //保存图片到相册
  saveImageToPhoto: function () {
    if (this.data.savedImgUrl != "") {
      wx.saveImageToPhotosAlbum({
        filePath: this.data.savedImgUrl,
        success: function () {
          wx.showModal({
            title: '保存图片成功',
            content: '',
            showCancel: false
          });
        },
        fail: function (res) {
          console.log(res);
          if (res.errMsg == "saveImageToPhotosAlbum:fail cancel") {
            wx.showModal({
              title: '保存图片失败',
              content: '您已取消保存图片到相册！',
              showCancel: false
            });
          } else {
            wx.showModal({
              title: '提示',
              content: '保存图片失败，您可以点击确定设置获取相册权限后再尝试保存！',
              complete: function (res) {
                console.log(res);
                if (res.confirm) {
                  wx.openSetting({})      //打开小程序设置页面，可以设置权限
                } else {
                  wx.showModal({
                    title: '保存图片失败',
                    content: '您已取消保存图片到相册！',
                    showCancel: false
                  });
                }
              }
            });
          }
        }
      })
    }
  },

  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      var heights = 158 * 2;
      console.log(heights);
      that.setData({
        heights: heights,
      })
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  // 保存图片到本地相册
  save_img:function(){



  }



})
