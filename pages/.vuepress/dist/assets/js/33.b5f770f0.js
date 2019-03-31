(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{272:function(e,r,a){"use strict";a.r(r);var t=a(2),s=Object(t.a)({},function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"docker-基础了解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-基础了解","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker 基础了解")]),e._v(" "),a("h2",{attrs:{id:"一，从问题出发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一，从问题出发","aria-hidden":"true"}},[e._v("#")]),e._v(" 一，从问题出发")]),e._v(" "),a("p",[e._v("了解 Docker 之前，我们需要明白 Docker 为什么会出现，以及 Docker 解决了什么类型的问题。")]),e._v(" "),a("p",[e._v("抽象来说，我们常用的各种服务，技术都可以简化成一个个不同的软件，如数据库可以是一个存储软件，Node 就是运行 JavaScript 的软件，Nginx 就是管理网络请求的软件。而我们可以将各种各样的软件结合起来，构成更为复杂的服务。")]),e._v(" "),a("p",[e._v("当开发完成后，我们需要将软件部署到服务器上提供对外的服务。如果有一台服务器，我们可以花上几个小时，装一下数据库，装一下 Nginx，配置好代理，再装个 Node，把我们的软件从 GitHub 上 clone 下来，安装依赖后，再运行起来，这是一个复杂的流程。但是当我们有十台，甚至更多的服务器时，你还会想一台一台去这样做吗？有些人可能会说，我可以写个脚本，执行一下，这的确可以解决部分问题。但是不可避免的，可能出现一些意外情况，比如执行失败，环境不同，需要执行的脚本可能也会不同，维护不同的脚本，运行环境也是一个很大的工作量。")]),e._v(" "),a("p",[e._v("环境不同，可以说是很多问题的根源。如果我们能把我们平时的开发环境打包，直接放到服务器上运行，那岂不是美滋滋。此时，就可以让我们今天的主角 - 容器出场了。哦，不，今天我们要讲的是 Docker。容器是一种比较宽泛的技术，Docker 只是容器技术中的一种。")]),e._v(" "),a("h2",{attrs:{id:"二，容器技术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二，容器技术","aria-hidden":"true"}},[e._v("#")]),e._v(" 二，容器技术")]),e._v(" "),a("p",[e._v("在广大人民群众的祈祷下，Linux 发展出了一种虚拟化技术：Linux 容器（Linux Containers，缩写为 LXC）。")]),e._v(" "),a("p",[e._v("Linux 容器不是模拟一个完整的操作系统，而是对进程进行隔离。或者说，在正常进程的外面套了一个保护层。对于容器里面的进程来说，它接触到的各种资源都是虚拟的，从而实现与底层系统的隔离。")]),e._v(" "),a("p",[e._v("由于容器是进程级别的，相比虚拟机有很多优势。")]),e._v(" "),a("ul",[a("li",[e._v("启动快\n"),a("blockquote",[a("p",[e._v("容器里面的应用，直接就是底层系统的一个进程，而不是虚拟机内部的进程。所以，启动容器相当于启动本机的一个进程，而不是启动一个操作系统，速度就快很多。")])])]),e._v(" "),a("li",[e._v("资源占用少\n"),a("blockquote",[a("p",[e._v("容器只占用需要的资源，不占用那些没有用到的资源；虚拟机由于是完整的操作系统，不可避免要占用所有资源。另外，多个容器可以共享资源，虚拟机都是独享资源。")])])]),e._v(" "),a("li",[e._v("体积小\n"),a("blockquote",[a("p",[e._v("容器只要包含用到的组件即可，而虚拟机是整个操作系统的打包，所以容器文件比虚拟机文件要小很多。")])])])]),e._v(" "),a("p",[e._v("容器有点像轻量级的虚拟机，能够提供虚拟化的环境，但是成本开销小得多。容器将软件打包成标准化单元，以用于开发、交付和部署。容器化软件适用于 Linux，Windows，macOS 等各种不同的操作系统，在任何环境中都能够始终如一地运行。容器赋予了软件独立性，使其免受外在环境差异（例如，开发和预演环境的差异）的影响，从而有助于减少团队间在相同基础设施上运行不同软件时的冲突。")]),e._v(" "),a("h3",{attrs:{id:"容器与虚拟机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器与虚拟机","aria-hidden":"true"}},[e._v("#")]),e._v(" 容器与虚拟机")]),e._v(" "),a("p",[e._v("传统虚拟机技术是虚拟出一套硬件后，在其上运行一个完整操作系统，在该系统上再运行所需应用进程。而容器内的应用进程直接运行于宿主的内核，容器内没有自己的内核，而且也没有进行硬件虚拟。因此容器要比传统虚拟机更为轻便。")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("容器是一个应用层抽象，用于将代码和依赖资源打包在一起。 多个容器可以在同一台机器上运行，共享操作系统内核，但各自作为独立的进程在用户空间中运行 。与虚拟机相比， 容器占用的空间较少（容器镜像大小通常只有几十兆），瞬间就能完成启动 。")])]),e._v(" "),a("li",[a("p",[e._v("虚拟机 (VM) 是一个物理硬件层抽象，用于将一台服务器变成多台服务器。 管理程序允许多个 VM 在一台机器上运行。每个 VM 都包含一整套操作系统、一个或多个应用、必要的二进制文件和库资源，因此 占用大量空间 。而且 VM 启动也十分缓慢 。")])])]),e._v(" "),a("h2",{attrs:{id:"三，docker-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三，docker-简介","aria-hidden":"true"}},[e._v("#")]),e._v(" 三，Docker 简介")]),e._v(" "),a("h3",{attrs:{id:"什么是-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-docker","aria-hidden":"true"}},[e._v("#")]),e._v(" 什么是 Docker")]),e._v(" "),a("p",[e._v("Docker 属于 Linux 容器的一种封装，提供简单易用的容器使用接口。Docker 在容器的基础上，进行了进一步的封装，从文件系统、网络互联到进程隔离等等，极大的简化了容器的创建和维护，使得 Docker 技术比虚拟机技术更为轻便、快捷。")]),e._v(" "),a("p",[e._v("Docker 能够自动执行重复性任务，例如搭建和配置开发环境，从而解放了开发人员以便他们专注在真正重要的事情上：构建杰出的软件。")]),e._v(" "),a("p",[e._v("用户可以方便地创建和使用容器，把自己的应用放入容器。容器还可以进行版本管理、复制、分享、修改，就像管理普通的代码一样。")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Docker 的历史")])]),e._v(" "),a("p",[e._v("Docker 最初是 dotCloud 公司创始人 Solomon Hykes 在法国期间发起的一个公司内部项目，它是基于 dotCloud 公司多年云服务技术的一次革新，并于 2013 年 3 月以 Apache 2.0 授权协议开源，主要项目代码在 GitHub 上进行维护。Docker 项 目后来还加入了 Linux 基金会，并成立推动 开放容器联盟（OCI）。")])]),e._v(" "),a("h3",{attrs:{id:"为什么要用-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要用-docker","aria-hidden":"true"}},[e._v("#")]),e._v(" 为什么要用 Docker")]),e._v(" "),a("p",[e._v("从前面，我们应该已经能理解 Docker 所带来的巨大优势，这里就总结概括一下：")]),e._v(" "),a("ul",[a("li",[e._v("高效的利用系统资源\n"),a("blockquote",[a("p",[e._v("由于容器不需要进行硬件虚拟以及运行完整操作系统等额外开销，Docker 对系统资源的利用率更高。无论是应用执行速度、内存损耗或者文件存储速度，都要比统虚拟机技术更高效。")])])]),e._v(" "),a("li",[e._v("一致的运行环境与隔离性\n"),a("blockquote",[a("p",[e._v("Docker 的镜像提供了除内核外完整的运行时环境，确保了应用运行环境一致性，能大大的减少因开发，测试，生产环境不同所导致的问题。\n同时，Docker 容器之间是互相隔离，不同的容器之间不会相互影响。")])])]),e._v(" "),a("li",[e._v("更快速的启动时间\n"),a("blockquote",[a("p",[e._v("可以做到秒级、甚至毫秒级的启动时间，大大的节约了开发、测试、部署的时间。")])])]),e._v(" "),a("li",[e._v("软件原型\n"),a("blockquote",[a("p",[e._v("Docker 可以在几毫秒内提供一个沙箱环境，能够让我们快速体验软件。")])])]),e._v(" "),a("li",[e._v("微服务\n"),a("blockquote",[a("p",[e._v("Docker 有助于将一个复杂的系统分解成一系列可组合的部分，让用户可以用更离散的方式来思考其服务，用户可以在不影响全局的情况下重组软件使其各部分更容易管理和可插拔。")])])]),e._v(" "),a("li",[e._v("更轻松的迁移，维护与扩展\n"),a("blockquote",[a("p",[e._v("可以很轻易的将在一个平台上运行的应用，迁移到另一个平台上，而不用担心运行环境的变化导致应用无法正常运行的情况。Docker 使用的分层存储以及镜像的技术，使得应用重复部分的复用更为容易，也使得应用的维护更新更加简单，基于基础镜像进一步扩展镜像也变得非常简单。")])])]),e._v(" "),a("li",[e._v("持续交付和部署\n"),a("blockquote",[a("p",[e._v("使用 Docker 可以通过定制应用镜像来实现持续集成、持续交付、部署。")])])])]),e._v(" "),a("h2",{attrs:{id:"四，安装-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四，安装-docker","aria-hidden":"true"}},[e._v("#")]),e._v(" 四，安装 Docker")]),e._v(" "),a("p",[e._v("这个就不赘述了，可以直接参考"),a("a",{attrs:{href:"https://docs.docker.com/docker-for-mac/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方文档"),a("OutboundLink")],1),e._v("。")]),e._v(" "),a("h2",{attrs:{id:"五，docker-的基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五，docker-的基本概念","aria-hidden":"true"}},[e._v("#")]),e._v(" 五，Docker 的基本概念")]),e._v(" "),a("p",[e._v("在使用 Docker 之前，我们需要了解 Docker 的一些基本概念：镜像，分层，容器，卷以及 Registry。")]),e._v(" "),a("h3",{attrs:{id:"镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#镜像","aria-hidden":"true"}},[e._v("#")]),e._v(" 镜像")]),e._v(" "),a("p",[e._v("镜像是构建 Docker 世界的基石，一个 Docker 镜像是由文件和元数据组成的特殊的文件系统。")]),e._v(" "),a("p",[e._v("镜像中的文件占用了大部分空间，包含了运行时所需要的语言环境和库等依赖。元数据包含了环境变量，端口映射，存储卷等配置。镜像不包含任何动态数据，其内容在构建之后也不会被改变。")]),e._v(" "),a("p",[e._v("打个比方，镜像就像是面向对象中的类一样，通过类可以创建许许多多的对象。镜像就是这样一种特殊的文件系统，通过镜像，我们可以创建很多容器，容器是运行的镜像实例，且彼此不互相影响。")]),e._v(" "),a("h3",{attrs:{id:"分层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分层","aria-hidden":"true"}},[e._v("#")]),e._v(" 分层")]),e._v(" "),a("p",[e._v("考虑到镜像文件的体积可能会十分庞大，Docker 设计时，就充分利用 Union FS 的技术（一种轻量级的高性能分层文件系统，支持将文件系统中的修改进行提交和层层叠加，这个特性使得镜像可以通过分层实现，同时支持将不同目录挂载到同一个虚拟文件系统下），将其设计为分层存储的架构。所以严格来说，镜像并非是像一个 ISO 那样的打包文件，镜像只是一个虚拟的概念，其实际体现并非由一个文件组成，而是由一组文件系统组成，或者说，由多层文件系统联合组成。")]),e._v(" "),a("p",[e._v("镜像构建时，会一层层构建，前一层是后一层的基础。每一层构建完就不会再发生改变，后一层上的任何改变只发生在自己这一层。比如，删除前一层文件的操作，实际不是真的删除前一层的文件，而是仅在当前层标记为该文件已删除。")]),e._v(" "),a("p",[e._v("分层存储的特征还使得镜像的复用、定制变的更为容易。甚至可以用之前构建好的镜像作为基础层，然后进一步添加新的层，以定制自己所需的内容，构建新的镜像。")]),e._v(" "),a("h3",{attrs:{id:"容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器","aria-hidden":"true"}},[e._v("#")]),e._v(" 容器")]),e._v(" "),a("p",[e._v("容器的实质是进程，但与直接在宿主执行的进程不同，容器进程运行于属于自己的独立的命名空间。容器可以拥有自己的文件系统、网络配置、进程空间，甚至自己的用户 ID 空间。")]),e._v(" "),a("p",[e._v("容器是从镜像中创建的，继承了它们的文件系统，并使用它们的元数据确定其启用配置。容器是相互分离的，但可以通过配置进行通信。")]),e._v(" "),a("p",[e._v("镜像和容器之间的关系就像程序和进程一样，一个进程可以视为一个被执行的应用程序，一个应用程序可以运行多次，产生不同的进程。")]),e._v(" "),a("h3",{attrs:{id:"卷（volumes）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卷（volumes）","aria-hidden":"true"}},[e._v("#")]),e._v(" 卷（Volumes）")]),e._v(" "),a("p",[e._v("卷是数据持久化的解决方案，是 Docker 用来管理容器生命周期外的文件的机制。用户并不总是想把数据放在容器中，他们可能会想要在多个容器之间共享部分文件或数据。卷就是这样一种解决方案，卷是容器的“数据”部分，在创建容器时初始化，卷允许你持久保存和共享容器中的数据。卷独立于默认的联合文件系统，作为普通目录和文件存在于宿主机文件系统中。因此，即使您销毁、更新或重建容器，卷也可以保持不变。当您想要更新卷时，可以直接对其进行更改。同时，卷可以在多个容器之间共享和重用，这带来了极大的便利。")]),e._v(" "),a("h3",{attrs:{id:"registry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#registry","aria-hidden":"true"}},[e._v("#")]),e._v(" Registry")]),e._v(" "),a("p",[e._v("镜像构建完成后，可以很容易的在当前宿主上运行，但是，如果需要在其它服务器上使用这个镜像，我们就需要一个集中的存储、分发镜像的服务，Docker Registry 就是这样的服务。")]),e._v(" "),a("p",[e._v("一个 Docker Registry 中可以包含多个仓库（Repository），每个仓库可以包含多个标签（Tag），每个标签对应一个镜像。所以说：Docker Registry 是 Docker 用来集中存放镜像文件的地方，类似于 GitHub。")]),e._v(" "),a("p",[e._v("Registry 分为公开的和私有的。Docker Registry 公开服务是开放给用户使用、允许用户管理镜像的 Registry 服务。一般这类公开服务允许用户免费上传、下载公开的镜像。最常使用的 Registry 公开服务是官方的 Docker Hub，这也是默认的 Registry，并 拥有大量的高质量的官方镜像。")]),e._v(" "),a("p",[e._v("由于某些原因，在国内访问 Docker Hub 可能会比较慢，这里贴心的提供了一些国内常用的加速服务：")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://cr.console.aliyun.com/cn-qingdao/mirrors",target:"_blank",rel:"noopener noreferrer"}},[e._v("阿里云加速器"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.daocloud.io/mirror#accelerator-doc",target:"_blank",rel:"noopener noreferrer"}},[e._v("DaoCloud 加速器"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://lug.ustc.edu.cn/wiki/mirrors/help/docker",target:"_blank",rel:"noopener noreferrer"}},[e._v("中科大加速器"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.docker-cn.com/registry-mirror",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker 中国官方镜像加速"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"六，构建一个-docker-应用程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六，构建一个-docker-应用程序","aria-hidden":"true"}},[e._v("#")]),e._v(" 六，构建一个 Docker 应用程序")]),e._v(" "),a("p",[e._v("实践出真知，一起来创建一个 Docker 应用程序吧。")]),e._v(" "),a("p",[e._v("从前面可以了解，镜像是 Docker 的基础。Docker 运行容器前需要本地存在对应的镜像，如果本地不存在该镜像，Docker 会从镜像仓库下载该镜像。我们可以使用官方镜像仓库中的众多已经存在的镜像，也可以自己创建新的镜像。")]),e._v(" "),a("h3",{attrs:{id:"获取镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取镜像","aria-hidden":"true"}},[e._v("#")]),e._v(" 获取镜像")]),e._v(" "),a("p",[e._v("从 Docker 镜像仓库获取镜像的命令是 "),a("code",[e._v("docker pull")]),e._v("，其命令格式为：")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker pull [选项] [Docker Registry 地址[:端口号]/]仓库名[:标签]\n# 例子：获取 docker-cn 中的 16.04 版本的 Ubuntu\ndocker pull registry.docker-cn.com/library/ubuntu:16.04\n")])])]),a("p",[e._v("具体的选项可以通过 "),a("code",[e._v("docker pull --help")]),e._v(" 命令看到。其中，Registry 地址可以省略，默认为官方仓库地址或设置的镜像源的地址，标签也可以省略，默认为 "),a("code",[e._v("latest")]),e._v("，即最新版本，如：")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker pull node\n")])])]),a("p",[e._v("从下载过程中可以看到我们之前提及的分层存储的概念，镜像是由多层存储所构成。下载也是一层层的去下载，并非单一文件。下载过程中给出了每一层的 ID 的 前 12 位。并且下载结束后，给出该镜像完整的 sha256 的摘要，以确保下载一 致性。")]),e._v(" "),a("h3",{attrs:{id:"编写-dockerfile-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写-dockerfile-文件","aria-hidden":"true"}},[e._v("#")]),e._v(" 编写 Dockerfile 文件")]),e._v(" "),a("p",[e._v("除了使用官方的镜像之外，我们也可以自己创建定制镜像。创建 Docker 镜像有 4 种标准的方式，这里我们主要讨论最为常见的一种方式：通过 Dockerfile 创建镜像。")]),e._v(" "),a("p",[e._v("Dockerfiele 是一个包含一系列顺序命令的文本文件，类似于 Shell 脚本，不同的是，Dockerfile 是针对于 Docker 的。Docker 可以通过读取 Dockerfile 中的指令自动构建镜像，Dockerfile 中的指令是有一定格式的，你可以通过"),a("a",{attrs:{href:"https://docs.docker-cn.com/engine/reference/builder/#usage",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方文档"),a("OutboundLink")],1),e._v("了解更多的指令。")]),e._v(" "),a("h4",{attrs:{id:"基础指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础指令","aria-hidden":"true"}},[e._v("#")]),e._v(" 基础指令")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("FROM - 指定基础镜像")]),e._v(" "),a("p",[e._v("所谓定制镜像，那一定是以一个镜像为基础，在其上进行定制。FROM 就是指定基础镜像，因此一个 Dockerfile 中 FROM 是必备的指令，并且必须是第一条指令。")])]),e._v(" "),a("li",[a("p",[e._v("RUN")]),e._v(" "),a("p",[e._v("RUN 指令使用来执行命令行命令的，比如 RUN "),a("code",[e._v("npm install")]),e._v("，由于命令行的强大能力，RUN 指令在定制镜像时是最常用的指令之一。")]),e._v(" "),a("p",[e._v("RUN 是镜像的构建步骤，运行命令后容器的状态将会发生改变。使用 RUN 时，Docker 会在原有的层上新建立一层，在其上执行这些命令，执行结束后，commit 这一层的修改，构成新的镜像。一个 Dockerfile 可以包含许多 RUN 命令，构成镜像的不同层。不过，我们不能无限制的建立层，层的数目是受限制的。")]),e._v(" "),a("p",[e._v("为了使 Dockerfile 更易读、易懂和可维护，\b\b 在遇到较长的 RUN 语句时，使用 \b 反斜杠 "),a("code",[e._v("\\")]),e._v(" \b 拆分。")]),e._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("RUN apt-get update && apt-get install -y \\\n    package-bar \\\n    package-baz \\\n    package-foo\n")])])])]),e._v(" "),a("li",[a("p",[e._v("CMD")]),e._v(" "),a("p",[e._v("CMD 指令用于指定容器的默认启动命令，通过 CMD 指定的启动命令可以被 "),a("code",[e._v("docker run")]),e._v(" 覆盖掉。在一个 Dockerfile 中，CMD 指令只能存在一个，如果存在多个的话，只有最后一个生效。")]),e._v(" "),a("p",[e._v("CMD 的使用格式：")]),e._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('CMD ["executable", "param1", "param2"…]\n# 例子\nCMD ["npm", "run", "dev"]\n')])])])]),e._v(" "),a("li",[a("p",[e._v("COPY")]),e._v(" "),a("p",[e._v("COPY 指令主要用于复制文件，可以将目标文件复制到容器的指定路径中，如：")]),e._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# 将当前目录下的 package.json 拷贝到容器中的 /usr/src/app/ 目录下\nCOPY package.json /usr/src/app/\n")])])])]),e._v(" "),a("li",[a("p",[e._v("EXPOSE")]),e._v(" "),a("p",[e._v("EXPOSE 指令声明了运行容器时所提供服务端口，允许外部链接这个端口，这只是一个声明，在运行时并不会因为这个声明应用就会开启这个端口的服务。可以这样理解，这个指令只是表明了某个端口可以使用，但是端口提供的服务是否可用则是不确定。")])])]),e._v(" "),a("h4",{attrs:{id:"例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子","aria-hidden":"true"}},[e._v("#")]),e._v(" 例子")]),e._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("FROM node:10.10.0\nCOPY . /app\nWORKDIR /app\nRUN npm install --registry=https://registry.npm.taobao.org\nEXPOSE 3000\n")])])]),a("p",[e._v("语句的含义：")]),e._v(" "),a("ul",[a("li",[e._v("FROM node:10.10.0：该 image 文件继承官方的 node image，冒号表示标签，这里标签是 10.10.0，即 10.10.0 版本的 node。")]),e._v(" "),a("li",[e._v("COPY . /app：将当前目录下的所有文件（除了.dockerignore 排除的路径），都拷贝进入 image 文件的/app 目录。")]),e._v(" "),a("li",[e._v("WORKDIR /app：指定接下来的工作路径为/app。")]),e._v(" "),a("li",[e._v("RUN npm install：在/app 目录下，运行 npm install 命令安装依赖。注意，安装后所有的依赖，都将打包进入 image 文件。")]),e._v(" "),a("li",[e._v("EXPOSE 3000：将容器 3000 端口暴露出来，允许外部连接这个端口。")])]),e._v(" "),a("h3",{attrs:{id:"创建镜像文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建镜像文件","aria-hidden":"true"}},[e._v("#")]),e._v(" 创建镜像文件")]),e._v(" "),a("p",[e._v("有了 Dockerfile 文件以后，就可以使用 "),a("code",[e._v("docker build")]),e._v(" 命令创建 image 文件了。"),a("code",[e._v("docker build")]),e._v(" 使用起来比较简单，因为我们可以省略许多参数，通常情况只需要指定当前镜像的名字就可以了，甚至我们连名字都可以省略，不过不建议这么做，因为你可能无法分辨不同的 Docker 镜像。")]),e._v(" "),a("p",[e._v("如果你遇到了请求超时的情况，请更换使用国内的镜像源。")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# 使用当前文件夹下的 Dockerfile 创建一个名为 node-docker 的镜像\ndocker build node-docker\n")])])]),a("h3",{attrs:{id:"查看所有镜像文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看所有镜像文件","aria-hidden":"true"}},[e._v("#")]),e._v(" 查看所有镜像文件")]),e._v(" "),a("p",[e._v("当创建好镜像之后，我们可以查看当前所有的 Docker 镜像来确认我们的镜像是否创建成功。得益于 Docker CLI 的 RESTful API 设计，我们可以十分方便的查看所有镜像文件：")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# 列出所有 docker 镜像文件\ndocker images\n")])])]),a("h3",{attrs:{id:"启动容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动容器","aria-hidden":"true"}},[e._v("#")]),e._v(" 启动容器")]),e._v(" "),a("p",[e._v("下面就是启动我们的 Docker 应用程序的时刻了，在命令行使用 "),a("code",[e._v("docker run")]),e._v(" 指令从镜像创建一个容器：")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# 运行一个 node-docker 实例，\ndocker run -p 8000:3000 -d node-docker\n")])])]),a("p",[e._v("上面命令的各个参数含义如下：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("-p")]),e._v(" 参数：容器的 3000 端口映射到本机的 8000 端口。")]),e._v(" "),a("li",[a("code",[e._v("-d")]),e._v(" 参数：让容器在后台运行，而不是把输出的结果 (STDOUT) 打印到宿主机上面。")]),e._v(" "),a("li",[a("code",[e._v("node-docker")]),e._v("：镜像文件的名字（如果有标签，还需要提供标签，默认是 latest 标签）。")])]),e._v(" "),a("p",[e._v("容器启动后，我们可以通过 "),a("code",[e._v("docker ps")]),e._v(" 查看运行中的容器，也可以通过 "),a("code",[e._v("docker ps -a")]),e._v(" 查看所有的容器。")]),e._v(" "),a("h3",{attrs:{id:"关闭容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关闭容器","aria-hidden":"true"}},[e._v("#")]),e._v(" 关闭容器")]),e._v(" "),a("p",[e._v("我们可以使用 "),a("code",[e._v("docker stop")]),e._v(" 来终止一个运行中的容器，此外，当 Docker 容器中指定的应用终结时，容器也自动终止。")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker stop [containerID]\n# 例子，容器的 id 可以通过 docker ps 获取\ndocker stop c132e237c5c1\n")])])]),a("h3",{attrs:{id:"发布镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布镜像","aria-hidden":"true"}},[e._v("#")]),e._v(" 发布镜像")]),e._v(" "),a("p",[e._v("容器运行成功后，就确认了 image 文件的有效性。这时，我们就可以考虑把 image 文件分享到网上，让其他人使用。")]),e._v(" "),a("p",[e._v("首先，去 hub.docker.com 或 cloud.docker.com 注册一个账户。然后，用下面的命令登录。")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker login\n")])])]),a("p",[e._v("接着，为本地的 image 标注用户名和版本。")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker image tag [imageName] [username]/[repository]:[tag]\n# 实例\ndocker image tag node-docker:0.0.1 name/node-docker:0.0.1\n")])])]),a("p",[e._v("也可以不标注用户名，重新构建一下 image 文件。")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker image build -t [username]/[repository]:\n[tag] .\n")])])]),a("p",[e._v("最后，发布 image 文件。")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ docker image push [username]/[repository]:[tag]\n")])])]),a("p",[e._v("发布成功以后，登录 hub.docker.com，就可以看到已经发布的 image 文件。")]),e._v(" "),a("h2",{attrs:{id:"六，其他命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六，其他命令","aria-hidden":"true"}},[e._v("#")]),e._v(" 六，其他命令")]),e._v(" "),a("p",[e._v("docker 的主要用法就是上面这些，此外还有几个命令，也非常有用。")]),e._v(" "),a("h3",{attrs:{id:"_1-docker-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-docker-start","aria-hidden":"true"}},[e._v("#")]),e._v(" 1. docker start")]),e._v(" "),a("p",[e._v("前面的 "),a("code",[e._v("docker run")]),e._v(" 命令是新建容器，每运行一次，就会新建一个容器。同样的命令运行两次，就会生成两个一模一样的容器文件。如果希望重复使用容器，就要使用 "),a("code",[e._v("docker start")]),e._v(" 命令，它用来启动已经生成、已经停止运行的容器文件。")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ docker start [containerID]\n")])])]),a("h3",{attrs:{id:"_2-docker-kill"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-docker-kill","aria-hidden":"true"}},[e._v("#")]),e._v(" 2. docker kill")]),e._v(" "),a("p",[e._v("前面的 "),a("code",[e._v("docker stop")]),e._v(" 命令用来终止容器运行，相当于向容器里面的主进程发出 SIGTERM 信号，然后过一段时间再发出 SIGKILL 信号。而 "),a("code",[e._v("docker kill")]),e._v(" 命令也可以终止容器运行，相当于向容器里面的主进程发出 SIGKILL 信号。")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker kill [containerID]\n")])])]),a("p",[e._v("这两个信号的差别是，应用程序收到 SIGTERM 信号以后，可以自行进行收尾清理工作，但也可以不理会这个信号。如果收到 SIGKILL 信号，就会强行立即终止，那些正在进行中的操作会全部丢失。")]),e._v(" "),a("h3",{attrs:{id:"_3-docker-logs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-docker-logs","aria-hidden":"true"}},[e._v("#")]),e._v(" 3. docker logs")]),e._v(" "),a("p",[a("code",[e._v("docker logs")]),e._v(" 命令用来查看 docker 容器的输出，即容器里面 Shell 的标准输出。如果 "),a("code",[e._v("docker run")]),e._v(" 命令运行容器的时候，没有使用 -it 参数，就要用这个命令查看输出。")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker logs [containerID]\n")])])]),a("h3",{attrs:{id:"_4-docker-exec"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-docker-exec","aria-hidden":"true"}},[e._v("#")]),e._v(" 4. docker exec")]),e._v(" "),a("p",[a("code",[e._v("docker exec")]),e._v(" 命令用于进入一个正在运行的 docker 容器。如果 docker run 命令运行容器的时候，没有使用-it 参数，就要用这个命令进入容器。一旦进入了容器，就可以在容器的 Shell 执行命令了。")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker exec -it [containerID] /bin/bash\n")])])]),a("h3",{attrs:{id:"_5-docker-cp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-docker-cp","aria-hidden":"true"}},[e._v("#")]),e._v(" 5. docker cp")]),e._v(" "),a("p",[a("code",[e._v("docker cp")]),e._v(" 命令用于从正在运行的 Docker 容器里面，将文件拷贝到本机。下面是拷贝到当前目录的写法。")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker cp [containID]:[/path/to/file] .\n")])])]),a("h3",{attrs:{id:"结语"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结语","aria-hidden":"true"}},[e._v("#")]),e._v(" 结语")]),e._v(" "),a("p",[e._v("到这里，这篇文章算是结束了，简单的总结了 Docker 的入门知识，码字不易，可能存在错误的地方，欢迎指正。")]),e._v(" "),a("h3",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考文章")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://juejin.im/post/5b260ec26fb9a00e8e4b031a",target:"_blank",rel:"noopener noreferrer"}},[e._v("可能是把 Docker 的概念讲的最清楚的一篇文章"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker 入门教程"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://www.dockerinfo.net/1753.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker 联合文件系统 Union File System"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://nodejs.org/zh-cn/docs/guides/nodejs-docker-webapp/",target:"_blank",rel:"noopener noreferrer"}},[e._v("把一个 Node.js web 应用程序给 Docker 化"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://medium.freecodecamp.org/a-beginner-friendly-introduction-to-containers-vms-and-docker-79a9e3e119b",target:"_blank",rel:"noopener noreferrer"}},[e._v("A Beginner-Friendly Introduction to Containers, VMs and Docker"),a("OutboundLink")],1)])])])},[],!1,null,null,null);r.default=s.exports}}]);