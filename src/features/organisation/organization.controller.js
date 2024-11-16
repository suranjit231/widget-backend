
import { AppError } from "../../middleware/errorHandler.middleware.js";
import OrganizationRepositroy from "./organization.repository.js";


export default class OrgainzationController{

    constructor(){
        this.organizationRepository = new OrganizationRepositroy();
    }

    //====== create orgainzation ===============//
    async createOrganization(req, res, next){

        try{
            const { companyName, contactNumber } = req.body;

            if(!companyName || !contactNumber){
                throw new AppError("required fields missing");
            }

        const result = await this.organizationRepository.createOrganization(companyName, contactNumber);

        if(result){
            return res.status(200).json(result);
        }

        }catch(error){
            next(error);
        }
    }


    //======= function get all orgainzation ===========//
    async getAllOrganization(req, res, next){
        try{
            const result = await this.organizationRepository.getAllOrgainzation();

            if(result){
                return res.status(200).json(result);
            }

        }catch(error){
            next(error);
        }
    }


    //======= get one orgainzation ====================//
    async getOneOrgainzation(req, res, next){
        try{

            const orgainsationId = req.params.orgainsationId
            const result = await this.organizationRepository.getOneOrganization(orgainsationId);

            if(result){
                return res.status(200).json(result);
            }

        }catch(error){
            next(error);
        }
    }
}
