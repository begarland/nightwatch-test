// Refer to the online docs for more details:
// https://nightwatchjs.org/gettingstarted/configuration/
//

//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/

module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ["test", "nightwatch"],

  // See https://nightwatchjs.org/guide/concepts/page-object-model.html
  page_objects_path: [],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-commands.html
  custom_commands_path: [],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-assertions.html
  custom_assertions_path: [],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-plugins.html
  plugins: [],

  // See https://nightwatchjs.org/guide/concepts/test-globals.html
  globals_path: "",

  webdriver: {},

  test_workers: {
    enabled: true,
  },

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: "http://localhost",

      screenshots: {
        enabled: false,
        path: "screens",
        on_failure: true,
      },

      desiredCapabilities: {
        browserName: "chrome",
      },

      webdriver: {
        start_process: true,
        server_path: "",
      },
    },

    safari: {
      desiredCapabilities: {
        browserName: "safari",
        alwaysMatch: {
          acceptInsecureCerts: false,
        },
      },
      webdriver: {
        start_process: true,
        server_path: "",
      },
    },

    firefox: {
      desiredCapabilities: {
        browserName: "firefox",
        alwaysMatch: {
          acceptInsecureCerts: true,
          "moz:firefoxOptions": {
            args: [
              // '-headless',
              // '-verbose'
            ],
          },
        },
      },
      webdriver: {
        start_process: true,
        server_path: "",
        cli_args: [
          // very verbose geckodriver logs
          // '-vv'
        ],
      },
    },

    chrome: {
      desiredCapabilities: {
        browserName: "chrome",
        "goog:chromeOptions": {
          // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
          //
          // w3c:false tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
          w3c: true,
          args: [
            //'--no-sandbox',
            //'--ignore-certificate-errors',
            //'--allow-insecure-localhost',
            //'--headless'
          ],
        },
      },

      webdriver: {
        start_process: true,
        server_path: "",
        cli_args: [
          // --verbose
        ],
      },
    },

    "android.real.firefox": {
      desiredCapabilities: {
        real_mobile: true,
        browserName: "firefox",
        acceptInsecureCerts: true,
        "moz:firefoxOptions": {
          args: [
            // '-headless',
            // '-verbose'
          ],
          androidPackage: "org.mozilla.firefox",
          // add the device serial to run tests on, if multiple devices are online
          // Run command: `$ANDROID_HOME/platform-tools/adb devices`
          // androidDeviceSerial: 'ZD2222W62Y'
        },
      },
      webdriver: {
        start_process: true,
        server_path: "",
        cli_args: [
          // very verbose geckodriver logs
          // '-vv'
        ],
      },
    },

    "android.emulator.firefox": {
      desiredCapabilities: {
        real_mobile: false,
        avd: "nightwatch-android-11",
        browserName: "firefox",
        acceptInsecureCerts: true,
        "moz:firefoxOptions": {
          args: [
            // '-headless',
            // '-verbose'
          ],
          androidPackage: "org.mozilla.firefox",
          // add the device serial to run tests on, if multiple devices are online
          // Run command: `$ANDROID_HOME/platform-tools/adb devices`
          // androidDeviceSerial: 'ZD2222W62Y'
        },
      },
      webdriver: {
        start_process: true,
        server_path: "",
        cli_args: [
          // very verbose geckodriver logs
          // '-vv'
        ],
      },
    },

    "android.real.chrome": {
      desiredCapabilities: {
        real_mobile: true,
        browserName: "chrome",
        "goog:chromeOptions": {
          // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
          //
          // w3c:false tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
          w3c: true,
          args: [
            //'--no-sandbox',
            //'--ignore-certificate-errors',
            //'--allow-insecure-localhost',
            //'--headless'
          ],
          androidPackage: "com.android.chrome",
          // add the device serial to run tests on, if multiple devices are online
          // Run command: `$ANDROID_HOME/platform-tools/adb devices`
          // androidDeviceSerial: ''
        },
      },

      webdriver: {
        start_process: true,
        server_path: "",
        cli_args: [
          // --verbose
        ],
      },
    },

    "android.emulator.chrome": {
      desiredCapabilities: {
        real_mobile: false,
        avd: "nightwatch-android-11",
        browserName: "chrome",
        "goog:chromeOptions": {
          // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
          //
          // w3c:false tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
          w3c: true,
          args: [
            //'--no-sandbox',
            //'--ignore-certificate-errors',
            //'--allow-insecure-localhost',
            //'--headless'
          ],
          androidPackage: "com.android.chrome",
          // add the device serial to run tests on, if multiple devices are online
          // Run command: `$ANDROID_HOME/platform-tools/adb devices`
          // androidDeviceSerial: ''
        },
      },

      webdriver: {
        start_process: true,
        // path to chromedriver executable which can work with the factory
        // version of Chrome mobile browser on the emulator (version 83).
        server_path: "chromedriver-mobile/chromedriver",
        cli_args: [
          // --verbose
        ],
      },
    },

    "ios.real.safari": {
      desiredCapabilities: {
        browserName: "safari",
        platformName: "iOS",
        // add udid of the device to run tests on (necessary)
        // Run command: `xcrun xctrace list devices`
        // 'safari:deviceUDID': '00008030-00024C2C3453402E',
      },

      webdriver: {
        start_process: true,
        server_path: "",
        cli_args: [
          // --verbose
        ],
      },
    },

    "ios.simulator.safari": {
      desiredCapabilities: {
        browserName: "safari",
        platformName: "iOS",
        "safari:useSimulator": true,
        // To find the available deviceName/platformName to run tests on,
        // run command: `xcrun simctl list devices`
        "safari:platformVersion": "15.2",
        "safari:deviceName": "iPhone 13",
      },

      webdriver: {
        start_process: true,
        server_path: "",
        cli_args: [
          // --verbose
        ],
      },
    },
  },
};
