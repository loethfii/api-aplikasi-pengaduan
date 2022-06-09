import mongoose from "mongoose";

const MasterKendala = mongoose.Schema(
  {
    nama_kendala: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      type: Object,
    },
  }
);

export default mongoose.model("masterkendalas", MasterKendala);
