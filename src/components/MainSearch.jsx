import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Job from './Job';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { jobGet } from '../redux/actions';

const MainSearch = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const job = useSelector(state => state.job.jobList);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(jobGet(query));
  }

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
          <Button onClick={() => navigate('/preferiti')}>Favorites</Button>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {job.map((data) => (
            <Job key={data._id} data={data} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default MainSearch;