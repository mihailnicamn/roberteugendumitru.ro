'use server'
import formidable from "formidable";
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false
  }
};

const savePlan = async (file: { path: string; name: string, projectId: string }) => {
  const data = fs.readFileSync(file.path);
  fs.writeFileSync(`./public/plans/${file.projectId}`, data);
  fs.unlinkSync(file.path);
  return;
}

const saveImage = async (file: formidable.File, projectId: string) => {
  if (!fs.existsSync('./public/images/' + projectId)) fs.mkdirSync('./public/images/' + projectId);
  const data = fs.readFileSync(file.filepath);
  fs.writeFileSync(`./public/plans/${projectId}`, data);
  fs.unlinkSync(file.filepath);
  return;
}

const saveManyImages = async (files: formidable.File[], projectId: string) => {
  await Promise.all(files.map((file) => saveImage(file, projectId)));
  return;
}

const removeImage = async (file: { name: string, projectId: string }) => {
  fs.unlinkSync(`./public/images/${file.projectId}/${file.name}`);
  return;
}
const getForm = async (req: NextApiRequest): Promise<{ fields: formidable.Fields, files: formidable.Files }> => {
  const form = new formidable.IncomingForm();
  return await new Promise((resolve, reject) => {
    form.parse(req, (err, fields: formidable.Fields, files: formidable.Files) => {
      if (err) reject(err);
      resolve({ fields, files } as { fields: formidable.Fields, files: formidable.Files });
    })
  })
}
const post = async (req: NextApiRequest, res: NextApiResponse) => {
  const { fields, files } = await getForm(req);
  const { images, plan } = files;
  const projectId = '123'
  if (Array.isArray(images)) {
    saveManyImages(images, projectId);
  } else if (images) {
    saveImage(images, projectId);
  }
  return res.status(201).send("");
};


export default async (req: NextApiRequest, res: NextApiResponse) => {
  'use server'
  switch (req.method) {
    case "POST":
      return await post(req, res);
    case "PUT":
      return console.log("PUT");
    case "DELETE":
      return console.log("DELETE");
    case "GET":
      return console.log("GET");
    default:
      return res.status(404).send("");
  }
};