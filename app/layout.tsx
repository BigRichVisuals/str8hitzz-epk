 "use client";
 
 import { Authenticator } from "@aws-amplify/ui-react";
 import "@aws-amplify/ui-react/styles.css";
 import { Amplify } from "aws-amplify";
 import outputs from "../amplify_outputs.json";
 
 Amplify.configure(outputs);
 
 export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
     <html lang="en">
       <body>
         <Authenticator.Provider>
           {children}
         </Authenticator.Provider>
       </body>
     </html>
   );
 }
