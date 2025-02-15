import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

export const metadata = {
  title: "The Wild Oasis",
  description: "Welcome to paradise",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Logo />
        <Navigation />
        <main>{children}</main>
        <footer>Copyright by the wild oasis</footer>
      </body>
    </html>
  );
}
