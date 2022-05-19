// 改造axios添加地址后重新导出
import axios from 'axios'
axios.defaults.baseURL = 'http://123.57.109.30:3006/api'
export default axios