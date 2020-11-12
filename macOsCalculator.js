const wdio = require('webdriverio');
let Appium = require('appium');

const caps = {
    platformName: 'Mac',
    deviceName: "Mac",
    app: "Calculator"
};

async function main() {

  await Appium.main()

  const driver = await wdio.remote({
    protocol: "http",
    host: "localhost",
    port: 4723,
    path: "/wd/hub",
    capabilities: caps
  });

  await driver.setTimeout({ 'implicit': 8000 })

  const click = async (el) => {
    const element = await driver.$(el).catch(err => console.log(err));
    console.log(element);
    await driver.pause(9000)
    return element.click()
  }

  await click("one.png")

  await click("/AXApplication[@AXTitle='Calculator']/AXWindow[@AXIdentifier='_NS:473' and @AXSubrole='AXStandardWindow']/AXGroup[@AXIdentifier='_NS:511']/AXButton[@AXDescription='seven' and @AXIdentifier='_NS:111']")

  await click("/AXApplication[@AXTitle='Calculator']/AXWindow[@AXIdentifier='_NS:473' and @AXSubrole='AXStandardWindow']/AXGroup[@AXIdentifier='_NS:511']/AXButton[@AXDescription='eight' and @AXIdentifier='_NS:124']")

  await click("/AXApplication[@AXTitle='Calculator']/AXWindow[@AXIdentifier='_NS:473' and @AXSubrole='AXStandardWindow']/AXGroup[@AXIdentifier='_NS:511']/AXButton[@AXTitle='9' and @AXIdentifier='_NS:137']")

  await click("/AXApplication[@AXTitle='Calculator']/AXWindow[@AXIdentifier='_NS:473' and @AXSubrole='AXStandardWindow']/AXGroup[@AXIdentifier='_NS:511']/AXButton[@AXTitle='×' and @AXIdentifier='_NS:540']")

  await click("/AXApplication[@AXTitle='Calculator']/AXWindow[@AXIdentifier='_NS:473' and @AXSubrole='AXStandardWindow']/AXGroup[@AXIdentifier='_NS:511']/AXButton[@AXTitle='4' and @AXIdentifier='_NS:72']")

  await click("/AXApplication[@AXTitle='Calculator']/AXWindow[@AXIdentifier='_NS:473' and @AXSubrole='AXStandardWindow']/AXGroup[@AXIdentifier='_NS:511']/AXButton[@AXTitle='5' and @AXIdentifier='_NS:85']")

  await click("/AXApplication[@AXTitle='Calculator']/AXWindow[@AXIdentifier='_NS:473' and @AXSubrole='AXStandardWindow']/AXGroup[@AXIdentifier='_NS:511']/AXButton[@AXTitle='6' and @AXIdentifier='_NS:98']")

  await click("/AXApplication[@AXTitle='Calculator']/AXWindow[@AXIdentifier='_NS:473' and @AXSubrole='AXStandardWindow']/AXGroup[@AXIdentifier='_NS:511']/AXButton[@AXTitle='−' and @AXIdentifier='_NS:527']")

  await click("/AXApplication[@AXTitle='Calculator']/AXWindow[@AXIdentifier='_NS:473' and @AXSubrole='AXStandardWindow']/AXGroup[@AXIdentifier='_NS:511']/AXButton[@AXTitle='1' and @AXIdentifier='_NS:33']")

  await click("/AXApplication[@AXTitle='Calculator']/AXWindow[@AXIdentifier='_NS:473' and @AXSubrole='AXStandardWindow']/AXGroup[@AXIdentifier='_NS:511']/AXButton[@AXTitle='2' and @AXIdentifier='_NS:46']")

  await click("/AXApplication[@AXTitle='Calculator']/AXWindow[@AXIdentifier='_NS:473' and @AXSubrole='AXStandardWindow']/AXGroup[@AXIdentifier='_NS:511']/AXButton[@AXTitle='3' and @AXIdentifier='_NS:59']")

  await click("/AXApplication[@AXTitle='Calculator']/AXWindow[@AXIdentifier='_NS:473' and @AXSubrole='AXStandardWindow']/AXGroup[@AXIdentifier='_NS:511']/AXButton[@AXTitle='+' and @AXIdentifier='_NS:150']")

  await click("/AXApplication[@AXTitle='Calculator']/AXWindow[@AXIdentifier='_NS:473' and @AXSubrole='AXStandardWindow']/AXGroup[@AXIdentifier='_NS:511']/AXButton[@AXTitle='0' and @AXIdentifier='_NS:9']")

  await click("/AXApplication[@AXTitle='Calculator']/AXWindow[@AXIdentifier='_NS:473' and @AXSubrole='AXStandardWindow']/AXGroup[@AXIdentifier='_NS:511']/AXButton[@AXTitle='.' and @AXIdentifier='_NS:553']")

  await click("/AXApplication[@AXTitle='Calculator']/AXWindow[@AXIdentifier='_NS:473' and @AXSubrole='AXStandardWindow']/AXGroup[@AXIdentifier='_NS:511']/AXButton[@AXDescription='equals' and @AXIdentifier='_NS:514']")
}

main();

