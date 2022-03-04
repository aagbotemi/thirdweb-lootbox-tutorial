import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = '0x8f870A8fb80C8193f397Ef8b581aa9F37d98291d';
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log('Opening the pack...');
  const opened = await packModule.open('0');
  console.log('Opened the pack!');
  console.log(opened);
}

try {
  await main();
} catch (error) {
  console.error("Error opening the pack", error);
  process.exit(1);
}