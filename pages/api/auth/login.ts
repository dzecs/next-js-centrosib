import { prisma } from "../../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

async function signup(
  req: NextApiRequest,
  res: NextApiResponse,
  user: { username: string }
) {
  if (req.method === "POST") {
    try {
      const { username, password } = req.body;
      const existingUser = await prisma.user.findUnique({
        where: {
          username: user.username,
        },
      });
      if (!username || !password) {
        res.status(400);
        throw new Error("Invalid login.");
      }
      if (!existingUser) {
        res.status(403);
        throw new Error("Invalid login.");
      }

      const validPassword = await compare(password, existingUser.password);
      if (!validPassword) {
        res.status(403);
        throw new Error("Invalid login.");
      }
      const payload = {
        id: existingUser.id,
        username: existingUser.username,
        email: existingUser.email,
      };
      const jwt = sign(payload, "ndeaa", { expiresIn: "30m" });
      res.json({ payload, authToken: jwt });
    } catch (error) {
      console.error(error);
    }
  }
}

export default signup;
