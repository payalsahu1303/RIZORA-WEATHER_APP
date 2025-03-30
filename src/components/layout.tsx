import type { PropsWithChildren } from "react";
import { Header } from "./header";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className=" bg-gradient-to-br from-background to-muted">
      <Header />
      <main className="container min-h-screen px-4 py-8 mx-auto">
        {children}
      </main>
      <footer className="border-t backdrop-blur supports-[backdrop-filter]:bg-background/60 py-12">
        <div className="container px-4 mx-auto text-center text-gray-200">
          <p>Made by Payal Sahu</p>
        </div>
      </footer>
    </div>
  );
}
