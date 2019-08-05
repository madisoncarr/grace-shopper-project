import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {AllReviews} from './AllReviews'
import {Route, Switch, Link} from 'react-router-dom'
import history from '../history'
/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email, isLoggedIn, user} = props
  console.log(props)
  return (
    <div>
      {/* <h3>Welcome, {email}</h3> */}
      {/* <h5>User #: {user.id}</h5> */}
      <button
        type="button"
        onClick={() => {
          history.push(`/users/${user.id}/reviews`)
        }}
      >
        Reviews
      </button>
      {isLoggedIn ? (
        <div>
          <Switch>
            <Route
              path="/myaccount/AllReviews/:productId"
              component={AllReviews}
            />
          </Switch>
        </div>
      ) : (
        <h3>Please login to view your account</h3>
      )}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user,
    email: state.user.email,
    isLoggedIn: !!state.user.id
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
