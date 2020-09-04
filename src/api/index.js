/*
  包含n个接口请求函数
 */
import ajax from '@/api/ajax'

const BASE_URL = '/api'

// 根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)

// 获取食品分类列表
export const reqFoodCategorys = () => ajax(BASE_URL + '/index_category')

// 根据经纬度获取商铺列表
export const reqSellerList = (latitude, longitude) => ajax(BASE_URL + '/shops', { latitude, longitude })

// 用户名密码登陆
export const reqLoginPwd = ({ name, pwd, captcha }) => ajax(BASE_URL + '/login_pwd', { name, pwd, captcha }, 'POST')

// 发送短信验证码
export const reqSendCode = (phone) => ajax(BASE_URL + '/sendcode', { phone })

// 手机号验证码登陆
export const reqLoginSms = (phone, code) => ajax(BASE_URL + '/login_sms', { phone, code }, 'POST')

// 根据会话获取用户信息
export const reqUserInfo = () => ajax(BASE_URL + '/userinfo')

// 用户登出
export const reqLogout = () => ajax(BASE_URL + '/logout')

// 获取商家详情信息
export const reqSellerInfo = () => ajax(BASE_URL + '/seller')

// 获取商家评价信息
export const reqSellerRatings = () => ajax(BASE_URL + '/ratings')

// 获取商家商品列表
export const reqSellerGoods = () => ajax(BASE_URL + '/goods')
