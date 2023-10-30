import { Component } from 'react'
import SingleBook from './SingleBook'
import { Col, Form, Row } from 'react-bootstrap'
import CommentArea from './CommentArea'

class BookList extends Component {
  state = {
    searchQuery: '',
    selectedAsin: null, // perchè non abbiamo ancora cliccato su nessun libro
  }

  changeAsin = (newAsin) => {
    this.setState({
      selectedAsin: newAsin,
    })
  }

  render() {
    return (
      <>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={4} className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="g-2 mt-3">
          <Col md={6}>
            <Row>
              {this.props.books
                .filter((b) =>
                  b.title.toLowerCase().includes(this.state.searchQuery)
                )
                .map((b) => (
                  <Col xs={12} md={4} key={b.asin}>
                    <SingleBook
                      book={b}
                      changeAsin={this.changeAsin}
                      selectedAsin={this.state.selectedAsin}
                    />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col md={6}>
            <CommentArea bookId={this.state.selectedAsin} />
          </Col>
        </Row>
      </>
    )
  }
}

export default BookList
