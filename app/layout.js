import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";
import Analytics from "./_components/Analytics";
const inter = Outfit({ subsets: ["latin"] });
export const metadata = {
  title: "CoachAi | Create Your Customized Learning Path",
  description: "Easily generate tailored AI courses with our AI Course Generator tool. Customize your curriculum, explore various topics, and enhance your learning experience.",
  keywords: "AI courses, course generator, custom learning, artificial intelligence, online learning, educational tool",
  author: "Dheeraj Goswami", // Your name or organization
  }
 



export default function RootLayout({ children }) {
  return (
    <>
    
    <ClerkProvider>
    <Head>
          {/* SEO Metadata */}
          <title>{metadata.title}</title>
         

          {/* Twitter Meta Tags */}
        

          {/* Google AdSense Script */}
         
        </Head>
   <Analytics/>
    <html lang="en">
      <body className={inter.className}>{children}
    
      </body>
      
    </html>
    </ClerkProvider>
    </>
  );
}
