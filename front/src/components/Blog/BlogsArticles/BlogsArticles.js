import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux"
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import {getBlogArticle} from "../../../actions/blog"
import './BlogsArticles.scss';
import PreloaderBig from "../../PreloaderBig/PreloaderBig";
class BlogsArticles extends Component {

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getDataArticle(id)
    }

    render() {
        const {title,images,description} = this.props.data

        return (

                    <Fragment>
                        <Header/>
                        <div className=" container-fluid">
                            <div className="row m-0 pr-3 pl-3">
                                <div className="col text-center justify-content-center container__headline">
                                    {title &&
                                    <h3 className=" container__headline container__headline-text  font-italic m-0 ">{title}</h3>
                                    }
                                </div>
                            </div>

                            <div className="row m-0">
                                <div className="col-xl-8 col-lg-12 container__column ">
                                    {images && <img className="container__img  "
                                         src={images[2]}
                                         alt="main_image"/>}
                                </div>

                                <div className="col-xl-4 col-lg-12 container__side-column text-center">
                                    {images && <img className="container__side-img img-fluid"
                                                 src={images[1]}
                                                 alt="asidePicture"/>
                                    }
                                    {description &&<p className="container__side-text">{description.substring(10,440)}</p>}
                                </div>
                                <div className="col-xl-12 container__description" dangerouslySetInnerHTML={{__html: description}}/>
                            </div>

                            {this.props.isLoading&&<PreloaderBig/>}
                            {this.props.error && <h3 className="text-center container__error">{this.props.error}</h3>}
                        </div>
                        <Footer/>
                    </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.blog.currentBlogDetails,
    isLoading: state.blog.isLoading,
    error: state.blog.error
});

const mapDispatchToProps = (dispatch) => ({
    getDataArticle: (id) => dispatch(getBlogArticle(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BlogsArticles))