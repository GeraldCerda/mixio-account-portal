import type {ReactNode} from "react";
import type {Metadata} from "next";
export const metadata:Metadata={title:{default:"Mixio | Intelligent Mixing",template:"%s | Mixio"},description:"Professional mixing and mastering, shaped to your track."};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="en"><body>{children}</body></html>}
