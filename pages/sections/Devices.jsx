import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'next/image'
import btn1 from '../images/appbtn1.png'
import btn2 from '../images/app_btn2.webp'
import avaliable from '../images/available.png'


function Devices() {
    return (
        <section id="devices">
            <Container>
                <Row>
                    <Col md={6} className='item-1'>
                        <h1>Our App Available For Any Device Download now</h1>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fug.</p>
                        <div className="button-container">
                            <Image src={btn1} alt='Button 1' />
                            <Image src={btn2} alt='Button 2' />
                        </div>
                    </Col>
                    <Col md={6} className='item-2'>
                        <Image src={avaliable} alt='Avaliable scren' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Devices
