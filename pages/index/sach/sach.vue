<template>
	<view class="page">
		<view class="sachv">
			
		
				
			<view class="sach">
			<image class="icon" src="../../../static/index/sach.png" mode=""  @click="gosach"  ></image>
				
						<input v-model="name"  placeholder="歌手 歌曲或专辑" @confirm="gosach" type="text">\
						<view  class="text">搜索</view>
				</view>
		</view>
				<view class="tab">
					<view :class="istab==1?'ys1':'ys2'" @click="settab(1)">单曲</view>
					<view :class="istab==2?'ys1':'ys2'" @click="settab(2)">专栏</view>
				</view>
				
				<view class="box" v-if="data.length!=0">
					<view class="gird">
						<view v-for="i in sparr" @click="gospbf(i.videoId)">
							<view class="img">
								<image :src="ip+i.thumbnail"></image>
								<view class="zz">
									<view class="zz-but">
										<image src="/static/index/bof.png" mode=""></image>
										<text>{{i.viewCount}}</text>
									</view>
								</view>
							</view>
							<text>{{i.title}}</text>
						</view>
						
					</view>
					
					<view class="item" v-for="(i,index) in data" @click="gomusic(i.musicId)">
						<text>{{index+1}}</text>
					<image style="max-width:25%; height: 100%; border-radius:10rpx ;" :src="ip+i.thumbnail" mode=""></image>
					
						<view class="item-cart">
							<view class="txt">	{{i.title}}</view>
							<view class="cart-bq">
								<view class="zuozhe">
									作者{{i.author}}
								</view>
								<view class="bq">
									<image src="/static/index/sach/VIP.png" mode=""></image>
									
									<image src="/static/index/sach/rd.png" mode=""></image>
										<text>{{i.viewCount}}</text>
									<image src="/static/index/sach/loves.png" mode=""></image>
									<text>${{i.price}}</text>
								</view>
								
								
							</view>
						</view>
					</view>
				</view>
				<view class="wu" v-else>
					<image src="../../../static/index/sach/kkry.png" mode=""></image>
					<text>空空如也....</text>
				</view>
				
				
			
	</view>
</template>

<script>
	import {musicpalycx,usersp} from "../../../api/index.js"
	import config from "../../../api/config.js"
	export default {
		data() {
			return {
				name:"",
				data:[
				
				],
				istab:1,
				sparr:[],
				ip:config.url
			}
		},
		methods: {
		  async	gosach(){
			 this.data=(await musicpalycx(this.name)).rows
			
			},
			settab(i){
				this.istab=i
			},
			gomusic(id){
				uni.navigateTo({
					url:`/pages/musicpaly/musicpaly?id=${id}`
					
				})
			},
			gospbf(i){
				uni.navigateTo({
					url:"/pages/spbfq/spbfq?id="+i
				})
			},
			async setdata(){
				this.sparr=(await usersp()).rows.slice(0, 3);
			}
		},
		 onLoad(query) {
		    // query 中包含 URL 参数
			this.setdata()
		    const name = query.name;
		
		   this.name=name
		   this.gosach()
			
			
		  }
	}
</script>

<style lang="less">
	.wu{
		
		width: 100vw;
		height: 60vh;
		
		justify-content: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		text{
			color: white;
			font-size: 1em;
			font-weight: bold;
		}
		image{
			width: 600rpx;
			height: 450rpx;
		}
	}
	.ys1{
		background: #A2B1B8;
		
		color: white;
	}
	.ys2{
		background: white;
		
		color: #A2B1B8;
	}
	.page{
		
		width: 100%;
		min-height:90vh;
		background: #E5E5E5;
		padding-top: 100rpx;
		
	
	
	
	}
	.icon{
		width: 40rpx;
		height: 40rpx;
		margin-left: .5rem;
	}
	
	
	.tab{
	
		width: 95%;
		margin: auto;
		height: 55rpx;
		display: flex;
		margin-bottom: 1em;
		view{
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
			font-size: .9em;
		}
		
	}
	
	.box{
	
		.gird{
			
			position: relative;
			width: 96%;
			height: 200rpx;
			
			margin: auto;
			margin-bottom: 1em;
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			gap: 20rpx;
			view{
				width: 100%;
				height: 100%;
				
				
			.img{
				width: 100%;
				height: 180rpx;
				image{
					height: 180rpx;
					width: 100%;
					
				}
				position: relative;
				.zz
				{
					position: absolute;
					height: 100%;
					top: 0;
					left: 0;
					width: 100%;
					z-index: 3;
					background: rgba(0, 0, 0, .3);
					.zz-but{
						width: 100%;
						height: 50rpx;
						position: absolute;
						z-index: 4;
						bottom:  3rpx;
						display: flex;
						justify-content: start;
						
						align-items: center;
						image{
							width: 50rpx;
							height: 50rpx;
							margin-right: .1rem;
							margin-left: .1rem;
						}
						text{
							font-size: .8rem;
							color: white;
						}
					}
				}
			}
				text{
					line-height: 20rpx;
					font-size: .8rem;
				}
			}
		}
		.item{
			
			width: 100%;
			height: 150rpx;
			display: flex;
			justify-content: start;
			align-items: center;
			margin-bottom: .5em;
			text{
				margin-left: .2rem;
			}
			.item-cart{
				margin-left: .5em;
				height: 100%;
				display: flex;
				flex-direction: column;
				width: 100%;
				
				.txt{
					display: flex;
					justify-content: start;
					align-items: center;
					color: black;
					font-size: 1em;
					width: 100%;
					flex: 1;
				}
				.cart-bq{
					flex: 1;
					
					font-size: .8rem;
					color: #A2B1B8;
					display: flex;
					
					justify-content: start;
					align-items: center;
					.zuozhe{
						
					}
					.bq{
						margin-left: 1em;
						display: flex;
						justify-content: center;
						align-items: center;
						image{
							width: 50rpx;
							height: 50rpx;
							margin-left: 1em;
						}
					}
				
				}
			}
		}
	}
	
	.sachv{
		z-index: 99;
			position: fixed;
			top: 0;
		width: 100%;
		background: #A2B1B8;
		height: 55rpx;
		
		height: 80rpx;
		display: flex;
		justify-content:start;
		align-items: center;
			margin-bottom: 1em;
		.sach{
			position: relative;
			width: 100%;
			height: 70%;
			
			
			display: flex;
			
			align-items: center;
			margin-left: 3%;
			
			justify-content: start;
			.text{
				
				height: 50rpx;
				
				position: absolute;
				right: 20rpx;
				color: black;
				font-size: 1em;
				font-weight: 350;
			}
			image{
				z-index: 99;
			}
			input{
				position: absolute;
				width: 75%;
				height: 100%;
				top: 0;
				
				padding-left: 10%;
				color: #757575;
				font-size: 24rpx;
				background: #424240;
				border-radius: 20rpx;
			}
			
			
		}
	}
</style>
