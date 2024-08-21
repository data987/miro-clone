import Image from "next/image";

export const EmptyFavorites = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Image src="/favorites.svg" height={140} width={140} alt="Emtpy" />
      <h2 className="text-2xl font-semibold mt-6">No favorite board!</h2>
      <p className="text-muted-foreground textg-sm mt-2">Try favorite board</p>
    </div>
  );
};
