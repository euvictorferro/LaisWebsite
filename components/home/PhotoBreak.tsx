import Image from 'next/image';

export function PhotoBreak() {
  return (
    <div className="relative h-[70vh] w-full overflow-hidden">
      <Image
        src="/brand/lais-photo-break.jpg"
        alt="Laís Daltrozo"
        fill
        className="object-cover object-top"
      />
    </div>
  );
}
