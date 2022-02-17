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
56.	//app.js  
57.	  
58.	var util = require("utils/util.js");  
59.	  
60.	App({  
61.	  onLaunch: function () {  
62.	    var that = this;  
63.	      
64.	    if (!wx.cloud) {  
65.	      console.error('请使用 2.2.3 或以上的基础库以使用云能力')  
66.	    } else {  
67.	      wx.cloud.init({  
68.	        traceUser: true,  
69.	      })  
70.	    }  
71.	  
72.	    // 获取用户 openid  
73.	    wx.cloud.callFunction({  
74.	      name: 'login',  
75.	      success: res => {  
76.	        console.log('res',res);  
77.	            console.log('login res.result.openid',res.result.openid);  
78.	            //获取到openId后进行其他操作  
79.	            // 持久化存储openId  
80.	            wx.setStorageSync('_openid',res.result.openid);  
81.	          },  
82.	          fail: err => {  
83.	            console.error('err',err);  
84.	          },  
85.	    
86.	      complete: res => {  
87.	        that.globalData.openid = res.result.openid;  
88.	      }  
89.	    })  
90.	  
91.	    // 获取用户信息  
92.	    wx.getUserInfo({  
93.	      success: function (res) {  
94.	        that.globalData.userInfo = res.userInfo  
95.	      },  
96.	      fail: function () {  
97.	        wx.switchTab({  
98.	          url: '/pages/my/index',  
99.	        })  
100.	        util.showMsg("请先授权登陆");  
101.	        wx.hideTabBar();  
102.	      }  
103.	    })  
104.	  },  
105.	  
106.	  globalData: {  
107.	    openid: null,  
108.	    userInfo: null  
109.	  }  
110.	})  
