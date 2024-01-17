import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Job from './Job';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { jobGet } from '../redux/actions';

const CompanySearchResults = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const jobStore = useSelector(state => state.job ? state.job.jobList : []);

  useEffect(() => {
    if (params.companyName) {
      dispatch(jobGet(params.companyName));
    }
  }, [params.companyName, dispatch]);

  return (
    <Container>
      <Row>
        <Col>
          {jobStore.length > 0 && jobStore.map((data, i) => (
            <Job key={data._id} data={data} />
          ))}
          {jobStore.length === 0 && <div>Search for a Job</div>}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
