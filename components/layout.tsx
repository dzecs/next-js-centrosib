// components/layout.js

import { Navbar } from "./Navbar";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
