import { DeConfEngine } from "./engine.js";

const args = Deno.args || [];
const options = Object.fromEntries(
  args.map((x) => {
    const [key, value] = x.split("=");
    if (!value) return null;
    return [key, value];
  }).filter((x) => x),
);

const deconf = new DeConfEngine(options);
await deconf.init();

const output = await deconf.build();
if (output) {
  console.log(output);
}
