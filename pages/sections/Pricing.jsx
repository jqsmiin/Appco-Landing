import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PageTitle from '../components/PageTitle';

function Pricing() {
    const data = [
        {
            id: 1,
            years: '2 Years',
            price: '$03',
            list: ['Increase traffic 50%', 'E-mail support', '10 Free Optimization', '24/7 support']
        },
        {
            id: 2,
            years: '2 Years',
            price: '$06',
            list: ['Increase traffic 50%', 'E-mail support', '10 Free Optimization', '24/7 support']
        },
        {
            id: 3,
            years: '2 Years',
            price: '$09',
            list: ['Increase traffic 50%', 'E-mail support', '10 Free Optimization', '24/7 support']
        }
    ]
    return (
        <section id="pricing" className='mb-6'>
            <div className="overlay">
                <Container className='pricing-container'>
                    <PageTitle title={'Choose Your Very Best Pricing Plan.'} />
                    <Row>
                        {data.map(item => {
                            return (
                                <Col className={`item item-${item.id}`} sm={6} md={4} key={item.id}>
                                    <div className="item-container">
                                        <div className="price-container">
                                            <h3>{item.years}</h3>
                                            <h1>{item.price} <span>/ month</span></h1>
                                        </div>
                                        <div className="list">
                                            <ul>
                                                {item.list.map((list, i) => {
                                                    return (
                                                        <li key={i}>{list}</li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                        <button className='btn-2'>Get Started</button>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default Pricing
