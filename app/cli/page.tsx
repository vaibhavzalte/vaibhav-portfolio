"use client";

import IdCard3d from "./(components)/card-id-3d"
import CMD from "./(components)/cmd"
import FooterCMD from "./(components)/footer-cmd";
export default function CLIPage() {
  return (
    <div className="min-h-auto bg-black text-green-400 font-mono flex flex-col border-t-1  border-green-500">
     <div className="flex-1 flex flex-col md:flex-row">
        <IdCard3d />
        <CMD />
      </div>
      <FooterCMD/>
    </div>
  );
}
