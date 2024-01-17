import { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Star, StarFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from 'react-redux';
import { addToFav, removeFav } from '../redux/actions';

const Job = ({ data, i }) => {
    const dispatch = useDispatch();
    const favContent = useSelector(state => state.fav.content);
    const isSelected = favContent.includes(data.title);
    const [selected, setSelected] = useState(isSelected);

    useEffect(() => {
        setSelected(isSelected);
    }, [isSelected]);

    const handleFavClick = () => {
        if (selected) {
            const indexToRemove = favContent.findIndex(title => title === data.title);
            dispatch(removeFav(indexToRemove));
        } else {
            dispatch(addToFav(data.title));
        }
        setSelected(!selected); 
    };

    return (
        <Row
            className="mx-0 mt-3 p-3"
            style={{ border: '1px solid #00000033', borderRadius: 4 }}
        >
            <Col xs={1} onClick={handleFavClick}>
                {selected ? (
                    <StarFill color="gold" size={25} className="mx-1" />
                ) : (
                    <Star color="gold" size={25} className="mx-1" />
                )}
            </Col>
            <Col xs={3}>
                <Link to={`/${data.company_name}`}>{data.company_name}</Link>
            </Col>
            <Col xs={8}>
                <a href={data.url} target="_blank" rel="noreferrer">
                    {data.title}
                </a>
            </Col>
        </Row>
    )
}

export default Job;