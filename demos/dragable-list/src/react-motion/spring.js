
import presets from './presets';

const defaultConfig = {
  ...presets.noWobble,
  precision: 0.01,
};

export default function spring(
  val,
  config,
) {
  return { ...defaultConfig, ...config, val };
}
