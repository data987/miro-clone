"use client";

import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Hint } from "@/components/hint";

export const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <Hint label="Create Organization" side="right" sideOffset={18}>
            <button
              className="
              bg-white/25
              w-full
              h-full
              rounded-md
              flex
              justify-center
              items-center
              opacity-60
              hover:opacity-100
              transition
            "
            >
              <Plus className="text-white" />
            </button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Hola mundo</DialogTitle>
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};
