

import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    organizationId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Orgainzation"

    },

    userName:{
        type:String,
        required:true

    },

    review:{
        type:Number
    },

    text:{
        type:String

    }

})


const reviewModel = mongoose.model("Review", reviewSchema);

export default reviewModel;