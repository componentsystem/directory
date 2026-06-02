"use client";

import { useState } from "react";
import Image from "next/image";

type SystemLogoProps = {
  name: string;
  logo?: string;
};

export function SystemLogo({ name, logo }: SystemLogoProps) {
  const [failed, setFailed] = useState(false);

  if (!logo || failed) {
    return <span>{name.charAt(0).toUpperCase()}</span>;
  }

  return (
    <Image
      src={logo}
      alt=""
      aria-hidden="true"
      width={24}
      height={24}
      className="h-6 w-6 object-contain opacity-75 grayscale transition-opacity group-hover:opacity-100 dark:invert"
      loading="lazy"
      unoptimized
      onError={() => setFailed(true)}
    />
  );
}
