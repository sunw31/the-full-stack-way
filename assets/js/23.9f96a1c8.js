(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{265:function(e,a,t){"use strict";t.r(a);var r=t(0),n=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("在安卓开发中，我们经常会在 "),t("code",[e._v("build.gradle")]),e._v("中引入各种各样的依赖辅助我们进行开发，如常用的 okhttp 请求 Library：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("dependencies {\n    implementation 'com.squareup.okhttp3:okhttp:3.12.1'\n}\n")])])]),e._v(" "),t("p",[e._v("如果我们开发了自己的通用 Library，怎么让别人可以这样使用，下面聊聊怎么将 Android Library 发布到 Jcenter。")]),e._v(" "),t("h2",{attrs:{id:"jcenter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jcenter"}},[e._v("#")]),e._v(" Jcenter")]),e._v(" "),t("p",[e._v("Jcenter是一个 "),t("a",{attrs:{href:"https://bintray.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bintray"),t("OutboundLink")],1),e._v(" 维护的 Maven 仓库，我们可以在 Android 项目根目录的 "),t("code",[e._v("build.gradle")]),e._v(" 中设置以下内容使用：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("buildscript {\n    repositories {\n        Jcenter()\n    }\n}\n\nallprojects {\n    repositories {\n        Jcenter()\n    }\n}\n")])])]),t("h2",{attrs:{id:"注册-bintray-账号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注册-bintray-账号"}},[e._v("#")]),e._v(" 注册 bintray 账号")]),e._v(" "),t("p",[e._v("在发布之前，先要注册 bintray 账号。")]),e._v(" "),t("p",[e._v("注册免费的开源账户请点击右边白色的文字，不要点击绿色按钮。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://xpic.devtoken.club/blog/2019-10-10-Xnip2019-10-10_19-51-24.png",alt:""}})]),e._v(" "),t("p",[e._v("填写好用户信息、邮箱后激活账户即可使用。")]),e._v(" "),t("p",[e._v("如果是个人发布 Library，直接新建仓库即可")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://xpic.devtoken.club/blog/2019-10-10-Xnip2019-10-10_20-00-20.png",alt:""}})]),e._v(" "),t("p",[e._v("如果是团队，可以先建立一个组织，在组织下操作。")]),e._v(" "),t("h2",{attrs:{id:"创建-maven-仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建-maven-仓库"}},[e._v("#")]),e._v(" 创建 maven 仓库")]),e._v(" "),t("p",[e._v("在创建 Library 之前，需要先创建仓库（Repository），Library 是在仓库之下的。按照如下示例，创建 maven 类型的仓库")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://xpic.devtoken.club/blog/2019-10-10-Xnip2019-10-10_20-04-12.png",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"创建-library"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建-library"}},[e._v("#")]),e._v(" 创建 Library")]),e._v(" "),t("p",[e._v("创建好 maven 仓库后，点击进入 maven 仓库，点击  "),t("code",[e._v("Add a Package")]),e._v("即可创建 Library，正常填写信息即可，在创建 Library 之前，可以先在 GitHub 上创建源代码仓库，在提交审核时需要。")]),e._v(" "),t("h2",{attrs:{id:"获取-api-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取-api-key"}},[e._v("#")]),e._v(" 获取 API Key")]),e._v(" "),t("p",[e._v("在 Edit Profile 中可以查看到 API Key，这里需要记录 API Key，在后面上传 Library 时会用到。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://xpic.devtoken.club/blog/2019-10-10-Xnip2019-10-10_20-15-11.png",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"使用-bintray-release-上传-library"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-bintray-release-上传-library"}},[e._v("#")]),e._v(" 使用 bintray-release 上传 Library")]),e._v(" "),t("p",[e._v("这里我们要使用 "),t("a",{attrs:{href:"https://github.com/novoda/bintray-release",target:"_blank",rel:"noopener noreferrer"}},[e._v("bintray-release:"),t("OutboundLink")],1),e._v(" 上传我们的 Library。")]),e._v(" "),t("p",[e._v("首要要添加插件，在项目根目录的 "),t("code",[e._v("build.gradle")]),e._v(" 中添加 classpath 信息")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("buildscript {\n    repositories {\n        Jcenter()\n    }\n\n    dependencies {\n        classpath 'com.novoda:bintray-release:<latest-version>'\n    }\n}\n")])])]),t("p",[e._v("然后在源代码 "),t("code",[e._v("build.gradle")]),e._v(" 中添加配置")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("apply plugin: 'com.android.library'\napply plugin: 'com.novoda.bintray-release' // android.library 后\n\nandroid {\n    compileSdkVersion 29\n    buildToolsVersion \"29.0.0\"\n    ...\n}\n\n// 设置 publish 信息\npublish {\n    userOrg = 'github' // 组织名称，个人同用户名\n    groupId = 'com.github.xxx'\n    artifactId = 'xxx-lib'\n    publishVersion = '1.0.0'\n    desc = 'lib desc'\n    website = 'https://xxx.com'\n}\n")])])]),t("p",[e._v("在 sync 完成后，在项目根目录运行下面的命令上传 Library 文件")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("./gradlew clean build bintrayUpload  -PbintrayUser=你的用户名  -PbintrayKey=这里填写刚刚保存的API Key -PdryRun=false\n")])])]),t("p",[e._v("如果提示 "),t("code",[e._v("BUILD SUCCESSFUL")]),e._v(" 即表示上传成功，就可以在你的仓库下看见上传的 Library。")]),e._v(" "),t("h2",{attrs:{id:"发布到-jcenter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布到-jcenter"}},[e._v("#")]),e._v(" 发布到 Jcenter")]),e._v(" "),t("p",[e._v("上传完 Library 后，我们需要把 Library 同步到 Jcenter，方便他人使用。进入 Library 页面，可以在 Actions 选项中找到 Add to Jcenter 选项，点击后，不用填写任何信息，提交，等待管理员审批即可。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://xpic.devtoken.club/blog/2019-10-10-Xnip2019-10-10_20-25-26.png",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[e._v("#")]),e._v(" 使用")]),e._v(" "),t("p",[e._v("最后我们就可以像文章首部提到的那样使用我们的 Library 了：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 添加 Jcenter 源\nbuildscript {\n    repositories {\n        Jcenter()\n    }\n}\n\nallprojects {\n    repositories {\n        Jcenter()\n    }\n}\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 添加依赖\ndependencies {\n\t  // 格式：implementation 'groupId:lib:version'\n    implementation 'com.squareup.okhttp3:okhttp:3.12.1'\n}\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);