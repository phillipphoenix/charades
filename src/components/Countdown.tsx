"use client";

import { FC } from "react";

export type CountdownProps = {
  minutes: number;
  seconds: number;
};

export const Countdown: FC<CountdownProps> = ({ minutes, seconds }) => {
  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": minutes } as React.CSSProperties}></span>
        </span>
        min
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": seconds } as React.CSSProperties}></span>
        </span>
        sec
      </div>
    </div>
  );
};
