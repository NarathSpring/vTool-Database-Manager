import Express from "express";

export async function getMethods(req: Express.Request, res: Express.Response) {
  console.log(req);

  res.json({ msg: "getMethod" });
}
