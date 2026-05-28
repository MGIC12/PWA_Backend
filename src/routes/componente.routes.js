import { Router } from "express";
// import { PrismaClient } from "@prisma/client";

const router = Router();
// const prisma = new PrismaClient();

router.get("/componente", (req, res) => {
  //   const componentes = await prisma.componente.findMany();
  //   res.json(componentes);
  res.send("hola");
});

export default router;
