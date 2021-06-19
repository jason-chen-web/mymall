module.exports = {
  "presets": [
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [
    [
      "component",
      {
          // ui框架库的名称
        "libraryName": "element-ui",
      //   css主题名称
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
