(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{339:function(a,t,s){"use strict";s.r(t);var r=s(0),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#权限"}},[a._v("#")]),a._v(" 权限")]),a._v(" "),s("h2",{attrs:{id:"用户与用户组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户与用户组"}},[a._v("#")]),a._v(" 用户与用户组")]),a._v(" "),s("p",[a._v("Linux 是一个多用户操作系统。")]),a._v(" "),s("h2",{attrs:{id:"用户管理命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户管理命令"}},[a._v("#")]),a._v(" 用户管理命令")]),a._v(" "),s("h2",{attrs:{id:"文件权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件权限"}},[a._v("#")]),a._v(" 文件权限")]),a._v(" "),s("p",[a._v("通过 "),s("code",[a._v("ls -l")]),a._v(" 命令可以查看文件列表，并显示文件的详细信息，其中就包括了文件的权限信息。\nZ")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("-rw-r--r-- "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" ubuntu ubuntu  "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3970")]),a._v(" Nov "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("16")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("18")]),a._v(":54 .bashrc\n")])])]),s("p",[a._v("上面各个字段的含义：")]),a._v(" "),s("p",[s("img",{attrs:{src:"pics/perms.png",alt:""}})]),a._v(" "),s("h4",{attrs:{id:"文档类型部分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文档类型部分"}},[a._v("#")]),a._v(" 文档类型部分")]),a._v(" "),s("p",[a._v("第一个字段的第一个字符表示的是文档的类型。")]),a._v(" "),s("ul",[s("li",[a._v("当为「d」时表示目录")]),a._v(" "),s("li",[a._v("当为「-」时表示文件")]),a._v(" "),s("li",[a._v("当为「l」时表示为链接文件（link file）")]),a._v(" "),s("li",[a._v("当为「c」时表示串行端口字符设备文件")]),a._v(" "),s("li",[a._v("当为「b」时表示可供存储的块设备，例如键盘、鼠标（一次性读取设备）。")])]),a._v(" "),s("h4",{attrs:{id:"权限-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#权限-2"}},[a._v("#")]),a._v(" 权限")]),a._v(" "),s("p",[a._v("接下来的字符中，以三个为一组，且均为 "),s("code",[a._v("rwx")]),a._v(" 的三个参数的组合。每个字符的含义分别为：「r」表示只读，即 read；「w」表示可写，即 write；「x」表示可执行，即 execute；「-」表示无此权限，即为空。")]),a._v(" "),s("p",[s("strong",[a._v("要注意的是，这三个权限的位置不会改变，如果没有权限，则表示为减号「-」。")])]),a._v(" "),s("p",[a._v("这三组字符由左到分别表示"),s("strong",[a._v("文件拥有者")]),a._v("，"),s("strong",[a._v("文件所属群组")]),a._v("，"),s("strong",[a._v("其他用户")]),a._v("对此文件的操作权限。")]),a._v(" "),s("h4",{attrs:{id:"文档链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文档链接"}},[a._v("#")]),a._v(" 文档链接")]),a._v(" "),s("p",[a._v("第二个字段显示的是文档的链接数，这个链接数就是硬链接的概念，即多少个文件指向同一个 inode。")]),a._v(" "),s("h4",{attrs:{id:"用户和用户组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户和用户组"}},[a._v("#")]),a._v(" 用户和用户组")]),a._v(" "),s("p",[a._v("第三和第四个字段分别表示这个文件的拥有者以及这个文件的所属群组。")]),a._v(" "),s("h4",{attrs:{id:"文件信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件信息"}},[a._v("#")]),a._v(" 文件信息")]),a._v(" "),s("p",[a._v("最后 3 个字段的含义很简单，分别表示文件大小（默认单位为Bytes），最后修改时间，文件名。如果文件名之前多一个“ . ”，则代表这个文件为隐藏文件。")]),a._v(" "),s("h2",{attrs:{id:"修改文件属性与权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改文件属性与权限"}},[a._v("#")]),a._v(" 修改文件属性与权限")]),a._v(" "),s("h3",{attrs:{id:"改变文件所属群组-chgrp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#改变文件所属群组-chgrp"}},[a._v("#")]),a._v(" 改变文件所属群组 - chgrp")]),a._v(" "),s("p",[s("code",[a._v("chgrp")]),a._v(" 是 change group 的缩写，当需改文件所属群组时，要被改变的群组名称必须要在 "),s("code",[a._v("/etc/group")]),a._v(" 文件内存在才行。")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chgrp")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-R"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" dirname/filename\n")])])]),s("h3",{attrs:{id:"改变文件拥有者-chown"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#改变文件拥有者-chown"}},[a._v("#")]),a._v(" 改变文件拥有者 - chown")]),a._v(" "),s("p",[s("code",[a._v("chown")]),a._v(" 是 change owner 的缩写，"),s("code",[a._v("chown")]),a._v(" 不仅可以修改文件的所属用户，也可以修改文件所属的群组，当需改文件所属用户时，要被改变用户必须要在 "),s("code",[a._v("/etc/passwd")]),a._v(" 文件中存在，同理，当需改文件所属群组时，要被改变的群组名称必须要在 "),s("code",[a._v("/etc/group")]),a._v(" 文件中存在。")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chown")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-R"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" 帐号名称:群组名称 文件或目录\n")])])]),s("h3",{attrs:{id:"改变文件的权限-chmod"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#改变文件的权限-chmod"}},[a._v("#")]),a._v(" 改变文件的权限 - chmod")]),a._v(" "),s("p",[a._v("文件权限的改变使用的是 "),s("code",[a._v("chmod")]),a._v(" 这个指令，权限的设置方法有两种，分别可以使用数字或者是符号来进行权限的变更。")]),a._v(" "),s("h4",{attrs:{id:"数字类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数字类型"}},[a._v("#")]),a._v(" 数字类型")]),a._v(" "),s("p",[a._v("Linux文件的基本权限就有九个，分别是 owner/group/others 三种身份各有自己的 read/write/execute 权限。其中，我们可以使用数字来代表各个权限，各权限的分数对照表如下："),s("code",[a._v("r:4, w:2, x:1")]),a._v("。每种身份（owner/group/others）各自的三个权限（r/w/x）分数是需要累加的，例如当权限为：[-rwxrwx---] 分数则是：")]),a._v(" "),s("ul",[s("li",[a._v("owner = rwx = 4+2+1 = 7")]),a._v(" "),s("li",[a._v("group = rwx = 4+2+1 = 7")]),a._v(" "),s("li",[a._v("others= --- = 0+0+0 = 0")])]),a._v(" "),s("p",[a._v("所以该文件的权限数字就是 770。")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("777")]),a._v(" .bashrc\n")])])]),s("h4",{attrs:{id:"符号类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#符号类型"}},[a._v("#")]),a._v(" 符号类型")]),a._v(" "),s("p",[a._v("基本语法")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("chomd "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-R"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" mode "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v("\n")])])]),s("p",[a._v("mode 是由一些表示操作对象，操作符号以及权限（rwx）的字符组成的：")]),a._v(" "),s("ul",[s("li",[a._v("u 表示「用户」（user），即文件或目录的所有者。")]),a._v(" "),s("li",[a._v("g 表示「用户组」（group），即文件或目录所属的用户组。")]),a._v(" "),s("li",[a._v("o 表示「其他用户」。（others）")]),a._v(" "),s("li",[a._v("a 表示「所有用户」（all）。它是系统默认值。")]),a._v(" "),s("li",[a._v("「+」表示添加某个权限。")]),a._v(" "),s("li",[a._v("「−」表示取消某个权限。")]),a._v(" "),s("li",[a._v("「=」表示赋予给定的权限，同时取消文档以前的所有权限。")])]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("u")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("rwx,go"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("rx .bashrc\n")])])]),s("h3",{attrs:{id:"相关文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关文章"}},[a._v("#")]),a._v(" 相关文章")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2011/12/inode.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("理解 inode"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);