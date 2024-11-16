
import mongoose from "mongoose";

const organizationSchema = new mongoose.Schema({

    companyName:{
        type:String,
        required:true
    },

    contactNumber:{
        type:String,
        
    },

    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Review"
        }
    ]
})


const organisationModel = mongoose.model("Orgainzation", organizationSchema);

export default organisationModel;