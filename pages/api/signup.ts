import { prisma } from "../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcrypt";

async function signup(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const hashedPassword = await hash(req.body.password, 12);
    const user = await prisma.user.create({
      select: { id: true, username: true, email: true },
      data: {
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      },
    });
    res.json(user);
  } else {
    console.log("Could not be created");
  }
}

export default signup;
