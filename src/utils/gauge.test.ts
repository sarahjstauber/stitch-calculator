import "@testing-library/jest-dom";
import { countFromGauge } from "./gauge";

describe("countFromGauge", () => {
  it("should calculate desired stitches", () => {
    const result = countFromGauge({
      swatchSize: 10,
      swatchStitchCount: 22.5,
      desiredSize: 25,
    });
    expect(result).toBe(56);
  });

  it("should calculate desired rows", () => {
    const result = countFromGauge({
      swatchSize: 10,
      swatchStitchCount: 36,
      desiredSize: 15,
    });
    expect(result).toBe(54);
  });
});
