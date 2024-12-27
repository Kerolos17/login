import "./globals.css";
import MainLayout from "./MainLayout";
// import ScrollToTop from "./components/ButtomTop";
// import ChatModal from "./components/MesageModal";

export const metadata = {
  title: "DETAYLAR",
  description: "detaylar e-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body suppressHydrationWarning={true}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
