1.	//app.js  
2.	  
3.	var util = require("utils/util.js");  
4.	  
5.	App({  
6.	  onLaunch: function () {  
7.	    var that = this;  
8.	      
9.	    if (!wx.cloud) {  
10.	      console.error('请使用 2.2.3 或以上的基础库以使用云能力')  
11.	    } else {  
12.	      wx.cloud.init({  
13.	        traceUser: true,  
14.	      })  
15.	    }  
16.	  
17.	    // 获取用户 openid  
18.	    wx.cloud.callFunction({  
19.	      name: 'login',  
20.	      success: res => {  
21.	        console.log('res',res);  
22.	            console.log('login res.result.openid',res.result.openid);  
23.	            //获取到openId后进行其他操作  
24.	            // 持久化存储openId  
25.	            wx.setStorageSync('_openid',res.result.openid);  
26.	          },  
27.	          fail: err => {  
28.	            console.error('err',err);  
29.	          },  
30.	    
31.	      complete: res => {  
32.	        that.globalData.openid = res.result.openid;  
33.	      }  
34.	    })  
35.	  
36.	    // 获取用户信息  
37.	    wx.getUserInfo({  
38.	      success: function (res) {  
39.	        that.globalData.userInfo = res.userInfo  
40.	      },  
41.	      fail: function () {  
42.	        wx.switchTab({  
43.	          url: '/pages/my/index',  
44.	        })  
45.	        util.showMsg("请先授权登陆");  
46.	        wx.hideTabBar();  
47.	      }  
48.	    })  
49.	  },  
50.	  
51.	  globalData: {  
52.	    openid: null,  
53.	    userInfo: null  
54.	  }  
55.	})  
