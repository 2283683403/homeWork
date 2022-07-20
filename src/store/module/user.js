import logins from "../../api/login"
import { getItem,setItem,removeItem} from "@/utils/storage"
export default{
  namespaced:true,
  state:{
    token:getItem('token') || '',
    username:getItem('username') || '',
    avatar:getItem('avatar') || '',
    menus:getItem('menus') || '',
    tagsView:getItem('tagsView') || [],
  },
  mutations:{
    // 存储token
    setToken(state,token){
      state.token=token
      setItem('token',token)
    },
    // 退出登陆
    removeToken(state){
      state.token='',
      removeItem('token')
    }, 
    // 用户信息
    setUserInfo(state,obj){
      state.username=obj.username,
      state.avatar=obj.avatar,
      state.menus=obj.menus,
      setItem('username',state.username)
      setItem('avatar',state.avatar)
      setItem('menus',state.menus)
    },
    //存储tagsView
    setTagsView(state,tags){
      const aa = state.tagsView.findIndex(item=>{
        return item.title == tags.title
      })
      if(aa == -1){
        state.tagsView.push(tags)
        setItem('tagsView',state.tagsView)
      }

    },
    //删除tagsview
    delTagsView(state,ind){
      state.tagsView=state.tagsView.splice(ind,1)
      setItem('tagsView',state.tagsView)
    }
  },
  actions:{
    async login({commit},data){  // 登录
      const res=await logins.login(data)
      commit('setToken',res.data.data.token)
      return res
    },
    async loginOut({commit}){    //退出
      const res = await logins.loginOut()
      commit('removeToken')
      return res
    },
    async setUserInfo({commit}){ //获取用户信息 
      const userInfo = await logins.userInfo()
      var obj={
        username:userInfo.data.data.username,
        avatar:userInfo.data.data.avatar,
        menus:userInfo.data.data.menus
      }
      commit('setUserInfo',obj)
    },
    setTags({commit},tags){      //存储tagsView
      commit('setTagsView',tags)
    },
    delTag({commit},index){    //删除tagsview
       commit('delTagsView',index)
    }
  }
}