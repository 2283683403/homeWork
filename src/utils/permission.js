import router from '../router/index'
router.beforeEach((to,from,next)=>{
    const token = store.getters.token
    console.log(token);
})