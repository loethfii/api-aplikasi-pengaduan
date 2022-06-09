import express from "express";

import {
  getKomplains,
  getKomplainById,
  ajukanKomplain,
  prosesPengajuanKomplain,
} from "../../controllers/user/KomplainController.js";
import multer from "multer";
var storage = multer.diskStorage({
  destination: "public/",
  filename: function (req, file, cb) {
    //req.body is empty...
    //How could I get the new_file_name property sent from client here?
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });
const router = express.Router();

router.get("/komplain", getKomplains);
router.get("/komplain/:id", getKomplainById);
router.post(
  "/komplain",
  upload.fields([
    {
      name: "bukti_foto1",
    },
    {
      name: "bukti_foto2",
    },
    {
      name: "bukti_foto3",
    },
    {
      name: "bukti_vidio",
    },
  ]),
  ajukanKomplain
);
router.patch("/komplain/:id", prosesPengajuanKomplain);

export default router;
