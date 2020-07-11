import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function LinkRow({ name, href, img, alt }) {
    return (
        <div>
            <div className="link-outer">
                <a href={href} target="_blank">
                    <Row>
                        <Col lg>
                            <img className="link-row-img" src={img} alt={alt}></img>
                        </Col>
                        <Col xl={10} lg>
                            <p className="link-row-p text-center">{name}</p>
                        </Col>
                        <Col lg>
                        </Col>
                    </Row>
                </a>
            </div>

            <style jsx>{`
                .link-outer {
                    background-color: #fff;
                    margin: 10px;
                    padding: 5px;
                }

                .link-row-img {
                    width: 50px;
                }

                @media only screen and (max-width: 768px) {
                    .link-row-img {
                        width: 75px;
                        display: block;
                        margin: auto;
                    }
                }

                @media only screen and (max-width: 425px) {
                    .link-row-img {
                        display: none;
                    }
                }

                .link-row-p {
                    color: #000;
                }
            `}
            </style>
        </div >
    )
}