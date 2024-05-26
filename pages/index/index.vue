<template>
	
	<view class="content">
	
	<view class="sachv">
		
	
		
		<view class="sach">
		<image class="icon" src="../../static/index/sach.png" mode=""  @click="gosach"  ></image>
			
					<input v-model="sachtxt"  placeholder="歌手 歌曲或专辑" @confirm="gosach" type="text">
			</view>
	</view>
		
		<swiper class="swper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true" indicator-color="#9EA09A" indicator-active-color="white">
			<swiper-item class="swper" v-for="(i,index) in Lbt" :key="index">
				<view class="swiper-item">
					
					<image class="swiper-item" :src="ip+i" mode=""></image>
				</view>
			</swiper-item>
		
		</swiper>

	<view class="gird">
		<view class="box"   @click="godanqu(1)">
			<image src="../../static/index/ser.png" mode="widthFix"></image>
			<text>粤语歌曲</text>
		</view>
		<view class="box"  @click="godanqu(2)">
			<image src="../../static/index/two.png" mode="widthFix"  ></image>
			
			<text>闽语歌曲</text>
		</view>
		<view class="box"  @click="godanqu(3)">
			<image src="../../static/index/one.png" mode="widthFix"></image>
			<text>其他歌曲</text>
		</view>
	</view>
	
	<view class="txt-one">
		
		<view class="left">推荐视频</view>
		<view class="right" @click="gosp" ><text>更多</text> <image class="icons" src="../../static/index/right-.png"></image></view>
	
	</view>
	<scroll-view class="sroll" scroll-x="true"  >
		<view class="box"  v-for="i in sparr" @click="gospbf(i.videoId)">
		<div class="box-flex" >
			<view class="flex-top">
					<image   :src="ip+i.thumbnail" mode=""></image>
				
				<view class="top-zz">
					
							<image src="/static/index/stard.png" mode=""></image>
				</view>
				
			</view>
			<view class="flex-but">
		{{i.title}}
			
			</view>

		</div>
			
		</view>
	</scroll-view>
	<view class="txt-one">
		
		<view class="left">推荐歌曲</view>
		<view class="right" @click="gosp" ><text>更多</text> <image class="icons" src="../../static/index/right-.png"></image></view>
	
	</view>
	<scroll-view class="sroll" scroll-x="true"  >
		<view class="box"  v-for="i in sparr" @click="gospbf(i.videoId)">
		<div class="box-flex" >
			<view class="flex-top">
					<image   :src="ip+i.thumbnail" mode=""></image>
				
				<view class="top-zz">
					
							<image src="/static/index/stard.png" mode=""></image>
				</view>
				
			</view>
			<view class="flex-but">
		{{i.title}}
			
			</view>
	
		</div>
			
		</view>
	</scroll-view>
	
	<view class="txt-one" >
		
		<view class="left">最新歌单</view>
		<view class="right"  @click="gomore" ><text>更多</text> <image class="icons" src="../../static/index/right-.png"></image></view>
	
	</view>
	
	
	<scroll-view class="sroll2" scroll-y="true" >
		
		<view class="boxtwo"  v-for="i in musicdata" @click="gomuiscplay(i.musicId)">
		<div class="box-flex" >
			<view class="flex-top">
				<image :src="ip+i.thumbnail" mode=""></image>
				<view class="zz">
					
				</view>
		
				<view class="top-zz">
					
					
					<view class="top-zz-img">
						<image   src="/static/index/singmusic.png" mode=""></image>
						
						
						<text>{{i.viewCount}}</text>
					</view>
						<image class="img"   src="/static/index/bof.png" mode=""></image>
						
				</view>
				
			</view>
			<view class="flex-but">
				<view class="fos">
					{{i.title}}
				</view>
				<view class="flex-but-qtge">
					{{i.musicCategory}}
				</view>
				
				<text class="tis">{{i.briefIntro}}</text>
				
				<view class="flex-but-but">
					<view>
						<image src="../../static/dz.png"></image>
						<text>{{i.viewCount}}</text>
					</view>
					<view>
						<image src="../../static/gk.png"></image>
						<text>{{i.likeCount}}</text>
					</view>
				</view>
			</view>
		
		</div>
			
		</view>
	</scroll-view>
	
	</view>
</template>

