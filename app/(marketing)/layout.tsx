import type {ReactNode} from "react";
import {Header,Footer} from "@/components/mixio/Marketing";
import "./tokens.css";
import "./marketing.css";
export default function MarketingLayout({children}:{children:ReactNode}){return <div className="marketing-shell"><Header/><main id="main">{children}</main><Footer/></div>}
