import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectMongodb from "./src/config/connectMongodb.js";
import orgainzationRouter from "./src/features/organisation/organization.router.js";
import reviewRouter from "./src/features/reviews/review.router.js";


//===== creating the apps ========//
const app = express();


//==== parse the request boy data ==========//
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));


//======= setup routes =============//
app.use("/api/orgainzation", orgainzationRouter);

app.use("/api/reviews", reviewRouter);



//====== return the default routes response ============//
app.get("/", (req, res, next)=>{
    return res.status(200).json({message:"Welcome to bringjal customer review page"})
})


const port = process.env.PORT || 3200;

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
    connectMongodb();
})