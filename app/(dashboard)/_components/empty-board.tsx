"use client";

import { api } from "@/convex/_generated/api";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useOrganization } from "@clerk/nextjs";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { toast } from "sonner";

export const EmptyBoard = () => {
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;

    mutate({
      orgId: organization.id,
      title: "Untitled",
    })
      .then((_) => {
        toast.success("Board created!");
      })
      .catch(() => toast.error("Failed to create board"));
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Image src="/logo.svg" height={140} width={140} alt="Emtpy" />
      <h2 className="text-2xl font-semibold mt-6">Create your first board!</h2>
      <p className="text-muted-foreground textg-sm mt-2">
        Start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button disabled={pending} onClick={onClick} className="lg">
          Create board
        </Button>
      </div>
    </div>
  );
};
