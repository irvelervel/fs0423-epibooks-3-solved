import { ListGroup } from 'react-bootstrap'
import SingleComment from './SingleComment'

const CommentsList = (props) => {
  return (
    <ListGroup>
      {props.reviews.map((review) => {
        return <SingleComment singleReview={review} key={review._id} />
      })}
    </ListGroup>
  )
}

export default CommentsList
