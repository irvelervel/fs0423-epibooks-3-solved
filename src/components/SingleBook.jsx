import { Component } from 'react'
import { Card } from 'react-bootstrap'
// import CommentArea from './CommentArea'

class SingleBook extends Component {
  state = {
    selected: false,
  }

  // ogni SingleBook riceve this.props.selectedAsin, ovvero l'asin del libro corrente selezionato
  // per fare in modo che solo UN SingleBook riceva il bordo rosso, dobbiamo comparare il proprio asin
  // con il selectedAsin.

  render() {
    return (
      <>
        <Card
          onClick={() => {
            this.setState({ selected: !this.state.selected })
            this.props.changeAsin(this.props.book.asin)
          }}
          // style={{ border: this.state.selected ? '3px solid red' : 'none' }}
          style={{
            border:
              this.props.book.asin === this.props.selectedAsin
                ? '3px solid red'
                : 'none',
          }}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title style={{ color: 'black' }}>
              {this.props.book.title}
            </Card.Title>
          </Card.Body>
        </Card>
        {/* {this.state.selected && <CommentArea bookId={this.props.book.asin} />} */}
      </>
    )
  }
}

export default SingleBook
