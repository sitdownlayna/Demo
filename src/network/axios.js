import originAxios from 'axios'

export default function axios(option) {
	return new Promise((resolve, reject) => {
		// 1.创建axios的实例
		const instance = originAxios.create({
			baseURL: 'http://152.136.185.210:8000/api/z8',
			timeout: 5000
		});
		// 2.传入对象进行网络请求
		instance(option).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}
