<template>
	<view class="mine">
		<view class="mine-top">
		
				<view class="bfq" @click="gouser()">
					<image :src="usermassge.avatarUrl" mode=""></image>
							
					<text style="text-align: justify; width: 300rpx;">{{usermassge.nickName}}</text>
				</view>
			<image class="jt" src="/static/index/right-.png" mode=""></image>
		</view>
		
		
		
		<view class="but">
			<view class="top">
				<view class="top-left">
					<image src="/static/login/huiy.png" mode=""></image>
					<text>会员</text>
				</view>
			
					<view class="top-right" @click="vipgo">
					{{vip ?"已开通":"开通"}}
					</view>
				
			</view>
			<view class="hx">
				
			</view>
			<view class="buttom">
				<view class="buttom-top">
					付费阅读服务
				</view>
				<view class="buttom-bottom">
					
					
					
					<button  :plain="true"  >
									
							<image src="../../static/login/sy.png" mode=""></image>
								<text>分享收益</text>
					</button>
					<button  :plain="true"   @click="goissc">
									
							<image src="../../static/login/sc.png" mode=""></image>
								<text>我的收藏</text>
							
					</button>
					
				
						
						<button  :plain="true"  open-type="contact" bindcontact="handleContact" type="primary">
				
								<image src="../../static/login/yq.png" mode=""></image>
							
						
						
									<text>联系客服</text>
								
						</button>
						
						<button  :plain="true" @click="goisgm" >
							<image src="../../static/login/gm.png" mode=""></image>
								<text>已购买</text>
						</button>
				
				</view>
			</view>
		</view>
		
		
		
	</view>
</template>

<script>
	import {getStorageSync,setStorageSync} from "../../utils/index.js"
	import { wxkaivip,zfhd} from "../../api/index.js"
	export default {
		data() {
			return {
				usermassge:{
					avatarUrl: "https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0",
					nickName: "用户"
				}
				,vip:false,
				userdata:[]
			}
		},
		methods: {
			gouser(){
				uni.navigateTo({
					url:"/pages/mine/usermassge/usermassge"
				})
			},
			goissc(){
				uni.navigateTo({
					url:"/pages/Issc/Issc"
				})
			},
			goisgm(){
				uni.navigateTo({
					url:"/pages/mysc/mysc"
				})
			},
			vipgo(){
				// console.log(this.usermassge);
				// 	wxkaivip().then(res=>{
				// 		console.log(res);
				// 	})
				if(this.vip)
				{
					uni.showToast({
						title:"已开通",
						icon:"none"
					})
					return
				}
				zfhd(getStorageSync("messge").vipmovy|99,()=>{
						wxkaivip().then(res=>{
							console.log(res);
							// 开通会员成功
							
							this.bdvip()
							
						})
				})
			},
			bdvip(){
				if(getStorageSync("messge").vip==1)
				{
					this.vip=true
				}
			}
		},
		onShow(){
			if(!getStorageSync("usermassge")){return }
			this.usermassge=JSON.parse(getStorageSync("usermassge"))
			
		
		
		},
		mounted()
		{
				this.bdvip()
		}
	}
</script>

<style lang="less">

.mine{
	width: 750rpx;
	.mine-top{
		width: 100%;
		height: 200rpx;
		
		background: #A2B1B8;
		// overflow: hidden;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.bfq{
			display: flex;
			justify-content: center;
			align-items: center;
			
			margin-left: 1em;
			image{
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
			}
			text{
				font-size: .9rem;
				color: rgba(0, 0, 0, .6);
				margin-left:1em ;
			}
			
			
		}
		.jt{
			width: 50rpx;
			height: 30rpx;
			margin-right: 1em;
			
		}
			margin-bottom: 1em;
	}
		
		
	.but{
		width: 90%;
		margin: auto;
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
		height: 350rpx;
		border-radius: 10rpx;
		background: #FFFFFF;
		
		.hx{
			width: 90%;
			height:.1rpx;
			background: rgba(0, 0, 0, .1);
			margin: auto;
			
			// margin-bottom: 1em;
		}
		.top{
			width: 100%;
			// padding: ;
		
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 100rpx;
		
			view{
				margin-top: .4rem;
			}
			
			.top-left{
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-left: 1em;
				image{
					width: 35rpx;
					height: 35rpx;
					
				}
				text{
					margin-left: .4rem;
					font-size: .8rem;
					color: #A2B1B8;
					
				}
			}
			.top-right{
				background: #A2B1B8;
				color: white;
				padding: 4rpx 20rpx;
				
				border-radius: 10rpx;
				
				font-size: .7rem;
				margin-right: 1em;
			}
		}
		.buttom{
			flex:1;
			width: 100%;
		
			display: flex;
		flex-direction: column;
		.buttom-top{
			font-size: 1em;
			color:  #888888;
			
			margin-left: .5rem;
			margin-top: .5rem;
			font-weight: 600;
		}
	
		.buttom-bottom{
			width: 90%;
				flex: 1;
				
			margin:1em auto;
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;
			
			gap: 10rpx;
			position: relative;
			button{
				
				width: 120%;
				height: 100%;
				border: none;
				background: none;
				outline: none;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
			
					
				
					image{
						width: 55rpx;
						height: 55rpx;
						margin-top: 1em;
						
					}
					text{
						margin-top: .5rem;
						font-size: .7rem;
							color:  #5C5C5C;
							margin-bottom: .5em;
						// color: rgba(0, 0, 0, .6);
					}
						
				
				
			}
			
		}
	
		}
	}
}

</style>
