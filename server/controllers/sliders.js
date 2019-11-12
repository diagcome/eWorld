const Slider = require("../db/models/Slider");
const mongoose = require("mongoose");

exports.addSlide = (req, res, next) => {
    const newSlide = new Slider({
        _id: new mongoose.Types.ObjectId(),
        imgUrl: req.body.imgUrl,
        product: req.body.product
    });

    newSlide
        .save()
        .then(slide => res.send(slide))
        .catch(error =>
            res
                .status(400)
                .json({
                    message: `Error happened on server: ${error}`
                })
        );
}



exports.updateSlide = (req, res, next) => {

};

exports.deleteSlide = (req, res, next) => { };

exports.getSlides = (req, res, next) => {
    Slider.find().then(slides => {
        res.status(200).json(slides)
    }).catch(error => res
        .status(400)
        .json({
            message: `Error happened on server: ${error}`
        })
    );
};
