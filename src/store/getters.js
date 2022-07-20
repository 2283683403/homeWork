export const getters = {
    token : state=>state.user.token,
    username:state=> state.user.username,
    avatar:state=> state.user.avatar,
    menus:state=> state.user.menus,
    tags:state=>state.user.tagsView,
    data1:state=> state.home.data1,
}