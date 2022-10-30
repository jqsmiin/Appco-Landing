import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image'
import week from '../images/week.png'

function Features() {

    const data = [
        {
            id: 1,
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
            </svg>,
            title: 'Easy to Costomize',
            paragraph: 'Aorem psum olorsit amet ectetur adipiscing elit, sed dov.'
        },
        {
            id: 2,
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
            </svg>,
            title: 'Customer Support',
            paragraph: 'Aorem psum olorsit amet ectetur adipiscing elit, sed dov.'
        },
        {
            id: 3,
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
            </svg>,
            title: 'Extreme Security',
            paragraph: 'Aorem psum olorsit amet ectetur adipiscing elit, sed dov.'
        },
        {
            id: 4,
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
            </svg>,
            title: 'Creative Design',
            paragraph: 'Aorem psum olorsit amet ectetur adipiscing elit, sed dov.'
        }
    ]

    return (
        <section id="features" className='mb-6'>
            <Container>
                <Row>
                    <Col md={3} className='item-1'>
                        <Image src={week} alt='This week' />
                    </Col>
                    <Col md={9} className='item-2'>
                        <h2>Some of the best features Of Our App!</h2>
                        <div className="items">
                            {data.map(item => {
                                return (
                                    <div className="item" key={item.id}>
                                        <div className="icon">
                                            <button>
                                                {item.icon}
                                            </button>
                                        </div>
                                        <div className="text">
                                            <h3>{item.title}</h3>
                                            <p>{item.paragraph}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Features
