import instance from "../utils/request";

const statistics1 = ()=>{
    return instance({
        url:'/admin/statistics1',
        method:'get',
    })
};

export default{
    statistics1
}