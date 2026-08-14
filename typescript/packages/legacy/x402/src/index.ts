export * from "./client";
export * from "./facilitator";

export const x402Version = 1;

console.warn(
  '[x402] DEPRECATED: "x402" is the x402 protocol v1 implementation and is frozen. ' +
    'Please migrate to "@x402/core" for x402 protocol v2 support: https://www.npmjs.com/package/@x402/core',
);
