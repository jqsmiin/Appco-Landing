import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Contact() {
    return (
        <section id="contact">
            <Container>
                <Row>
                    <Col md={6} className='item-1'>
                        <h1>Say Hello To The Collaboration Hub.</h1>
                    </Col>
                    <Col md={6} className='item-2'>
                        <button className='btn-0'>Contact Us</button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact
