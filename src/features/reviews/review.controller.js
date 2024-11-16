import { AppError } from "../../middleware/errorHandler.middleware.js";

import ReviewRepository from "./review.repository.js";


export default class ReviewController{
    constructor(){
        this.reviewRepository = new ReviewRepository();
    }


    //======= ceate a review xcontroller ===//
    async createReviewController(req, res, next){
        try{
            const { organizationId,  userName,  review, text } = req.body;
            console.log("req.body: ", req.body);

           

            const result = await this.reviewRepository.createReviewToOrgainzation(organizationId,  userName,  review, text);

            if(result){
                return res.status(201).json(result);
            }


        }catch(error){
            next(error);
        }
    }


    //======== get all orgainzation review ==========//
    async getAllOrgainzationReview(req, res, next){
        try{
            const organizationId = req.params.organizationId;

            const result = await this.reviewRepository.getAllOrganizationReview(organizationId);

            if(result){
                return res.status(200).json(result);
            }

        }catch(error){
            next(error);
        }
    }


    //======== get a single review ==========//
    async getOneSingleReview(req, res, next){
        try{
            const reviewId = req.params.reviewId;

            const result = await this.reviewRepository.getSingleReview(reviewId);

            if(result){
                return res.status(200).json(result);
            }

        }catch(error){
            next(error);
        }
    }
}