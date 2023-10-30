import { Component } from 'react'
import CommentsList from './CommentsList'
import AddComment from './AddComment'

class CommentArea extends Component {
  state = {
    comments: [],
  }

  // lo commento perchè all'avvio non ci sarà mai più bisogno di invocare getComments!
  // lo devo fare ora OGNI VOLTA che cambio il libro selezionato...
  // componentDidMount = () => {
  //   // viene eseguito una volta sola, all'avvio del componente!
  //   // ora faremo la fetch per recuperare i commenti
  //   if (this.props.bookId) {
  //     this.getComments()
  //   }
  // }

  componentDidUpdate(prevProps, prevState) {
    // dobbiamo riconoscere ogni cambio di asin selezionato
    if (prevProps.bookId !== this.props.bookId) {
      // è cambiato il bookId, quindi il libro selezionato!
      // qua facciamo la fetch
      this.getComments()
    }
  }

  getComments = () => {
    fetch(
      'https://striveschool-api.herokuapp.com/api/comments/' +
        this.props.bookId,
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNDczYWY2ZTNkZDAwMTQ5NWU0MzAiLCJpYXQiOjE2OTgzMjUyNDUsImV4cCI6MTY5OTUzNDg0NX0.OMmxDhKSo6yOme7lvZUVcsHnVKA8W88UBvmaPHXLxoQ',
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('errore nel recupero dei commenti')
        }
      })
      .then((arrayOfComments) => {
        console.log(arrayOfComments)
        this.setState({
          comments: arrayOfComments,
        })
      })
      .catch((err) => {
        console.log('error', err)
      })
  }

  render() {
    return (
      <div>
        <div>
          <CommentsList reviews={this.state.comments} />
        </div>
        <div>
          <AddComment bookId={this.props.bookId} />
        </div>
      </div>
    )
  }
}

export default CommentArea
