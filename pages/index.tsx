import type { NextPage } from "next";
import { Navbar } from "../components/Navbar";
import { useSession, signIn, signOut } from "next-auth/react";

const Home: NextPage = () => {
  return (
    <main className="w-screen">
      <Navbar />
      <h1>HOLA BBTOS</h1>
    </main>
  );
};

export default Home;
