0<template>
	<view>
		<view class="page-body"  >
			
			<image class="beij" :src="ip+current.imageGallery" mode=""></image>
			
			
			<view class="pege-top">
				
				
				
				
				<view class="peage-left" @click="gohome">
					<image src="../../static/left.png" mode=""></image>
				</view>
			</view>
		<view class="name">
							<text >{{current.title}}</text>
							<text>{{current.author}}</text>
			</view>
			
			
		<image class="img"  :class="IsIndex?'h1':'h0'" :src="ip+current.thumbnail" mode=""></image>
			<scroll-view    :class="IsIndex?'srt':'srt0'"   scroll-y="true" class="content-scroll" @scroll="handleScroll"  :scroll-with-animation="true" :scroll-top="srctop" :scroll-into-view="`id${bfq.txt}`">
				
				<view v-if="issxbf"  v-for="(item,index) in lrc" :key="index" :id="`id${index}`" class="scroll-item" :class="bfq.txt==index?'ys1':'ys2'">
					<view  >
							{{item.text}}。
					</view>
					<view :style="{ 	opacity:  ISshua ? '1' : '0' }" class="ys3">
							{{item.text2||""}}。
					</view>
					
				</view>
			
					
				
			</scroll-view>
						
						
						
				<view class="bttom"  :class="IsIndex?'bh':'bh0'" >
				
					<view class="buttom-top"   @click="setinindex()">
						<image src="/static/top.png" :class="IsIndex?'rade':''" mode=""></image>
					</view>
				
									<view class="bfq">
									
												
												<view class="box">
													
													<slider class="slider-light" change="src" v-model="bfq.jdt" @change="musicchage" block-color="#FFFFFF" @changing="muiscchang" :max="bfq.sildermax" :min="bfq.start" :block-size="16" color="#E5E5E5"></slider>
															  
												</view>
										 
											
									</view>
									
									<view class="buttom-time" >
										<view>{{time}}</view>
										<view>{{endtime}}</view>
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
										
										<view @click="Isbz">
											<image v-if="!bfq.Isbz" src="/static/bz.png" mode=""></image>
											<image v-else src="../../static/bz_o.png" mode=""></image>
											<view class="bq">
											{{!bfq.Isbz?"开启":"已开启"}}
											</view>
											
										</view>
									<view @click="setISshua()" style="color: white">
										
									
										{{!ISshua?"单":"双"}}
									
										
									</view>
									</view>
				
								
								
								<view class="but">
									<view  @click="setxhbff">
											<image src="/static/music/onetets.png"  v-if="bfq.xhbf" mode=""></image>
											<image src="../../static/music/radom.png" v-else mode=""></image>
										
										
										</view>
									<view @click="muiscup">
										<image src="../../static/music/up.png" mode=""></image>
										
									</view>
									<view  @click="bofang()">
										<image v-if="!bfq.isbf" src="../../static/music/satart.png" mode=""></image>
										<image v-else src="/static/music/stop.png" mode=""></image>
									</view>
									<view @click="muiscdowl">
										<image src="../../static/music/upend.png" mode=""></image>
										</view>
										
										
										<view>
											<button  open-type="share" >
											
										<image  class="minimg" src="/static/music/zf.png" mode="heightFix"></image>
										
											
											
											</button>
															
										
										</view>
										
								</view>
				</view>
			
		<!-- 	<view class="">
				播放
			</view>
			<view class="" @click="musicstop">
				占停
			</view> -->
		</view>
	</view>
