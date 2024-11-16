
import express from "express";
import ReviewController from "./review.controller.js";

const reviewRouter = express.Router();
const reviewController = new ReviewController();




//======== create review router ==================//
reviewRouter.post("/createReview", (req, res, next)=>{
    reviewController.createReviewController(req, res, next);
    
});


//======== get all orgaization review ================//
reviewRouter.get("/getAllReview/:organizationId", (req, res, next)=>{
    reviewController.getAllOrgainzationReview(req, res, next);
});


//======== get one single review =====================//
reviewRouter.get("/getOneReview", (req, res, next)=>{
    reviewController.getOneSingleReview(req, res, next);
})


export default reviewRouter;