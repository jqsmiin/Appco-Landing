import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'next/image';
import logo from '../images/logo.webp'


function Footer() {
    const data = [
        {
            id: 1,
            img: logo,
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.'
        },
        {
            id: 2,
            title: 'Quick Links',
            links: ['About', 'Features', 'Pricing', 'Download', 'Reviews']
        },
        {
            id: 3,
            title: 'Support',
            links: ['Report a bug', 'Privacy Policy', 'Terms & Conditions', 'Sitemap', 'FAQs']
        },
        {
            id: 4,
            title: 'Newsletter',
            paragraph: "Heaven fruitful doesn't over lesser in days. Appear",
            input: <input type="text" placeholder='Email Address' />,
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-check-fill" viewBox="0 0 16 16">
                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 1.59 2.498C8 14 8 13 8 12.5a4.5 4.5 0 0 1 5.026-4.47L15.964.686Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z" />
            </svg>
        }
    ]
    return (
        <footer id="main-footer">
            <Container>
                <Row>
                    {data.map(item => {
                        return (
                            <Col md={4} xl={3} key={item.id} className={`item-${item.id} item`}>
                                {item.img ? <Image src={item.img} alt='logo' /> : ''}
                                {item.title ? <h3>{item.title}</h3> : ''}
                                {item.paragraph ? <p>{item.paragraph}</p> : ''}
                                {item.links ? <ul>
                                    {item.links.map((item, i) => {
                                        return (
                                            <li key={i}>{item}</li>
                                        )
                                    })}
                                </ul> : ''}
                                {item.input ? <div className="item-input">
                                    {item.input} <span>{item.icon}</span>
                                </div> : ''}
                            </Col>
                        )
                    })}
                    <p className='main-footer-p'>Copyright ©2022 All rights reserved.</p>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
