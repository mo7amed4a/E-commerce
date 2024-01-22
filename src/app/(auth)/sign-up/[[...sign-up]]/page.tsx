import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return <div className="[&>div>.cl-card>div[class^='cl-interna']:hidden">
      <SignUp />
    </div>
}