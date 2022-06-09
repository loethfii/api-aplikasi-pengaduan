import User from "../models/UserModel.js";

export const GetUsers = async(req, res) =>{
    try {
        const user = await User.find()
        res.json(user)
    } 
    catch (error) {
        res(404).json({message : error.message})
    }
}
//cari dengan id
export const GetUserById = async(req, res)=>{
    try{
        const userbyid = await User.findById(req.params.id)
        res.json(userbyid)
    }
    catch (error){
        res.status(404).json({message : error.message})
    }
}

//input data
export const SaveUser = async (req,res) =>{
    const user = new User(req.body)
    try{
        const inserteduser = await user.save()
        res.status(201).json(inserteduser)
    }
    catch (error){
        res.status(400).json({message : error.message})
    }
} 

//update data user
export const EditUser = async (req,res)=> {
    try{
        const updateduser = await User.updateOne({_id:req.params.id},{$set: req.body})
        res.status(200).json(updateduser)
    }
    catch{
        res.status(400).json({message : error.message})
    }
}

//delete user
export const DeleteUser = async(req,res)=>{
    try{
        const deleteduser = await User.deleteOne({_id : req.params.id})
        res.status(201).json(deleteduser)
    }
    catch (error){
        res.status(400).json({messege : error.message})
    }
}