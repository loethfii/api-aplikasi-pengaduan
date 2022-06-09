import mongoose from "mongoose";

const MasterKontrakan = mongoose.Schema({
    no_kontrakan : {
        type : String,
        required : true
    }
},{timestamps : true})
// ,{timestamps : true}

export default mongoose.model('masterkontrakans', MasterKontrakan)