import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image'
import Slider from "react-slick";
import app1 from '../images/App1.webp'
import app2 from '../images/App2.webp'
import app3 from '../images/App3.webp'

function Screens() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section id="screns" className='mb-6'>
            <Container>
                <Row>
                    <Col md={4} className='item-1'>
                        <h2>Applic Apps Screenshot</h2>
                        <p>Lorem ipsum dolor sit amet, consecadipiscing elit, sed do eiusmod tempor incididunt ut ore et dolore magna aliqua. Quis ipsum suspendisse gravida. Risus commodo viverra maecenasan lacus vel facilisis.</p>
                    </Col>
                    <Col md={8} className='item-2'>
                        <Slider {...settings}>
                            <div>
                                <Image src={app1} alt='Screen One' />
                            </div>
                            <div>
                                <Image src={app2} alt='Screen Two' />
                            </div>
                            <div>
                                <Image src={app3} alt='Screen Three' />
                            </div>
                            <div>
                                <Image src={app1} alt='Screen Four' />
                            </div>
                            <div>
                                <Image src={app2} alt='Screen Five' />
                            </div>
                            <div>
                                <Image src={app3} alt='Screen Six' />
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Screens
