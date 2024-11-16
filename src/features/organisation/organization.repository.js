
import { AppError } from "../../middleware/errorHandler.middleware.js";
import organisationModel from "./organizationSchema.js";


export default class OrganizationRepositroy{

    //======= create new organization ==============//
    async createOrganization(companyName, contactNumber ){
        try{

            const newOrganization = new organisationModel({
                companyName:companyName,
                contactNumber:contactNumber
            })


            const savedOrganization = await newOrganization.save();

            return { success:true, message:"orgainzation is created succesfully", organization:savedOrganization};


        }catch(error){
            throw error;
        }

    }


    //========= get all organization ============//
    async getAllOrgainzation(){
        try{

            const orgainzations = await organisationModel.find({});

            return {success:true, message:"orgainzation is ftched succesfully", orgainzations:orgainzations}


        }catch(error){
            throw error;
        }
    }


    //======== get orgainzation by id ==========//
    async getOneOrganization(orgainzationId){
        try{
            const orgainzation  = await organisationModel.findOne({_id:orgainzationId});

            if(!orgainzation){
                throw new AppError("orgainzation not found", 404)
            }

            return { success:true, message:"orgainzation fetch successfully", orgainzation:orgainzation};


        }catch(error){
            throw error;
        }

    }

}