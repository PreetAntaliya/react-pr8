import React, { useState } from 'react';
import data from '../data';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from '../components/Header';

const Home = () => {

    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);

    const filteredData = data.filter(movie => {
        const nameMatch = movie.name.toLowerCase().includes(search.toLowerCase());
        const categoryMatch = selectedCategory ? movie.category.toLowerCase() === selectedCategory.toLowerCase() : true;
        return nameMatch && categoryMatch;
    });

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const resetCategoryFilter = () => {
        setSelectedCategory(null);
    };

    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <input type="text" className='form-control w-25 mx-auto my-4' placeholder='Search here...' value={search} onChange={(e) => setSearch(e.target.value)} />
                </Row>
                <div>
                    <Button className='me-3' variant='success' onClick={() => handleCategoryClick('crime')}>Crime</Button>
                    <Button className='me-3' variant='success' onClick={() => handleCategoryClick('romance')}>Romance</Button>
                    <Button className='me-3' variant='success' onClick={() => handleCategoryClick('drama')}>drama</Button>
                    <Button className='me-3' variant='success' onClick={() => handleCategoryClick('action')}>action</Button>
                    <Button className='me-3' variant='success' onClick={() => handleCategoryClick('biography')}>biography</Button>
                    <Button className='me-3' variant='success' onClick={() => handleCategoryClick('adventure')}>adventure</Button>
                    <Button className='me-3' variant='success' onClick={() => handleCategoryClick('comedy')}>comedy</Button>
                    <Button className='me-3' variant='success' onClick={() => handleCategoryClick('family')}>family</Button>
                    <Button className='me-3' variant='light' onClick={resetCategoryFilter}>Reset</Button>
                </div>
            </Container>
            <Container>
                <Row>
                    {
                        filteredData.map((movie) => {
                            return (
                                <Col xs="3" className='movie_show my-3' key={movie.id}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={movie.img} width='280' height='400' />
                                        <Card.Body>
                                            <Card.Title className='txt_trunk'>{movie.name}</Card.Title>
                                            <Card.Text>
                                                <b>{movie.duration}</b> &nbsp;
                                                <i>
                                                    {movie.language}
                                                </i>
                                            </Card.Text>
                                            <Card.Text>
                                                <Button className='text-capitalizz' disabled variant="secondary">{movie.category}</Button>
                                            </Card.Text>
                                            <Card.Text>
                                                <h5>Imdb : <b>{movie.imdb}</b> </h5>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Home;
