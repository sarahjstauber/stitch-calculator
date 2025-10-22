import "@testing-library/jest-dom";
import { rapidChange } from "./rapid_change";

describe("rapidChange", () => {
  it("should handle no chnange in stitch count", () => {
    const result = rapidChange({ startCount: 40, endCount: 40 });
    expect(result).toBeDefined();
    // expect(result.steps).toEqual([{ count: 40, change: "na" }]); // TODO: update for stitch type, i.e. "stitch: tks"
    // expect(result.repeats).toBe(1);
    expect(result.pattern).toBe("st40 (40 sts)"); // TODO: update for stitch type
    expect(result.description).toBe("stitch 40"); // TODO: update for crochet or knit
  });

  it("should handle when all stitches are decreases", () => {
    const result = rapidChange({ startCount: 44, endCount: 22 });
    expect(result).toBeDefined();
    // expect(result.steps).toEqual([{ count: 22, change: "dec" }]);
    // expect(result.repeats).toBe(1);
    expect(result.pattern).toBe("dec22 (22 sts)");
    expect(result.description).toBe("decrease 22");
  });

  it("should handle singular stitch increase", () => {
    const result = rapidChange({ startCount: 1, endCount: 2 });
    expect(result).toBeDefined();
    // expect(result.steps).toEqual([{ count: 1, change: "inc" }]);
    // expect(result.repeats).toBe(1);
    expect(result.pattern).toBe("inc (2 sts)");
    expect(result.description).toBe("increase 1");
  });

  it("should handle happy path increases", () => {
    const result = rapidChange({ startCount: 35, endCount: 56 });
    expect(result).toBeDefined();
    // expect(result.steps).toEqual([
    //   { count: 1, change: "na" },
    //   { count: 2, change: "inc" },
    //   { count: 1, change: "na" },
    //   { count: 1, change: "inc" },
    // ]);
    // expect(result.repeats).toBe(7);
    expect(result.pattern).toBe("(st, inc2, st, inc) ×7 (56 sts)");
    expect(result.description).toBe(
      "*[stitch 1, increase 2, stitch 1, increase 1], repeat from * 7 times total",
    );
  });

  it("should handle happy path decreases", () => {
    const result = rapidChange({ startCount: 56, endCount: 35 });
    // expect(result.steps).toEqual([
    //   { count: 1, change: "na" },
    //   { count: 2, change: "dec" },
    //   { count: 1, change: "na" },
    //   { count: 1, change: "dec" },
    // ]);
    // expect(result.repeats).toBe(7);
    expect(result.pattern).toBe("(st, dec2, st, dec) ×7 (35 sts)");
    expect(result.description).toBe(
      "*[stitch 1, decrease 2, stitch 1, decrease 1], repeat from * 7 times total",
    );
  });

  it("should handle more normal stitches than increases", () => {
    const result = rapidChange({ startCount: 28, endCount: 36 });
    expect(result).toBeDefined();
    // expect(result.steps).toEqual([
    //   { count: 3, change: "na" },
    //   { count: 1, change: "inc" },
    //   { count: 2, change: "na" },
    //   { count: 1, change: "inc" },
    // ]);
    // expect(result.repeats).toBe(4);
    expect(result.pattern).toBe("(st3, inc, st2, inc) ×4 (36 sts)");
    expect(result.description).toBe(
      "*[stitch 3, increase 1, stitch 2, increase 1], repeat from * 4 times total",
    );
  });

  it("should handle all but one stitch are decreses", () => {
    const result = rapidChange({ startCount: 43, endCount: 22 });
    expect(result).toBeDefined();
    // expect(result.steps).toEqual([
    //   { count: 1, change: "na" },
    //   { count: 21, change: "dec" },
    // ]);
    // expect(result.repeats).toBe(1);
    expect(result.pattern).toBe("st, dec21 (22 sts)");
    expect(result.description).toBe("stitch 1, decrease 21");
  });

  it("should handle lots more increases than normal stitches", () => {
    const result = rapidChange({ startCount: 63, endCount: 112 });
    expect(result).toBeDefined();
    // expect(result.steps).toEqual([
    //   { count: 1, change: "na" },
    //   { count: 4, change: "inc" },
    //   { count: 1, change: "na" },
    //   { count: 3, change: "inc" },
    // ]);
    // expect(result.repeats).toBe(7);
    expect(result.pattern).toBe("(st, inc4, st, inc3) ×7 (112 sts)");
    expect(result.description).toBe(
      "*[stitch 1, increase 4, stitch 1, increase 3], repeat from * 7 times total",
    );
  });

  it("should error when the difference is too great", () => {
    expect(() => rapidChange({ startCount: 20, endCount: 50 })).toThrow(
      "Cannot rapidly increase from 20 to 50 stitches with this calculator. Please try again with different numbers.",
    );
  });
});
