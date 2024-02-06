import "@testing-library/jest-dom";
import { generatePattern } from "./generatePattern.ts";

describe("generatePattern", () => {
  it("should handle no change in stitch count", () => {
    const output = generatePattern({
      changeType: "na",
      rowOneCount: 40,
      rowTwoCount: 40,
      stitchType: "tks",
    });
    expect(output.pattern).toBe("40tks (40)");
    expect(output.details).toBe("make 40 tunisian knit stitches");
  });

  it("should handle all decrease stitches", () => {
    const output = generatePattern({
      changeType: "dec",
      rowOneCount: 44,
      rowTwoCount: 22,
      stitchType: "rib",
    });
    expect(output.pattern).toBe("22dec (22)");
    expect(output.details).toBe("decrease 22 rows");
  });

  it("should handle singular stitch", () => {
    const output = generatePattern({
      changeType: "inc",
      rowOneCount: 1,
      rowTwoCount: 2,
      stitchType: "tks",
    });
    expect(output.pattern).toBe("inc (2)");
    expect(output.details).toBe("increase 1 tunisian knit stitch");
  });

  it("should handle happy path increase", () => {
    const output = generatePattern({
      changeType: "inc",
      rowOneCount: 35,
      rowTwoCount: 56,
      stitchType: "tss",
    });
    expect(output.pattern).toBe("(inc, tss, inc, tss, inc) ×7 (56)");
    expect(output.details).toBe(
      "*(increase 1, tunisian simple stitch 1, increase 1, tunisian simple stitch 1, increase 1), repeat from * 6 more times",
    );
  });

  it("should handle happy path decrease", () => {
    const output = generatePattern({
      changeType: "dec",
      rowOneCount: 56,
      rowTwoCount: 35,
      stitchType: "sc",
    });
    expect(output.pattern).toBe("(dec, sc, dec, sc, dec) ×7 (35)");
    expect(output.details).toBe(
      "*(decrease 1, single crochet 1, decrease 1, single crochet 1, decrease 1), repeat from * 6 more times",
    );
  });

  it("should handle different changes", () => {
    const output = generatePattern({
      changeType: "inc",
      rowOneCount: 40,
      rowTwoCount: 50,
      stitchType: "st",
    });
    expect(output.pattern).toBe("(inc, 3st) ×10 (50)");
    expect(output.details).toBe(
      "*(increase 1, stitch 3), repeat from * 9 more times",
    );
  });

  it("should handle more normal stitches than increases", () => {
    const output = generatePattern({
      changeType: "inc",
      rowOneCount: 28,
      rowTwoCount: 36,
      stitchType: "tr",
    });
    expect(output.pattern).toBe("(tr, inc, tr, inc, 3tr) ×4 (36)");
    expect(output.details).toBe(
      "*(treble crochet 1, increase 1, treble crochet 1, increase 1, treble crochet 3), repeat from * 3 more times",
    );
  });

  it("should handle big changes", () => {
    const output = generatePattern({
      changeType: "dec",
      rowOneCount: 43,
      rowTwoCount: 22,
      stitchType: "hdc",
    });
    expect(output.pattern).toBe("21dec, hdc (22)");
    expect(output.details).toBe("decrease 21, half double crochet 1");
  });

  it("should handle few decreases", () => {
    const output = generatePattern({
      changeType: "dec",
      rowOneCount: 30,
      rowTwoCount: 27,
      stitchType: "st",
    });
    expect(output.pattern).toBe("(dec, 8st) ×3 (27)");
    expect(output.details).toBe(
      "*(decrease 1, stitch 8), repeat from * 2 more times",
    );
  });

  it("should error changes that are too big", () => {
    const output = generatePattern({
      changeType: "inc",
      rowOneCount: 20,
      rowTwoCount: 50,
      stitchType: "tps",
    });
    expect(output.pattern).toBe("error!");
    expect(output.details).toBe(
      "20 tunisian purl stitches cannot be increased by 30 tunisian purl stitches over one row of work",
    );
  });
});
