import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Favourite = () => {
  const favouriteMovies = useSelector((state) => state.favouriteMovies)

  return (
    <div>
      <h1>Favourite</h1>
      <Row>
        {favouriteMovies.map((movie) => (
          <Col key={movie.imdbID} sm={12} md={6} lg={4} xl={3}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={movie.Poster} />
              <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>
                  {movie.Year}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Favourite