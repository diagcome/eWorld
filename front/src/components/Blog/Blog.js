import * as React from "react"
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../Blog/Card/Card"
import PreloaderBig from "../PreloaderBig/PreloaderBig";
import { getBlog } from "../../actions/blog";
import "../Blog/Blog.scss"

class Blog extends React.Component {
    componentDidMount() {
        this.props.getDataBlog();
    }

    render() {
        return (
            <React.Fragment>
            <Container fluid={true} className="container__blog ">
                <Row>
                    <Col className= "container__blog__heading text-center">
                        <span className="container__blog__title text-uppercase">latest blog</span>
                    </Col>
                </Row>
            </Container>
                <Container fluid={true} className="container__blog">
                <Row>
                    {this.props.data && this.props.data.map((data) =>
                        <Col key={data._id}>
                            <Card
                                date={data.date}
                                title={data.title}
                                description={data.description.substring(0,100)+`...`}
                                image={data.images[0]}
                                id={data._id}
                            />
                        </Col>
                    )}
                </Row>
                    {this.props.isLoading&&<PreloaderBig/>}
                    {this.props.error && <h3 className="text-center container__blog__error">{this.props.error}</h3>}
            </Container>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({

    data: state.blog.blogItems,
    isLoading: state.blog.isLoading,
    error:state.blog.error


});
const mapDispatchToProps = (dispatch) => ({
    getDataBlog: () => dispatch(getBlog()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