<script>
	
	
	import {muiscapi,userapi,userxx,usermusicis,usershopmusic,usersp,swiper} from "../../api/index.js"
	import config from "../../api/config.js"
	
	
	
	export default {
		data() {
			return {
				// 轮播图数据
				Lbt:[
					"https://tse1-mm.cn.bing.net/th/id/OIP-C.ETGrsQGUkHrEf-1f3kvMwgHaFR?rs=1&pid=ImgDetMain",
					"https://tse1-mm.cn.bing.net/th/id/OIP-C.ETGrsQGUkHrEf-1f3kvMwgHaFR?rs=1&pid=ImgDetMain"
					
				],
				//sachinput
				sachtxt:'',
				musicdata:{
					
				},
				sparr:[
					
				]
				,
				home:{
					// 最新歌单数据
					max:10,
					ip:config.url
				}
				,
				ip:config.url,
				
			}
		},
		onLoad() {

		}
		,
		components:{
		
		},
		
		methods: {
			gosach(){
				uni.navigateTo({
					url:`/pages/index/sach/sach?name=${this.sachtxt}`
					
				})
			},
			gomore(i){
				uni.navigateTo({
					url:`/pages/more/more`
					
				})
			},
			gosp(){
				uni.navigateTo({
					url:"/pages/moresp/moresp"
				})
			},
			godanqu(i){
				uni.navigateTo({
					url:"/pages/index/danq/danq?id="+i
					
				})
			},
			gospbf(i){
				uni.navigateTo({
					url:"/pages/spbfq/spbfq?id="+i
				})
			},
			gomuiscplay(i){
				uni.navigateTo({
					url:"/pages/musicpaly/musicpaly?id="+i
				})
			},
		 async	setmuiscdata(){
			 // 请求歌曲列表前四个
			 
				this.musicdata=(await muiscapi()).rows.slice(0, this.home.max);
				console.log("数据",this.musicdata);
			// 请求视频列表前四个
				this.sparr=(await usersp()).rows
				// 请求轮播图
				let {imageOne,imageThree,imageTwo}=(await swiper()).rows[0]
				this.Lbt=[imageOne,imageThree,imageTwo]
			
				
				
				
				
				
			}
		},
		onShow(){
			this.setmuiscdata()
		
		}
	}
</script>

<style lang="less">
	.icon{
		width: 40rpx;
		height: 40rpx;
		margin-left: .5rem;
	}
	
