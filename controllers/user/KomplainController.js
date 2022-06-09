import Komplain from "../../models/users/KomplainModel.js";
//tampilkan detail komplain
export const getKomplains = async (req, res) => {
  try {
    const komplains = await Komplain.find({}).sort({ _id: "desc" });
    for (const i in komplains) {
      const komplain = komplains[i];
      komplain["bukti_foto1"] = `http://localhost:5000/${komplain.bukti_foto1}`;
      komplain["bukti_foto2"] = `http://localhost:5000/${komplain.bukti_foto2}`;
      komplain["bukti_foto3"] = `http://localhost:5000/${komplain.bukti_foto3}`;
      komplain["bukti_vidio"] = `http://localhost:5000/${komplain.bukti_vidio}`;
    }
    res.json(komplains);
  } catch {
    res.status(500).json({ message: error.message });
  }
};

// tangkap komplain by id
export const getKomplainById = async (req, res) => {
  try {
    const komplain = await Komplain.findById(req.params.id);

    komplain["bukti_foto1"] = `http://localhost:5000/${komplain.bukti_foto1}`;
    komplain["bukti_foto2"] = `http://localhost:5000/${komplain.bukti_foto2}`;
    komplain["bukti_foto3"] = `http://localhost:5000/${komplain.bukti_foto3}`;
    komplain["bukti_vidio"] = `http://localhost:5000/${komplain.bukti_vidio}`;
    res.json(komplain);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// tambah pengajuan komplain
export const ajukanKomplain = async (req, res) => {
  try {
    const data = {
      bukti_foto1: req.files.bukti_foto1[0].originalname,
      bukti_foto2: req.files.bukti_foto2[0].originalname,
      bukti_foto3: req.files.bukti_foto3[0].originalname,
      bukti_vidio: req.files.bukti_vidio[0].originalname,
      deskripsi: req.body.deskripsi,
      nama_kendala: req.body.nama_kendala,
      nama_kendala_lain: req.body.nama_kendala_lain,
      status_pengerjaan: 1,
    };
    const komplain = new Komplain(data);
    const insertedpengajuankomplain = await komplain.save();
    res.status(201).json(insertedpengajuankomplain);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Edit data status pengajuan

export const prosesPengajuanKomplain = async (req, res) => {
  try {
    const proseskomplain = await Komplain.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(proseskomplain);
  } catch (error) {
    res.status(404).json({ massage: error.message });
  }
};
