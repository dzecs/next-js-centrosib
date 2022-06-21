import { prisma } from "../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { compare } from "bcrypt";

async function signup(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const user: any = await prisma.user.findUnique({
      where: {
        email: req.body.email,
      },
    });
    const comparePassword = compare(req.body.password, user?.password);
  } else {
    console.log("Could not be created");
  }
}

export default signup;
