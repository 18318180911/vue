// 改造axios添加地址后重新导出
import axios from 'axios'
axios.defaults.baseURL = 'http:/www.escook.cn'
export default axios