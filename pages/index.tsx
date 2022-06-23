import type { NextPage } from "next";
import { Navbar } from "../components/Navbar";
import { useSession, signIn, signOut } from "next-auth/react";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
    </>
  );
};

export default Home;
