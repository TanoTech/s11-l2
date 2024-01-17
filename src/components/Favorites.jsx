import { Row, Col } from 'react-bootstrap';
import { StarFill } from "react-bootstrap-icons";
import { useSelector, useDispatch } from 'react-redux';
import { removeFav } from '../redux/actions';
import { Link } from 'react-router-dom';

const Favorites = () => {
    const fav = useSelector(state => state.fav.content);
    const dispatch = useDispatch();

    console.log('Preferiti:', fav); 

    const handleRemove = (index) => {
        dispatch(removeFav(index));
    };

    return (
        <Row>
            <Link to='/' className='btn btn-primary'>Back to search</Link>
            <Col sm={12}>
                {fav.length === 0 ? (
                    <h2>No item selected</h2>
                ) : (
                    <ul style={{ listStyle: 'none' }}>
                        {fav.map((job, i) => (
                            <li key={i} className="my-4">
                                <Row
                                    className="mx-0 mt-3 p-3"
                                    style={{ border: '1px solid #00000033', borderRadius: 4 }}
                                >
                                    <Col xs={1}>
                                        <StarFill color="gold"
                                            size={25}
                                            className="mx-1"
                                            onClick={() => handleRemove(i)}
                                        />
                                    </Col>
                                    <Col xs={8}>
                                        <p>{job}</p>
                                    </Col>
                                </Row>
                            </li>
                        ))}
                    </ul>
                )}
            </Col>
        </Row>
    );
};

export default Favorites;