</template>
<script>
	import {yonghcrmusic,musicgood,Ismoeny,muiscapi,zfhd,userapi,userxx,usermusicis,usershopmusic,usersp,swiper,getmuisc,musiczim,wxzhif} from "../../api/index.js"
	import config from "../../api/config.js"

		import { setStorageSync,getStorageSync } from "../../utils/index.js"

	
	export default {
		data() {
			return {
				IsIndex:true,
				
				
				issxbf:true,
				
				ISshua:true,
				bfq:{
					jsq:0,
					sildermax:1000,
					start:0,
					jdt:0,
					time:0,
					txt:0,// 当前选中
					isbf:false,
					xhbf:false,
					Ismovy:false,//是否购买
					Issc:false,
					Isvip:false,
					Isbz:false,//是否伴奏
					endtime:0
				},
				innerAudioContext:null,
				srctop:0,// 横向滚动条位置
				contentScrollW: 0, // 导航区宽度
				current: {
					articleContent: null,
					audioLink: "",
					author: "1",
					briefIntro: null,
					createBy: "",
					createTime: "2024-03-14 21:30:05",
					displayOrder: 1,
					freeListenDuration: 0,
					imageGallery: null,
					likeCount: 0,
					musicCategory: "闽南语歌",
					musicCunchu: "http://djlmy.top:8080/profile/upload/2024/03/14/音频_20240314212950A010.mp3",
					musicCunchuPro:"",
					musicId: 4,
					price: 1,
					qrCode: "",
					remark: null,
					thumbnail: "http://djlmy.top:8080/profile/upload/2024/03/14/bz_20240314212930A009.png",
					title: "test",
					updateBy: "",
					updateTime: null,
					viewCount: 0,
					virtualPayCount: 1,
					wechatId: "",
				},
				muisclist:[],
				audioAction: {
					method: 'pause'
				},
				ip:config.url,
				lrc:[]
					
									
				
			}
			
			
		},
		methods: {
			setinindex(){
				this.IsIndex=!this.IsIndex
				console.log(this.IsIndex);
			},
			handleScroll(){
				console.log("下滑");
			},
			setISshua(){
				this.ISshua=!this.ISshua
			
				
				
			},
			// 
			
			gohome(){
		uni.switchTab({
		  url: "/pages/index/index"
		});
				console.log("gohome");
			},
			// 循环播放
			setxhbff(){
				this.bfq.xhbf=!this.bfq.xhbf
					
				if(this.bfq.xhbf)
				{
					// 循环播放
					// 设置循环播放
					this.innerAudioContext.loop = true;
					uni.showToast({
						title:"循环播放",
						icon:"none"
					})
				}
				else
				{
					// 随机播放
					this.innerAudioContext.loop = false;
					uni.showToast({
						title:"顺序播放",
						icon:"none"
					})
				}
				
			},
			// 播放音乐
			bofang(){
				this.bfq.isbf=!this.bfq.isbf
				if(this.bfq.isbf)
				{
					this.musicplay()
				}
				else{
					this.musicstop()
				}
			},
			
			settop(){
				
				
				
				
				 const query = uni.createSelectorQuery().in(this);
				  query.select('.content-scroll').boundingClientRect(data => {
				                      // 拿到 scroll-view 组件宽度
				                       this.contentScrollW = data.height
				                 }).exec();
								 
								this.issxbf=true 
								setTimeout(()=>{
									
										console.log("长度",this.lrc.length);
									query.selectAll('.scroll-item').boundingClientRect(data => {
									                  let dataLen = data.length;
													  console.log("执行内",data);	
												
									                  for (let i = 0; i < dataLen; i++) {
									                   //  scroll-view 子元素组件距离左边栏的距离
													   this.srctop=0
													  
									                   this.lrc[i].top= data[i].top;
													   
													
													   if(i==1)
													   {
														   console.log(data[i].top);
													   }
									                   //  scroll-view 子元素组件宽度
													   if(data[i].height==0)
													   {
														   console.log(this.lrc[i]);
													   }
									                   this.lrc[i].height = data[i].height
									                   this.bfq.txt=0
													   
									                   
									               }
									           }).exec()	
											  
								},100)
				console.log("执行",this.lrc);	
									
									
			},
			// 工具类转换为秒
			utiltime(str){
			
				
				this.lrc=this.lrc.map(i=>{
					
					var timeString = i.time;
					
					
					// 使用日期对象进行转换
					var timeParts = timeString.split(":");
					var hours = parseInt(timeParts[0]);
					let timepartts2=timeParts[1].split(".")
					var minutes = parseInt(timepartts2[0]);
					var seconds = parseFloat(timepartts2[1]);
					
					// 计算总毫秒数
					var totalMilliseconds = hours * 60 + minutes 
					
					i.time=totalMilliseconds 
					
					if( /^\s*$/.test(i.text))
					{
						i.text="无歌词"
					}
					return i;
				})
			
				
			
				// 输出转换结果
				
			},
			// 输出歌词
			soutext(){
			
		
			
			this.lrc.forEach((i,index)=>{
			
				if(i.time==Math.floor(this.bfq.time))
				{
					
					if(index<1)return
					this.bfq.txt=index
					
					
					if(i.top-this.contentScrollW/2>0)
					{
						
						this.srctop=i.top-this.contentScrollW*2
						console.log("长度",i.top,"==》",this.contentScrollW);
					}
					
					
					
					
					return
				}
			})
				
				// 找到起点
				
				
			},
			
			musicplay(src){//播放
			
			if(this.bfq.Isbz)
			{
				this.innerAudioContext.src=this.ip+this.current.musicCunchuPro
					
						
			}
			else
			{
				this.innerAudioContext.src = this.ip+this.current.musicCunchu;
				
						
			}
			
				
			
			this.innerAudioContext.play()
			this.setout()
				
				
			},
			musicchage(e){
			
				this.bfq.jdt=e.detail.value
				let a=this.innerAudioContext.duration
				let b=this.innerAudioContext.currentTime*this.bfq.sildermax
				
				this.innerAudioContext.seek(Math.floor(this.bfq.jdt*this.innerAudioContext.duration/this.bfq.sildermax))
				this.soutext()
				this.setout()/*  */
			},
			musicstop(e){
				
					
				this.innerAudioContext.pause()
				clearInterval(this.bfq.jsq)
			},
			muiscchang(e){
				
				
				
				clearInterval(this.bfq.jsq)
			
				
			},
			setout(){
				
					
				clearInterval(this.bfq.jsq)
				
			  this.bfq.jsq=	setInterval(()=>{
					this.timeVip()
					if(this.bfq.jdt===1000)
					{
						clearInterval(this.bfq.jsq)
						
					}
			
					let a=this.innerAudioContext.duration
					this.bfq.endtime=this.innerAudioContext.duration
					let b=this.innerAudioContext.currentTime*this.bfq.sildermax
						
					this.bfq.jdt=Math.floor(b/a)
					this.bfq.time=this.bfq.jdt*a/this.bfq.sildermax
					
					this.soutext()
				},200)
			
			}
			,
			async setdata(id){
				
				
					this.muisclist=(await muiscapi()).rows
					this.current=(await getmuisc(id)).data
					
					let a=await musicgood(this.current.musicId)
					
					console.log("音乐播放次数+",a);
					
					JSON.parse(getStorageSync("muisclist")).forEach(index=>{
							if(index==this.current.musicId)
							{
								this.bfq.Issc=true
								
							}
					})
							this.bfq.Ismovy= await Ismoeny(this.current.musicId)
									
							console.log("是否购买",this.bfq.Ismovy);
					const str =await musiczim(id)
					console.log(str);
					this.lrc=str
						// console.log("数据==》",this.lrc);
					
					try{
					
				
				// // 去除字符串中的额外空格
				// const trimmedStr = str.trim();
				
				// // 去除字符串开头和结尾的方括号以得到有效的JSON格式
				// const validJSONStr = trimmedStr.substring(1, trimmedStr.length - 1);
				
				// // 将键名加上双引号，得到有效的JSON格式
				// const validJSONWithQuotes = validJSONStr.replace(/([{,]\s*)([a-zA-Z0-9_]+?)\s*:/g, '$1"$2":');
				
				// // 使用JSON.parse()将字符串转换为对象
				// this.lrc = JSON.parse('[' + validJSONWithQuotes + ']');
				
				if(this.lrc.length!==0)
				{
					
					
					setTimeout(()=>{
						this.utiltime()
						this.settop()
					
					},100)
				}
				
		
						
					}catch(e){
						//TODO handle the exception
			
						return
					}
					// this.lrc=a
				
			
					
			},
			muiscdowl(){
			this.musicstop()
				
				
				this.muisclist.some((i,index)=>{
					// 找到当前的歌曲
				
					if(this.current.musicId==i.musicId)
					{
						let a=this.muisclist.length
						// 长度
						if(index+1==a)
						{
							this.current=this.muisclist[0]
							
						}
						else
						{
							this.current=this.muisclist[index+1]
							
						}
					
						this.xycs()//切换字幕
						
						return true
						
					
					
					}
					
				})
				this.musicplay()
				this.bfq.isbf=true
			},
			
			xycs(){//下一首
			
				const str =this.current.articleContent
				// 去除字符串中的额外空格
				const trimmedStr = str.trim();
				
				// 去除字符串开头和结尾的方括号以得到有效的JSON格式
				const validJSONStr = trimmedStr.substring(1, trimmedStr.length - 1);
				
				// 将键名加上双引号，得到有效的JSON格式
				const validJSONWithQuotes = validJSONStr.replace(/([{,]\s*)([a-zA-Z0-9_]+?)\s*:/g, '$1"$2":');
				
				// 使用JSON.parse()将字符串转换为对象
				this.lrc = JSON.parse('[' + validJSONWithQuotes + ']');
				this.issxbf=false
			setTimeout(()=>{
				this.utiltime()
				this.settop()
				
			
			},100)
				
				
			}
			,
			muiscup(){
					this.musicstop()
				this.muisclist.some((i,index)=>{
					// 找到当前的歌曲
				
					if(this.current.musicId==i.musicId)
					{
						let a=this.muisclist.length
						// 长度
						if(index-1==-1)
						{
							this.current=this.muisclist[a-1]
							
						}
						else
						{
							this.current=this.muisclist[index-1]
							
						}
							console.log(this.current.musicId);
							this.xycs()
							
						return true
						
					
					
					}
					
				})
				
				this.musicplay()
				this.bfq.isbf=true
			}
		
			,
			 
			zhuanfa(){
				// 转发
				
				uni.shareFileMessage({
					
				})
				
			},
			gomai(){
				
				if(this.bfq.Isvip)
				{
					uni.showToast({
						title:"Vip歌曲免费",
						icon:"none"
					})
					return
				}
				if(this.bfq.Ismovy)
				{
					uni.showToast({
						title:"已购买",
						icon:"none"
					})
					return
				}
				
				
				zfhd(this.current.price,()=>{
					
					
					
					
					yonghcrmusic(this.current.musicId).then(res=>{
						console.log("购买数据",res);
						this.bfq.Ismovy=true
					})
					// 购买
					
				})
					
				// 判断是否有收藏信息
				
			},
			Issc(){
				this.bfq.Issc=!this.bfq.Issc
				let a=this.bfq.Issc
				
				let arr=[]
				if(getStorageSync("muisclist"))
				{
					// console.log("有",);
					arr=JSON.parse(getStorageSync("muisclist"))
					
					if(a)
					{
						// 收藏
						arr.push(this.current.musicId)
						setStorageSync("muisclist",JSON.stringify(arr))
					}
					else{
						arr=JSON.parse(getStorageSync("muisclist"))
						arr= arr.filter(item => {
							console.log(item);
							return item != this.current.musicId
						});
							setStorageSync("muisclist",JSON.stringify(arr))
					}
					console.log(JSON.stringify(arr));
					
				}
				else
				{
				
					arr.push(this.current.musicId)
					setStorageSync("muisclist",JSON.stringify(arr))
					
				}
				
			},
			// 判断是否vip
			timeVip(){
				
				// 是vip
				if(getStorageSync("messge").vip==1)
				{
					this.bfq.Isvip=true
					
					
					return
				}
				
		
				// 是否购买
				if(this.bfq.Ismovy)
				{
					
				
					
					return
				}
				
				if(this.bfq.time>=this.current.freeListenDuration)
				{
					console.log("超时了");
					
					this.musicstop()
					this.bfq.isbf=false
					uni.showToast({
						title:"开通vip或者单独购买",
						icon:"none"
					})
				}
				else{
					console.log("wu");
				}
				
				
			},
			onShareAppMessage(res) {
			    //console.log('onShareAppMessage',res);
			    return {
			      title: this.current.title,
			      path: 'pages/musicpaly/musicpaly?id='+this.current.musicId+'&share=true',
			    }
			  },
			 
			 Isbz(){
				 this.bfq.Isbz=!this.bfq.Isbz
				 
				 console.log(this.current);
				 if(this.bfq.Isbz)
				 {
					uni.showToast({
						title:"切换伴奏",
						icon:"none",
						success: () => {
								console.log("切换伴奏s");
						}
					})
					 
				 }
				 else
				 {
					 
					 uni.showToast({
					 	title:"切换主唱",
					 	icon:"none",
					 	success: () => {
					 			console.log("切换主唱");
					 	}
					 })
				 }
				 this.musicplay()
				 
			 }
			//onShareAppMessage {from: "button", target: {…}}
		},
		computed:{
			time(){
				
				var totalSeconds = this.bfq.time; // 假设总秒数为 123
				
				var minutes = Math.floor(totalSeconds / 60)|0;
				var seconds = totalSeconds % 60|0;
				
				var formattedTime = ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);
				return formattedTime
			
			},
			endtime(){
					var totalSeconds =this.bfq.endtime
					var minutes = Math.floor(totalSeconds / 60)|0;
					var seconds = totalSeconds % 60|0;
					
					var formattedTime = ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);
					return formattedTime
			}
		},
		mounted(){
			// 播放
			this.setout()
			this.settop()
			this.utiltime()
				
				
			
		
			
			// console.log("=====>time",this.utiltime(this.lrc[1].time));
		},
		onLoad(query) {
		   // query 中包含 URL 参数
			
		   
		   // 初始化数据
		this.innerAudioContext = uni.createInnerAudioContext();   
		this.setdata( query.id)

					// 监听是否播放完成
		this.innerAudioContext.onEnded(() => {
			if(this.bfq.xhbf)
			{
				
				return
			}
			
			this.muiscdowl()
		  // 在这里可以执行播放完成后的操作
		  // 是否收藏
	
		  
		  
		});			
		 },
		 
		 beforeDestroy(){
			this.musicstop()
		 }
	}

