import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image'
import mobile from '../images/appcomobile.webp'

function Hero() {

    return (
        <section id="hero" className='mb-6'>
            <Container>
                <Row>
                    <Col md={6} className='item-1'>
                        <h3 className='text-uppercase'>App Landing Page</h3>
                        <h1>Get things done with Appco</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores id cumque nulla vel officiis dolore sint aurode.</p>
                        <div className="button-container">
                            <button className='btn-0'>Download</button>
                            <button className='play-btn'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                            </svg></button>
                        </div>
                    </Col>
                    <Col md={6} className='item-2'>
                        <Image src={mobile} alt='App Phone' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hero
