/*
  包含n个接口请求函数
 */
import ajax from '@/api/ajax'

// 根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)
// 获取食品分类列表
export const reqFoodTypes = () => ajax('/index_category')
// 根据经纬度获取商铺列表
export const reqSellerList = (latitude, longitude) => ajax('/shops', { latitude, longitude })
// 根据经纬度和关键字搜索商铺列表
export const reqSearchSeller = (geohash, keyword) => ajax(`/search_shops`, { keyword, geohash })
// 获取一次性验证码
export const reqCaptcha = () => ajax('/captcha')
// 用户名密码登陆
export const reqLoginPwd = (name, pwd, captcha) => ajax('/login_pwd', { name, pwd, captcha }, 'POST')
// 发送短信验证码
export const reqSendCode = (phone) => ajax('/sendcode', { phone })
// 手机号验证码登陆
export const reqLoginPhone = (phone, code) => ajax('/login_sms', { phone, code }, 'POST')
// 根据会话获取用户信息
export const reqUserInfo = () => ajax('/userinfo')
// 用户登出
export const reqUserOut = () => ajax('/logout')
