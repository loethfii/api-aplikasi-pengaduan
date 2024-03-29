import mongoose from "mongoose";

const Komplain = mongoose.Schema(
  {
    nama_penyewa: {
      type: String,
    },
    no_kontrakan: {
      type: String,
    },
    nama_kendala: {
      type: String,
      // required : true,
    },
    nama_kendala_lain: {
      type: String,
      // required : true,
    },
    bukti_foto1: {
      type: String,
      // required : true,
    },
    bukti_foto2: {
      type: String,
      // required : true,
    },
    bukti_foto3: {
      type: String,
      // required : true,
    },
    bukti_vidio: {
      type: String,
      // required : true,
    },
    deskripsi: {
      type: String,
      // required : true,
    },
    status_pengerjaan: {
      type: String,
      // required : true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("komplains", Komplain);
