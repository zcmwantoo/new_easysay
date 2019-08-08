// combineReducers对数据的拆分管理
// import {reducer as HeaderReducer} from '../common/header/store'
// combineReducers合并reducer
import { combineReducers } from 'redux'
import HomeReducer from '../pages/home/store/reducer'
// import {reducer as DetailsReducer} from '../pages/details/store'
// import LoginReducer from '../pages/login/store/reducer'
// 将拆分的小的reducer整合成大的reducer
const reducer = combineReducers({
    home : HomeReducer
})
export default reducer