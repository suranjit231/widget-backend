import mongoose from "mongoose";



//======= connecting mongodb database ================//
export default async function connectMongodb(){
    try{
        await mongoose.connect(`${process.env.DB_URL}/widget`);

        console.log("mongodb is connected sucessfully");

    }catch(error){
        console.log("error in connecting mongodb database: ", error);
    }


}