import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Form, Pagination } from 'react-bootstrap'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addFavourite } from '../redux/favouriteSlice'


const Home = () => {
  const [search, setSearch] = useState('')
  const [data, setData] = useState({})
  const [pageNumber, setPageNumber] = useState(1)

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`https://www.omdbapi.com/`, {
        params: {
          s: search,
          page: pageNumber,
          apikey: '728e766a',
        },
      })
      setData(res.data)
    }

    fetchData()
  }, [search, pageNumber])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handlePagination = (page) => {
    setPageNumber(page)
  }

  const handleFavourite = (item) => {
    dispatch(addFavourite(item))
  }

  return (
    <div>
      <h1>Home</h1>

      <Form>
        <Form.Group>
          <Form.Label>Search</Form.Label>
          <Form.Control type="text" value={search} onChange={handleChange} />
        </Form.Group>
      </Form>

      <Row>
        {data.Search && data.Search.slice(0, 10).map((item, i) => (
          <Col key={item.imdbID} sm={12} md={6} lg={4} xl={3} className={i >= 5 ? 'd-none d-md-block' : ''}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.Poster} />
              <Card.Body>
                <Card.Title>{item.Title}</Card.Title>
                <Card.Text>
                  {item.Year}
                </Card.Text>
                <Card.Text style={{ display: 'none' }}>
                  <i className="fas fa-heart" />
                  <button onClick={() => handleFavourite(item)}>Make Favourite</button>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Text onMouseOver={(e) => (e.target.style.display = 'block')} >
                  <i className="fas fa-heart" />
                  <button onClick={() => handleFavourite(item)}>Make Favourite</button>
                </Card.Text>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

      <Pagination className="justify-content-center">
        {data.totalResults > 10 && (
          <>
            {pageNumber > 1 && <Pagination.First onClick={() => handlePagination(1)} />}
            {pageNumber > 5 && <Pagination.Prev onClick={() => handlePagination(pageNumber - 1)} />}
            {Array.from({ length: Math.min(5, Math.ceil(data.totalResults / 10) - pageNumber + 1) }).map((_, i) => (
              <Pagination.Item key={i + pageNumber} active={i + pageNumber === pageNumber} onClick={() => handlePagination(i + pageNumber)}>
                {i + pageNumber}
              </Pagination.Item>
            ))}
            {pageNumber < Math.ceil(data.totalResults / 10) - 5 && <Pagination.Next onClick={() => handlePagination(pageNumber + 1)} />}
            {pageNumber < Math.ceil(data.totalResults / 10) && <Pagination.Last onClick={() => handlePagination(Math.ceil(data.totalResults / 10))} />}
          </>
        )}
      </Pagination>
    </div>
  )
}

export default Home