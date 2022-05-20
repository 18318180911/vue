// 改造axios添加地址后重新导出
import axios from 'axios'
axios.defaults.baseURL = 'https:/www.escook.cn'
export default axios