</script>


<style lang="less" scoped>
	

	.srt{
		height:25vh;
			
		top:43vh;
	}
	.srt0{
		top:20vh;
		height: 65vh;
	}

	.bh0{
		bottom: -25vh;
	
	}
	.bh{
		bottom: 0;
	}

	.rade{
		  transform: rotate(180deg); 
	}
	.h0{
		height: 0;
		opacity: 0;
	}
	
	.h1{
		height: 20vh;
	}
	.name{
	
	
		margin:  auto;
		width: 75%;
		margin-bottom:10rpx ;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: center;
		color: #FFFFFF;
		font-weight: bold;
		z-index: 3;
		position: absolute;
		top: 10vh;
		
		left: 50%;
		transform: translateX(-50%);
		text{
			text-align: center;
		}
		text:nth-child(1)
		{
			font-size: 1.2em;
		}
		text:nth-child(2)
		{
			font-size: .8em;
		}
	}
	wx-slider .wx-slider-handle-wrapper {
	  height: 15rpx;
	 
	}
	.slider-light .wx-slider-track {
	  background: linear-gradient(to right, #4169E1 0%, #00FFFF 100%);
	   width: 100%;
	  
	}

	.ys1{
		
		color: #FFFFFF;
		 transform: scale(1.4);
		
	}
	.ys2{
		font-size: .8em;
			color: #FFFFFF;
	
	}
	.ys3{
		font-size: .6rem;
			color: #FFFFFF;
	}
	.page-body{
		width: 100vw;
		 height: 100vh; /* 设置容器高度 */
			overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: start;
		position: relative;
		.pege-top{
			z-index: 2;
			width: 100%;
			height: 13vh;
			// background: black;
			display: flex;
			justify-content: start;
			align-items: center;
			image{
				width: 100rpx;
				height: 120rpx;
				margin-left: 1em;
				
			}
		}
		.beij{
			
			position: absolute;
			width: 100%;
			top: 0;
			left: 0;
			z-index: 0;
			height: 100%;
		}
		
		
		.img{
			z-index: 1;
			 border: 1px solid rgba(0, 0, 0, .5);
			 box-shadow: 5px 5px 10px #888888;
			position: absolute;
			top: 20vh;
			transition: all 0.3s; /* 设置透明度渐变的过渡效果 */
			left: 50%;
			transform: translateX(-50%);
			width: 60%;
		
		}
		
		
		
	.content-scroll{
		
		position: absolute;
		width: 750rpx;
		
		transition: all 0.3s; 
		
		
	.scroll-item{
		display: flex;
		flex-direction: column;
		margin-bottom: 1em;
	
		view{
				
				flex: 1;
				text-align: center;
				
				font-size: 1rem;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				white-space: nowrap;
				
				
		}
	}
		
	}
			.bttom
			{
					transition: all 0.3s; /* 设置透明度渐变的过渡效果 */
				height: 32vh;
				position: absolute;
				
				width: 100%;
				
				.buttom-top{
					width: 50rpx;
					height: 40rpx;
					position: absolute;
					top: -40rpx;
					left: 80%;
					
					transform: translateX(-50%);
					  opacity: .5;
				
					image{
						width: 100%;
						height: 100%;
						transition: all 0.3s; /* 设置透明度渐变的过渡效果 */
					}
				}
				
				.buttom-time{
					width: 100%;
					justify-content: space-between;
					
				
					align-items: center;
					display: flex;
					view{
						
						color: #FFFFFF;
					}
					view:nth-child(1){
						margin-left: 1em;
					}
					view:nth-child(2){
						margin-right: 1em;
					}
					
				}
				.gnk{
					display: flex;
					width: 80%;
					margin: auto;
					height: 80rpx;
					margin-bottom:3vh;
					justify-content: center;
					align-self: center;
					view:nth-child(4)
					{
						margin-left: 3em;
					}
					view{
						width: 100rpx;
						height: 100rpx;
					
					position: relative;
					
				
						margin-right: 1.5em;
						display: flex;
						justify-content: center;
						align-items: center;
					image{
						width: 60rpx;
						height: 60rpx;
						
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
				
				.bfq{
					width: 100%;
					height: 50rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-bottom: 3rpx;
					.box{
					
						width: 100%;
					}
					font-size: .6rem;
					color: #FFFFFF;
				}
				.but{
					width: 100%;
					margin: 2vh auto;
					display: flex;
					justify-content: center;
					align-items: center;
					height: 150rpx;
				position: relative;
				
				button{
				    border: none;
				    background-color: transparent;
				
					display: flex;
					justify-content: center;
					align-items: center;
					position: relative;
					
				}
				view:nth-child(1)
				{
					margin-right: 1em;
					image{
						width: 50rpx;
						height: 50rpx;
						
					}
				}
				view:nth-child(5){
					margin-left: 1em;
					.minimg{
						width: 50rpx;
						height: 50rpx;
						
					}
				}
			
				
				
					view:nth-child(3)
					{
						margin-left: 1em;
						margin-right:  1em;
					}
					view{
						image{
							
							width: 100rpx;
							height: 100rpx;
						}
					}
				}
			}
	}

</style>