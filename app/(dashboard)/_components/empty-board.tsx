import { Button } from "@/components/ui/button";
import Image from "next/image";

export const EmptyBoard = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Image src="/logo.svg" height={140} width={140} alt="Emtpy" />
      <h2 className="text-2xl font-semibold mt-6">Create your first board!</h2>
      <p className="text-muted-foreground textg-sm mt-2">
        Start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button className="lg">Create board</Button>
      </div>
    </div>
  );
};
