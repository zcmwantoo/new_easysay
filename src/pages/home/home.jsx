import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'

const mapStateToProps = (state) => {
    return {
        num:state.home.data
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addOneNum(){
            dispatch(actionCreators.addNum())
        },
        jsOneNum(){
            dispatch(actionCreators.jsNum())
        }
    }
}
@connect(mapStateToProps,mapDispatchToProps)
class Home extends React.Component{
    render() {
        const {num} = this.props;
        return (
            <>
                <h2>home</h2>
                <h3>数量：{num}</h3>
                <button
                    onClick = { this.props.addOneNum }
                >+1</button>
                <button
                    onClick = { this.props.jsOneNum }
                >-1</button>
            </>
        )
    }

}
export default Home