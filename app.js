import express from "express";
import mongoose from "mongoose";
import cors from "cors";

//route Master Kendala
import MasterKendalaRoute from "./routes/MasterKendalaRoute.js";
// route Master Kontrakan
import MasterKontrakanRoute from "./routes/MasterKontrakanRoute.js";
//rote User
import UserRoute from "./routes/UserRoute.js";

//user komplain
import KomplainRoute from "./routes/user/KomplainRoute.js";

const port = process.env.PORT || 5000; //port backend
const app = express(); //Nyalain express di const app
//connect mongo db ke database e-complain
const uri =
  "mongodb+srv://luthfi:superroma99@cluster0.okybk.mongodb.net/e_complain_kontrakan?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//cek error db connection
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
//cek sukses ketika berhasil
db.once("open", () => console.log("Data base berhasil terhubung"));
//connect cors
app.use(cors());
app.use(express.json());

app.use(express.static("public"));

//connect ke Master kendala
app.use(MasterKendalaRoute);
//connect ke master kontrakan
app.use(MasterKontrakanRoute);
//connect ke user
app.use(UserRoute);

//conect ke komplain
app.use(KomplainRoute);

//nylain port 5000
app.listen(port, () => {
  console.log(`Koneksi berhasil silahkan akses di http://localhost:${port}`);
});
