import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  userTotalCount
} from '../../modules/user'


const User = (props) => (
  <div>
    <h1>Total no of user {props.userTotal}</h1>
    <h1>User Page</h1>
    <li>User 1</li>
    <li>User 2</li>
    <li>User 3</li>
    <li>User 4</li>

    <p>
      <button onClick={props.userTotalCount} >User Total</button>
    </p>

  </div>
)


const mapStateToProps = state => ({
  userTotal: state.user.userTotal
})

const mapDispatchToProps = dispatch => bindActionCreators({
  userTotalCount
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)

