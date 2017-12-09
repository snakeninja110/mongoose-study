# Mongoose学习笔记

需要node和MongoDB环境

### Mac 安装MongoDB

```javascript
brew update

brew install mongodb
```

安装完成后命令行会有提示

第一次启动前需要做一些准备工作：

1. 默认mongodb 数据文件是放到根目录 data/db 文件夹下,如果没有这个文件,请自行创建

```
mkdir -p /data/db

如果提示没有权限就使用

sudo mkdir -p /data/db
```

2. 系统目录下需要读写权限，所以我把数据库改到了/User/目录下
3. 找到配置文件

```
/usr/local/etc/mongod.conf

systemLog:
  destination: file
  path: /usr/local/var/log/mongodb/mongo.log
  logAppend: true
storage:
  dbPath: /Users/你的系统名/work/data/db
net:
  bindIp: 127.0.0.1

```

**似乎配置文件改了也还是读取默认的/data/db路径**

4. 之后设置一下环境变量PATH

```
vi ~/.bash_profile
```

在配置文件里添加export PATH=<mongodb的安装目录>/bin:$PATH 如：

```
export PATH=/usr/local/Cellar/mongodb/3.4.10/bin:${PATH}

source ~/.bash_profile // 刷新环境变量
```

5. 然后通过命令行启动MongoDB：

```
mongod --dbpath /Users/系统名/work/data/db
```

*这里如果数据库路径默认就可以直接打mongd运行*



#####可能报错：

```
2016-11-06T15:30:54.279+0800 I CONTROL  [initandlisten] MongoDB starting : pid=1408 port=27017 dbpath=/data/db 64-bit host=XiaoL.local
2016-11-06T15:30:54.280+0800 I CONTROL  [initandlisten] db version v3.2.10
2016-11-06T15:30:54.280+0800 I CONTROL  [initandlisten] git version: 79d9b3ab5ce20f51c272b4411202710a082d0317
2016-11-06T15:30:54.280+0800 I CONTROL  [initandlisten] OpenSSL version: OpenSSL 1.0.2j  26 Sep 2016
2016-11-06T15:30:54.280+0800 I CONTROL  [initandlisten] allocator: system
2016-11-06T15:30:54.280+0800 I CONTROL  [initandlisten] modules: none
2016-11-06T15:30:54.280+0800 I CONTROL  [initandlisten] build environment:
2016-11-06T15:30:54.280+0800 I CONTROL  [initandlisten]     distarch: x86_64
2016-11-06T15:30:54.280+0800 I CONTROL  [initandlisten]     target_arch: x86_64
2016-11-06T15:30:54.280+0800 I CONTROL  [initandlisten] options: {}
2016-11-06T15:30:54.280+0800 I STORAGE  [initandlisten] exception in initAndListen: 98 Unable to create/open lock file: /data/db/mongod.lock errno:13 Permission denied Is a mongod instance already running?, terminating
2016-11-06T15:30:54.280+0800 I CONTROL  [initandlisten] dbexit:  rc: 100
```

应该是没有读写权限，加权限`sudo chown 系统名 /data/db`




## Build Setup

``` bash
# install dependencies
npm install
```