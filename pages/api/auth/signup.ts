import { prisma } from "../../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcrypt";
import { sign } from "jsonwebtoken";

async function signup(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { username, password, email } = req.body;
      const hashedPassword = await hash(password, 12);
      const user = await prisma.user.create({
        select: { id: true, username: true, email: true },
        data: {
          username,
          password: hashedPassword,
          email,
        },
      });
      const payload = {
        id: user.id,
        username: user.username,
        email: user.email,
      };
      const jwt = sign(payload, "ndeaa", { expiresIn: "30m" });
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
    }
  }
}

export default signup;
