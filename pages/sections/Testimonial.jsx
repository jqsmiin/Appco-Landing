import Container from 'react-bootstrap/Container';
import PageTitle from '../components/PageTitle';
import Slider from "react-slick";
import man1 from '../images/man1.png';
import man2 from '../images/man2.png';
import man3 from '../images/man3.png';
import Image from 'next/image';

function Testimonial() {
    const data = [
        {
            id: 1,
            icon: man1,
            title: 'Welcome To The Best Model Winner Contest',
            paragraph: 'Utenim ad minim veniam quisnostrud exercitation ullamcolabor nisiut aliquip ex ea commodo consequat duis aute irure dolor in represse.'
        },
        {
            id: 2,
            icon: man2,
            title: 'Welcome To The Best Model Winner Contest',
            paragraph: 'Utenim ad minim veniam quisnostrud exercitation ullamcolabor nisiut aliquip ex ea commodo consequat duis aute irure dolor in represse.'
        },
        {
            id: 3,
            icon: man3,
            title: 'Welcome To The Best Model Winner Contest',
            paragraph: 'Utenim ad minim veniam quisnostrud exercitation ullamcolabor nisiut aliquip ex ea commodo consequat duis aute irure dolor in represse.'
        },
        {
            id: 4,
            icon: man1,
            title: 'Welcome To The Best Model Winner Contest',
            paragraph: 'Utenim ad minim veniam quisnostrud exercitation ullamcolabor nisiut aliquip ex ea commodo consequat duis aute irure dolor in represse.'
        }
    ]
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: false,
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
        <section id="testimonial" className='mb-6'>
            <PageTitle title={'What Our Customers Have To Say'} />
            <Container>
                <Slider {...settings}>
                    {data.map(item => {
                        return (
                            <div key={item.id} className='item'>
                                <Image src={item.icon} alt='Man' />
                                <h3>{item.title}</h3>
                                <p>{item.paragraph}</p>
                            </div>
                        )

                    })}
                </Slider>
            </Container>
        </section>
    )
}

export default Testimonial
