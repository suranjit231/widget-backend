
import reviewModel from "./reviewSchema.js";
import organisationModel from "../organisation/organizationSchema.js"
import { AppError } from "../../middleware/errorHandler.middleware.js";
 
export default class ReviewRepository{

    //======= create a new review =============//
    async createReviewToOrgainzation(organizationId,  userName,  review, text){
        try{

            const organization = await organisationModel.findOne({_id:organizationId});
            if(!organization){
                throw new AppError("orgainzation not found! " , 404);
            }


            const newReview = new reviewModel({
                organizationId:organizationId,
                userName:userName,
                review:Number(review),
                text:text

            });


            const savedReview = await newReview.save();

            organization.reviews.push(savedReview._id);

            const savedOrganization = await organization.save();


            return { success:true, message:"review is added", review:savedReview};


        }catch(error){
            throw error;
        }
    }


    //========= get all review ================//
    async getAllOrganizationReview(organizationId){
        try{

            const reviews = await reviewModel
            .find({ organizationId: organizationId })
            .populate("organizationId");

       
        return reviews || [];


        }catch(error){

            throw error;
        }

    }


    //====== get a single review ==============//
    async getSingleReview(reviewId){
        try{

            const review = await reviewModel.findOne({_id:reviewId});

            if(!review){
                throw new AppError("No review finds!", 404);
            }


            return { success:true, message:"review find successfully", review:review};

        }catch(error){
            throw error;
        }
    }
}