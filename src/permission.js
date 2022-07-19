import router from "./router";

router.beforeEach((to,from,next)=>{
    const token = localStorage.getItem('token')
    if(token){
        if(to.path == '/login'){
            next(from.path)
        }else{
            next()
        }
    }else{
        if(to.path == '/login'){
            next()
        }else{
            next('/login')
        }
    }
})