import express from "express";
import OrgainzationController from "./organization.controller.js";


const orgainzationRouter = express.Router();
const orgainzationController = new OrgainzationController();


//===== create company routes ======//
orgainzationRouter.post("/createOrganization", (req, res, next)=>{
    orgainzationController.createOrganization(req, res, next);
})


//====== get all company =========//
orgainzationRouter.get("/getAll", (req, res, next)=>{
    orgainzationController.getAllOrganization(req, res, next);
});


//===== get one orgainzation =========//
orgainzationRouter.get("/getOne/:orgainsationId", (req, res, next)=>{
    orgainzationController.getOneOrgainzation(req, res, next);
});


export default orgainzationRouter;