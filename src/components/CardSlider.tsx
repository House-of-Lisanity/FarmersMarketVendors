import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function CardSlider({ children }: Props) {
  return (
    <div
      style={{
        overflowX: "auto",
        display: "flex",
        gap: "1rem",
        paddingBottom: "1rem",
      }}
    >
      {children}
    </div>
  );
}
