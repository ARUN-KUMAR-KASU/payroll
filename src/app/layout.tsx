import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
  // Ensure the path is correct
import { Box } from "@mui/material";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Box sx={{ display: 'flex' }}>
      <Navbar/>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8, // Adjust this value according to your Navbar height
          ml: 4,
        }}
      >
        {children}
      </Box>
    </Box>
      </body>
    </html>
  );
}