"use client";

import IdCard3d from "./(components)/card-id-3d"
import CMD from "./(components)/cmd"

export default function CLIPage() {
  return (
    <div className="min-h-auto bg-black text-green-400 font-mono flex flex-col md:flex-row  border-t-1 border-b-1 border-green-500">
      <IdCard3d/>
      <CMD/>
    </div>
  );
}