.content{
	position: relative;
	padding-top: 100rpx;
	.sachv{
		background: #A2B1B8;
		z-index: 99;
			position: fixed;
			top: 0;
		width: 100%;
		height: 55rpx;
		
		height: 80rpx;
		display: flex;
		justify-content: center;
		align-items: center;
			margin-bottom: 1em;
		.sach{
			position: relative;
			width: 90%;
			height: 70%;
		
			
			display: flex;
			
			align-items: center;
			margin: auto;
			
			justify-content: start;
			image{
				z-index: 99;
			}
			input{
				position: absolute;
				width: 90%;
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
	padding-bottom: 1em;
	
	
	width: 100vw;
	min-height: 100vh;
	background: #E5E5E5;
	

	.swper{
			overflow: hidden;
		border-radius: 15rpx;
		width: 90%;
		height: 270rpx;
			margin: auto;
			
		.swiper-item{
			width: 100%;
			height: 100%;
		}
	}
	
	.gird{
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 100rpx;
		width: 80%;
		
		
		
		margin:1em auto;
		padding: 5%;
		height:200rpx;   
		 background-color: #ffffff; 
		border-radius: 3rpx;


	
		
		.box{
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		
			image{
				width: 100rpx;
				height: 100rpx;
			}
			text{
				margin-top: .5rem;
				font-size: .8em;
				color: black;
			}
		}
	}
	.txt-one{
		padding: 5%;
		
		 background-color: #ffffff; 
		border-radius: 2rpx;


		width: 80%;
		margin: auto;
		margin-top: 1em;
		display: flex;
	
		justify-content: space-between;
		align-items: center;
		
		.left{
			color: black;
			padding-left: .2rem;
			border-left: 10rpx solid #B7B7B7;
				font-size: 1em;
		}
		.right{
			
			display: flex;
			justify-content: start;
			align-items: center;
			color: rgba(0, 0, 0, .4);
			font-size: .8rem;
			.icons{
				width: 35rpx;
				height: 35rpx;
			}
		}
		
	}
	.sroll{
		
		height: 220rpx;
	
		white-space: nowrap;
		width: 82%;
		margin-left: 5%;
		margin: auto;
		padding: 4%;
	
		 background-color: #ffffff; 
		border-radius: 2rpx;
		
		.boxtwo{
			width: 250rpx;
			height: 100%;
		
					
			display: inline-block;
			margin-right: 25rpx;
			.box-flex{
				width: 100%;
				height: 100%;
				background: red;
				.column-center-center();
				.flex-top{
					width: 100%;
					height: 170rpx;
					
					border-radius:20rpx;
					position: relative;
					overflow: hidden;
					image{
						width: 100%;
						height: 100%;
						
					}
					.zz{
						width: 100%;
						height: 100%;
						position: absolute;
						top: 0;
						
						z-index:1 ;
						background: rgba(0, 0, 0, .5);
					}
					.top-zz{
						width: 100%;
						height: 30rpx;
						bottom: 0;
						left: 0;
						position: absolute;
						z-index: 2;
						
						display: flex;
						justify-content: space-between;
						align-items: center;
						.top-zz-img{
							display: flex;
							justify-content: center;
							align-items: center;
							margin-bottom: 10rpx;
							text{
								font-size:.7rem ;
								color: white;
								margin-left: .3rem;
								line-height: 30rpx;
							}
							image{
								margin-left: 10rpx;
							}
						}
						.img{
								margin-right: 1em;
									margin-bottom: 10rpx;
						}
						image{
							width: 30rpx;
							height: 30rpx;
						
						
							
						}
						
					}
				}
				.flex-but{
					
					flex: 1;
					
				
					width:95%;
					font-size: .7rem;
					  white-space: pre-wrap;
					   text-align: justify;
					  margin-top: 10rpx;
					
				}
			}
		}
		
		.box{
			width: 180rpx;
			height: 100%;
			height: 100%;
		
			display: inline-block;
			margin-right: 25rpx;
			.box-flex{
				width: 100%;
				height: 100%;
				
				.column-center-center();
				.flex-top{
					width: 100%;
					height: 170rpx;
					
					border-radius:20rpx;
					position: relative;
					overflow: hidden;
					image{
						width: 100%;
						height: 100%;
					}
					.top-zz{
						width: 100%;
						height: 100%;
						top: 0;
						left: 0;
						position: absolute;
						z-index: 1;
						background: rgba(0, 0, 0, .4);
						display: flex;
						justify-content: center;
						align-items: center;
						image{
							width: 50rpx;
							height: 50rpx;
							
							
						}
						
					}
				}
				.flex-but{
					
					flex: 1;
					
				
					width: 80%;
					font-size: .9rem;
					  white-space: pre-wrap;
					  text-align: center;
					  margin-top: 10rpx;
					
				}
			}
		}
	}
	
	.sroll2{
		
		height: 70vh;
	
		white-space: nowrap;
		width: 82%;
		margin-left: 5%;
		margin: auto;
		padding: 4%;
		 background-color: #ffffff; 
		border-radius: 2rpx;
	
		.boxtwo{
			width:100%;
			height: 170rpx;
		
					
			
			margin-right: 25rpx;
			margin-bottom: 1em;
			.box-flex{
				width: 100%;
				height: 100%;
			
				display: flex;
				justify-content: start;

				align-items: flex-start;
				
				
				
				.flex-top{
					width: 40%;
					height: 100%;
					display: flex;
					border-radius:20rpx;
					position: relative;
					overflow: hidden;
					background: pink;
					image{
						width: 100%;
						height: 100%;
						
					}
					.zz{
						width: 100%;
						height: 100%;
						position: absolute;
						top: 0;
						
						z-index:1 ;
						background: rgba(0, 0, 0, .5);
					}
					.top-zz{
						width: 100%;
						height: 30rpx;
						bottom: 0;
						left: 0;
						position: absolute;
						z-index: 2;
						
						display: flex;
						justify-content: space-between;
						align-items: center;
						.top-zz-img{
							display: flex;
							justify-content: center;
							align-items: center;
							margin-bottom: 10rpx;
							text{
								font-size:.7rem ;
								color: white;
								margin-left: .3rem;
								line-height: 30rpx;
							}
							image{
								margin-left: 10rpx;
							}
						}
						.img{
								margin-right: 1em;
									margin-bottom: 10rpx;
						}
						image{
							width: 30rpx;
							height: 30rpx;
						
						
							
						}
						
					}
				}
				.flex-but{
					
					flex: 1;
					
					margin-left:1em ;
				
					font-size: .7rem;
					  white-space: pre-wrap;
					   text-align: justify;
					  margin-top: 10rpx;
					.fos{
					
						font-size: .8rem;
						width: 100%;
						color:rgba(0, 0, 0, 1);
				
						
					}
					.flex-but-qtge{
						font-size: .7rem;
						margin-top: 3rpx;
						margin-bottom: 3rpx;
						color: #757575;
					}
					.tis{
						font-size: .6rem;
						color: #757575;
						white-space: nowrap; /* 防止文本换行 */
						   overflow: hidden; /* 隐藏溢出部分 */
						   text-overflow: ellipsis; /* 显示省略号 */
				margin-top: 1em;
					}
					.flex-but-but{
						display: flex;
						margin-top: .5em;
						justify-content: start;
						font-size: .7rem;
						color: #757575;
						align-items: center;
						
						view{
							margin-right: 1rem;
							display: flex;
							justify-content: center;
							align-items: center;
								
							image{
								width: 40rpx;
								height: 30rpx;
							}
							text{
								margin-left: .5rem;
							}
						}	
							
					}
				}
			}
		}
		
		.box{
			width: 180rpx;
			height: 100%;
			height: 100%;
		
			display: inline-block;
			margin-right: 25rpx;
			.box-flex{
				width: 100%;
				height: 100%;
				
				.column-center-center();
				.flex-top{
					width: 100%;
					height: 170rpx;
					
					border-radius:20rpx;
					position: relative;
					overflow: hidden;
					image{
						width: 100%;
						height: 100%;
					}
					.top-zz{
						width: 100%;
						height: 100%;
						top: 0;
						left: 0;
						position: absolute;
						z-index: 1;
						background: rgba(0, 0, 0, .4);
						display: flex;
						justify-content: center;
						align-items: center;
						image{
							width: 50rpx;
							height: 50rpx;
							
							
						}
						
					}
				}
				.flex-but{
					
					flex: 1;
					
				
					width: 80%;
					font-size: 1rem;
					  white-space: pre-wrap;
					  text-align: center;
					  margin-top: 10rpx;
					
				}
			}
		}
	}
}

.column-center-center{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	
	
}


</style>
