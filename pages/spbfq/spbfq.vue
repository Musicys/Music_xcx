<template>
	<view>
		<video class="voide" :src="ip+data.videCunchu"></video>
			<view class="but">
				<text>{{data.title}}</text>
			</view>
			
			<view class="gnk">
				<view @click="gomai">
					<image v-if="!bfq.Ismovy&&!bfq.Isvip" src="/static/hy.png" mode=""></image>
					<image v-else src="../../static/gom_s.png" mode=""></image>
					
				
					<view class="bq">
						{{!bfq.Ismovy? bfq.Isvip?"vip专属":"购买":"已购买"}}
					</view>
					
				</view>
				<view @click="Issc()">
					<image v-if="!bfq.Issc" src="/static/sc.png" mode=""></image>
					<image v-else src="../../static/sc_s.png" mode=""></image>
					<view class="bq">
					{{!bfq.Issc?"收藏":"已收藏"}}
					</view>
					
				</view>
				<view>
					<image src="/static/music/zf.png" mode=""></image>
				<view class="bq">
					999+
				</view>
				</view>
				<view  @click="setxhbff">
						<image src="/static/music/onetets.png"  v-if="!bfq.xhbf" mode=""></image>
						<image src="../../static/music/radom.png" v-else mode=""></image>
					
					
					</view>
			</view>
			
			<view class="but_b">
				{{data.articleContent}}
			</view>
	</view>
</template>

<script>
		import {musicpalycx,usersp,getviode} from "../../api/index.js"
		import config from "../../api/config.js"
	export default {
		data() {
			return {
				data:{
					
					articleContent: "<p>1</p>",
					author: "111",
					briefIntro: "1",
					createBy: "",
					createTime: "2024-04-12 16:14:24",
					displayOrder: 1,
					freeListenDuration: 30,
					imageGallery: null,
					likeCount: 1111,
					price: 1,
					qrCode: "",
					remark: null,
					thumbnail: "/profile/upload/2024/04/12/ont_20240412161410A006.png",
					title: "111111",
					updateBy: "",
					updateTime: "2024-04-12 16:14:30",
					videCunchu: "/profile/upload/2024/04/12/20240314-221225_20240412161352A005.mp4",
					videoCategory: "",
					videoId: 200,
					videoLink: "",
					viewCount: 1111,
					virtualPayCount: 1,
					wechatId: "1",
					
				},
				ip:config.url
			}
		},
		methods: {
			async setdata(id){
				this.data=(await getviode(id)).data
					console.log(this.data);
			}
			
		},
		onLoad(query) {
			this.setdata(query.id)
			
		
		}
	}
</script>

<style lang="less">
.voide{
	width: 750rpx;
}
		.gnk{
					display: flex;
					width: 80%;
					margin: auto;
					height: 80rpx;
					
					justify-content: start;
					align-self: center;
					view:nth-child(4)
					{
						margin-left: 2.5em;
					}
					view{
						width: 70rpx;
						height: 70rpx;
					
					position: relative;
					
				
						margin-right: 1.5em;
						display: flex;
						justify-content: center;
						align-items: center;
					image{
						width: 100rpx;
						height: 80rpx;
						
					}
					
					.bq{
						position: absolute;
						// width: 50rpx;
						height: 50rpx;
						top: -5rpx;
						right: -70rpx;
						color: #FFFFFF;
						font-size: .5rem;
					}
					}
				}
				
</style>
