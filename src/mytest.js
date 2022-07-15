const appConfig = require("@azure/app-configuration");

const client = new appConfig.AppConfigurationClient(
  "Endpoint=https://ssiappconfigurations.azconfig.io;Id=gVNn-l4-s0:V2l/aowqeFeQiwvq8PGN;Secret=ozfgPOa5SZYOwy5JiPX5/eiulh5f7OxIdeoTtC8iPCg="
);

async function run() {
  const newSetting = await client.setConfigurationSetting({
    key: "myclientkey",
    value: "meher chaitanya bandaru",
    // Labels allow you to create variants of a key tailored
    // for specific use-cases like supporting multiple environments.
    // https://docs.microsoft.com/azure/azure-app-configuration/concept-key-value#label-keys
    label: "optional-label",
  });

  let retrievedSetting = await client.getConfigurationSetting({
    key: "mynewkey",
  });

  console.log("Retrieved value:", retrievedSetting.value);
}

run().catch((err) => console.log("ERROR:", err));
