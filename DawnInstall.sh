#!/bin/bash

# 脚本保存路径
SCRIPT_PATH="$HOME/Linux.sh"

# 获取相对路径
relative_path=$(realpath --relative-to=/usr/share/zoneinfo /etc/localtime)
#echo "相对路径为: $relative_path"

# 创建 chromium 目录并进入
mkdir -p $HOME/chromium
cd $HOME/chromium
echo "已进入 chromium 目录"

# 创建 docker-compose.yaml 文件并启动的函数
function deploy_browser() {
    # 获取用户输入
    #read -p "请输入 CUSTOM_USER: " CUSTOM_USER
    #read -sp "请输入 PASSWORD: " PASSWORD
    echo

    # 创建 docker-compose.yaml 文件
    cat <<EOF > docker-compose.yaml
---
services:
  chromium:
    image: lscr.io/linuxserver/chromium:latest
    container_name: chromium
    security_opt:
      - seccomp:unconfined #optional
    environment:
      - CUSTOM_USER=FTSJ001
      - PASSWORD=Qazwsx
      - PUID=1000
      - PGID=1000
      - TZ=Europe/London
      - CHROME_CLI=https://chromewebstore.google.com/detail/dawn-validator-chrome-ext/fpdkjdnhkakefebpekbdhillbhonfjjp?hl=en-GB&utm_source=ext_sidebar #optional
    volumes:
      - /root/chromium/config:/config
    ports:
      - 3010:3000   #Change 3010 to your favorite port if needed
      - 3011:3001   #Change 3011 to your favorite port if needed
    shm_size: "1gb"
    restart: unless-stopped
EOF

    echo "docker-compose.yaml 文件已创建，内容已导入。"
    docker compose up -d
    echo "Docker Compose 已启动。"
}

# 卸载 节点 的函数
function uninstall_docker() {
    echo "正在停止 Docker..."
    # 停止 Docker 容器
    cd /root/chromium
    docker compose down

    # 删除 文件 目录
    rm -rf /root/chromium
    echo "节点已卸载完成。"
}

# 主菜单函数
function main_menu() {
    while true; do
        clear
        echo "脚本由大赌社区哈哈哈哈编写，推特 @ferdie_jhovie，免费开源，请勿相信收费"
        echo "如有问题，可联系推特，仅此只有一个号"
        echo "新建了一个电报群，方便大家交流：t.me/Sdohua"
        echo "部署浏览器后可挂Dawn、Functor Node、Gradient、Node pay等项目"
        echo "================================================================"
        echo "退出脚本，请按键盘 ctrl + C 退出即可"
        echo "请选择要执行的操作:"
        echo "1) 部署浏览器"
        echo "2) 卸载节点"
        echo "3) 退出"

        read -p "请输入选项: " choice

        case $choice in
            1)
                deploy_browser
                ;;
            2)
                uninstall_docker
                ;;
            3)
                echo "退出脚本。"
                exit 0
                ;;
            *)
                echo "无效选项，请重试。"
                ;;
        esac

        read -p "按任意键继续..."
    done
}

# 调用主菜单
deploy_browser
