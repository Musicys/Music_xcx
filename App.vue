<script>
	import { setStorageSync,getStorageSync } from "./utils/index.js"
	import {userlodin} from "./api/index.js"
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		data(){
			return {
				
			}
		},
		
		methods:{
			userlogo(){
				
				uni.login({
					"provider": "weixin",
					"onlyAuthorize": true, // 微信登录仅请求授权认证
					success: (event)=>{
						const {code} = event
						//客户端成功获取授权临时票据（code）,向业务服务器发起登录请求。
						console.log("用户",code);
						userlodin(code).then(res=>{
						
									setStorageSync("messge",res);
										console.log("用户",getStorageSync("messge").userId);
										console.log("openid",getStorageSync("messge").openid);
									
									
						})
				
						
				
						
					},
					fail: function (err) {
				        // 登录授权失败
				        // err.code是错误码
				    }
				})
			}
		},
		mounted(){
			this.userlogo()
			
		}
	}
</script>

<style>
	page{
		background: #E5E5E5;
	}
	/*每个页面公共css */
	button{
		  border: none;
		  background: none;
		  outline: none;
	}
</style>
