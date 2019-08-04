import React from 'react'
import {connect} from 'react-redux'
import StarRating from 'react-bootstrap-star-rating'
import {fetchSingleProduct} from '../store/singleProduct'
import {fetchReview} from '../store/singleReview'
import {Card} from 'react-bootstrap'
import {withRouter, Link} from 'react-router-dom'
import history from '../history'

import productReducer from '../store/products'

export class SingleProduct extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     id,
  //     quantity
  //   }
  // }
  componentDidMount() {
    const id = Number(this.props.match.params.id)
    console.log('PPPPPPP', this.props)
    this.props.fetchSingleProduct(id)
    // this.props.submitReview(id)
  }

  render() {
    const {singleProduct} = this.props
    const {inventoryQuantity} = this.props.singleProduct
    const reviews = singleProduct.reviews
    console.log('REVIEW', reviews)
    let quantity = []
    for (let i = 0; i < inventoryQuantity; i++) {
      quantity.push(Number(i + 1))
    }

    return (
      <div>
        {/* <h1 style={{textAlign: 'center', margin: '1vw'}}>Single Product</h1> */}
        <div className="productContainer" style={{marginTop: '2vw'}}>
          <Card
            key={singleProduct.id}
            style={{
              width: '60vw',
              height: '30vw',
              borderRadius: '15px',
              border: '1px solid black',
              padding: '1vw'
            }}
          >
            <Card.Body>
              <div
                className="singleProductCard"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div className="singleProductImg">
                  <Card.Img
                    style={{width: '27vw', margin: '2vw'}}
                    variant="left"
                    src={singleProduct.imageUrl}
                  />
                </div>
                <div
                  className="singleProductInfo"
                  style={{width: '27vw', margin: '2vw'}}
                >
                  <Card.Title style={{fontSize: '2vw', margin: '2vw'}}>
                    {singleProduct.name}
                  </Card.Title>
                  <Card.Text style={{fontSize: '1.25vw'}}>
                    {singleProduct.description}
                  </Card.Text>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                      marginTop: '2vw'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        margin: '0.75vw',
                        justifyContent: 'center'
                      }}
                    >
                      <div
                        style={{
                          paddingTop: '0.5vw',
                          margin: '1vw',
                          fontSize: '1.25vw'
                        }}
                      >
                        <p>Quantity:</p>
                      </div>
                      <div
                        style={{marginTop: '0.25vw'}}
                        className="dropdown"
                        type="submit"
                        onClick={this.handleSubmit}
                      >
                        <select onChange={this.handleChange}>
                          {quantity.map(function(num) {
                            return <option key={num}>{num}</option>
                          })}
                        </select>
                      </div>
                    </div>
                    <div style={{justifyContent: 'space-around'}}>
                      <button className="cart" type="button">
                        Add to cart!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <p>Product #:{singleProduct.id}</p>
        {singleProduct.reviews ? (
          <div>
            <h5>Honest Reviews</h5>
            <div>
              <Link
                onClick={() => {
                  history.push('/reviews')
                }}
              >
                All Reviews
              </Link>
            </div>
            <div>
              {reviews.map(review => (
                <div key={review.id}>
                  <StarRating defaultValue={review.rating} />
                  <Link to={`/reviews/${review.id}`}>
                    <small>{review.title}</small>
                  </Link>
                  <small>{new Date(review.createdAt).toDateString()}</small>
                  <p>{review.content}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>Sorry no reviews yet! Be the first one to review!</div>
        )}
        {singleProduct.reviews ? (
          <div>
            <button
              type="button"
              onClick={() => {
                history.push(`/reviews/new`)
              }}
            >
              Add A Review
            </button>
          </div>
        ) : (
          <div />
        )}
      </div>
    )
  }
}

const mapState = state => ({
  singleProduct: state.singleProduct
  // reviews: state.singleProduct.reviews
})

const mapDispatch = dispatch => {
  return {
    // submitReview: review => dispatch(submitReview(review)),
    fetchSingleProduct: id => dispatch(fetchSingleProduct(id)),
    fetchReviewForm: reviewId => dispatch(fetchReview(reviewId))
  }
}

export default withRouter(connect(mapState, mapDispatch)(SingleProduct))
