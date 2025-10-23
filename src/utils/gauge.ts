/**
 * Calculate stitch/row count for desired size based on gauge swatch
 * @param {object} props
 * @property {number} swatchSize - in cm
 * @property {number} swatchStitchCount - the number of stitches within swatchSize
 * @property {number} desiredSize - in cm
 */
export function countFromGauge(props: {
  swatchSize: number;
  swatchStitchCount: number;
  desiredSize: number;
}) {
  const stitchesPerCm = props.swatchStitchCount / props.swatchSize;
  const count = Math.round(stitchesPerCm * props.desiredSize);
  return count;
}
