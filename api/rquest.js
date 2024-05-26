import config from "./config.js"

export default{
	url:config.url,
	method:"GET",
	header:{
		"Content-Type": "application/json"
	},
	requst(obj){
		
		obj.url=this.url+obj.url
		obj.method=obj.method||this.method
		obj.header=obj.header||this.header
		return new Promise((res,req)=>{
			
			uni.request({
				...obj
			}).then(data=>{
				res(data.data)
			})
			
		})
	}
	
}