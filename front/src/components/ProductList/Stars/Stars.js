import React, {Component}  from 'react';
import {connect} from 'react-redux';

import {setStars} from '../../../actions/stars';

class Stars extends Component {

    constructor(props) {
        super(props);

        this.state = {
            star:0,
            startCount:0
        }
    }

    componentDidMount(){
        this.setState({
            star:this.props.star,
            startCount:this.props.startCount
        })
    }

    handleClickStar(event){
        
        const starCount = event.target.id.toString().slice(-1);
        this.props.setStarsAction(starCount, this.props._id);

        const localStar = (((this.state.star * this.state.startCount) + Number(starCount)) / (this.state.startCount +1))
        console.log(localStar)
        this.setState({
            star:Number(localStar),
            startCount:this.state.startCount +1
        })
    }

    render(){

        return(
            <React.Fragment>
                <p className="product-card_info_rating">
                <i id="star1" className={this.state.star > 0.5?"fa fa-star":"fa fa-star-o"} onClick={this.handleClickStar.bind(this)}></i>
                    <i id="star2" className={this.state.star >= 1.9?"fa fa-star":"fa fa-star-o"} onClick={this.handleClickStar.bind(this)}></i>
                    <i id="star3" className={this.state.star >= 2.9?"fa fa-star":"fa fa-star-o"} onClick={this.handleClickStar.bind(this)}></i>
                    <i id="star4" className={this.state.star >= 3.9?"fa fa-star":"fa fa-star-o"} onClick={this.handleClickStar.bind(this)}></i>
                    <i id="star5" className={this.state.star >= 4.6?"fa fa-star":"fa fa-star-o"} onClick={this.handleClickStar.bind(this)}></i>
                </p>
            </React.Fragment>   
        )
    }
}
   
const mapStateToProps = function (store) {
    return {
        stars:store.stars.stars
    }

};
const mapDispatchToProps = function (dispatch) {
    return {
        setStarsAction:(star, _id) => dispatch(setStars(star, _id)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Stars)