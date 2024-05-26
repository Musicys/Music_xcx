import api from "./rquest.js"
import { setStorageSync,getStorageSync } from "../utils/index.js"
// 音乐列表
export const muiscapi=(str)=>{
	if(str)
	{
		// 音乐分类
		return api.requst({
			url:`/wxApi/musicListByType?type=${str}`
		})
		
	}
	else
	{
		
		// 音乐列表
		return api.requst(
		{
			url:"/wxApi/musicList"
		})
	}
	
}



// 用户注册
export const userapi=(obj)=>{
	return api.requst({
		url:"/wxApi/insertUser",
		method:"POST",
		data:{
			...obj
		}
	})
} 
 

// 用户信息
export const userxx=(openId)=>{
	return api.requst({
		url:"/wxApi/getUserInfoByOpenId"+"?openId="+openId,
		
	})
}
// 获取视频
export const usersp=()=>{
	return api.requst({
		url:"/wxApi/videoList"
	})
}


// 判断用户是否购买
export const usermusicis=(userid,musicid)=>{
	return api.requst({
		url:`/wxApi/IsPurchase?openId=${userid}&musicId=${musicid}`
	})
}
export const usershopmusic=(obj)=>{
	return api.requst({
		url:"/wxApi/Purchase",
		method:"post",
		
		data:{
			...obj
			  // "purchase_id":2,
			  //   "openId":"2",
			  //   "musicId":"2"
		}
	})
}
// 根据音乐命搜索
export const musicpalycx=(test)=>{
	return api.requst({
		url:`/wxApi/SearchByMusicName?musicName=${test}`
	})
}

// 根据视频命搜索
export const namespss=(test)=>{
	return api.requst({
		url:`/wxApi/SearchByVideoName?videoName=${test}`
	})
}
// 获取轮播图
export const swiper=()=>{
	return api.requst({
		url:'/wxApi/getswipers'
	})
}
// 根据id搜索视频
export const getviode=(id)=>{
	return api.requst({
		url:`/wxApi/SearchByVideoId?videoId=${id}`
	})
}

// 根据id搜索音乐
export const getmuisc=(id)=>{
	return api.requst({
		url:`/wxApi/SearchByMusicId?musicId=${id}`
	})
}

export const musiczim=(id)=>{
	return api.requst({
		url:`/wxApi/SearchMusicContextByMusicId?musicId=${id}`
	})
}
// 
export const userlodin=(code,userid)=>{
		
	return api.requst({
		url:`/wxApi/login?code=${code}`,
		method:"post"
	})
	
	
}

// 支付
export const wxzhif=(data)=>{
	return api.requst({
		url:`/wxPayApi/pay?userId=${data.userId}&money=${data.money}&openId=${data.openId}`
	})
}

// 开通会员
export const wxkaivip=()=>{
	
	return api.requst({
		url:`/wxApi/openVip?OpenId=${getStorageSync("messge").openid}`,
		method:"post"
	})
}



let zf=(data)=>{
	return api.requst({
		url:`/wxPayApi/pay?userId=${data.userId}&money=${data.money}&openId=${data.openId}`
	})
}

export const zfhd=(money,fun)=>{

	zf({
		userId:getStorageSync("messge").userId,
		money:money,
		openId:	getStorageSync("messge").openid
	}).then(zf=>{
		console.log("支付信息",zf);
		uni.showLoading({
			title: '支付中'
		});
			uni.requestPayment({
						provider: 'wxpay', // 服务提提供商
						timeStamp: `${zf.timeStamp}`, // 时间戳
						nonceStr: zf.nonceStr, // 随机字符串
						package:"prepay_id="+zf.prepayId,
						signType: zf.signType, // 签名算法
						paySign: zf.paySign, // 签名
						success: function (res) {
							console.log('支付成功',res);
							// 业务逻辑。。。
							uni.hideLoading();
							uni.showToast({
								title:"支付成功",
								icon:"none",
								success:()=>{
									fun()
								}
							})
							
							
						},
						fail: function (err) {
							uni.hideLoading();
							uni.showToast({
								title:"支付失败",
								icon:"none"
							})
						}
					});		
	})
}

export const Ismoeny=(muiscid)=>{
	console.log(getStorageSync("messge").openid);
	console.log(muiscid);
	return api.requst({
		url:`/wxApi/IsPurchase?openId=${getStorageSync("messge").userId}&musicId=${muiscid}`
	})
}
// 插入购买
export const yonghcrmusic=(muiscid)=>{
	return api.requst({
		url:`/wxApi/Purchase?openId=${getStorageSync("messge").userId}&musicId=${muiscid}`,
		method:"POST"
	})
}

// 已购买音乐
export const musiclist=()=>{
	return api.requst({
		url:`/wxApi/PurchaseList?openId=${getStorageSync("messge").userId}`
	})
}

export const modules=()=>{
	return api.requst({
		url:`/wxApi/PurchaseVideoList?openId=${getStorageSync("messge").userId}`
	})
}

// 音乐点赞
export const musicgood=(musicid)=>{
	return api.requst({
		url:`/wxApi/addOneMusic?musicId=${musicid}`,
		method:"POST"
	})
}