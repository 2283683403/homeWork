import Homes from "../../api/index"
import { getItem,setItem,removeItem} from "@/utils/storage"
export default{
    namespaced:true,
    state:{
        data1:getItem('Statistics1') ||'',
    },
    mutations:{
        setStatistics1(state,data){
            state.data=data
            setItem('Statistics1',state.data)
        }
    },
    actions:{
       async setStatistics1({commit}){
            const data = await Homes.statistics1()
            commit('setStatistics1',data.data.data.panels)
        }
    }
  }