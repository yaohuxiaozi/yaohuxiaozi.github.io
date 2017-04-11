var appid_me,timestamp_me,nonstr_me,laststring_me;
var url=encodeURIComponent(location.href.split('#')[0]);

$.ajax({
	type:'get',
	url:"http://www.zzjrly.cn/wx/jssdk.php?url="+url,
	dataType:'jsonp',
	jsonp: "callback",
	jsonpCallback:"success_jsonpCallback",
	async:false,
	success: function(data){
		appid_me=data.appId;
		timestamp_me=data.timestamp;
		nonstr_me=data.nonceStr;
		laststring_me=data.signature;
		wx.config({
			debug: false,
			appId: appid_me,
			timestamp: timestamp_me,
			nonceStr: nonstr_me,
			signature: laststring_me,
			jsApiList: [
				'checkJsApi',
				'onMenuShareTimeline',
				'onMenuShareAppMessage',
				'onMenuShareQQ',
				'onMenuShareWeibo'
			]
		});
		wx.ready(function () {

    wx.checkJsApi({
        jsApiList: [
            'getNetworkType',
            'previewImage',
            'onMenuShareTimeline',
			'onMenuShareAppMessage',
			'onMenuShareQQ',
			'onMenuShareWeibo'
        ],
        success: function (res) {
            //alert(JSON.stringify(res));
        }
    });

    wx.onMenuShareAppMessage({
        title: titile_me,
        desc: desc_me,
        link: link_me,
        imgUrl: imgUrl_me,
        dataUrl:link_me,
        success: function (res) {
            alert('已分享');
        },
        cancel: function (res) {
            alert('已取消');
        },
        fail: function (res) {
            alert(JSON.stringify(res));
        }
    });


    wx.onMenuShareTimeline({
        title: titile_me,
        desc: desc_me,
        link: link_me,
        imgUrl: imgUrl_me,
        dataUrl:link_me,
        success: function (res) {
            alert('已分享');
        },
        cancel: function (res) {
            alert('已取消');
        },
        fail: function (res) {
            alert(JSON.stringify(res));
        }
    });


    wx.onMenuShareQQ({
        title: titile_me,
        desc: desc_me,
        link: link_me,
        imgUrl: imgUrl_me,
        dataUrl:link_me,
        success: function (res) {
            alert('已分享');
        },
        cancel: function (res) {
            alert('已取消');
        },
    });

    wx.onMenuShareWeibo({
        title: titile_me,
        desc: desc_me,
        link: link_me,
        imgUrl: imgUrl_me,
        success: function (res) {
            alert('已分享');
        },
        cancel: function (res) {
            alert('已取消');
        },
        fail: function (res) {
            alert(JSON.stringify(res));
        }
    });

    /*var shareData = {
        title: titile_me,
        desc: desc_me,
        link: link_me,
        imgUrl: imgUrl_me
    };

	wx.onMenuShareAppMessage(shareData);
    wx.onMenuShareTimeline(shareData);
	wx.onMenuShareQQ(shareData);*/
});
	}
});
//alert(appid_me);
wx.error(function(res){
	alert(res.errMsg);
});
console.log(desc_me);
