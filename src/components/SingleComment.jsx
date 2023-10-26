import { ListGroupItem } from 'react-bootstrap'

const SingleComment = (props) => {
  return (
    <ListGroupItem>
      {props.singleReview.rate} | {props.singleReview.comment}
    </ListGroupItem>
  )
}

export default SingleComment
