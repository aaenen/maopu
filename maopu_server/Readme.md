## 1.maopu_server
### config
计算机系统配置;
### dao
写SQL的接口
### domain
和数据库对应关系的层
### service
公共服务系统
#### implement
实现包
### controller
控制层
### MaopuServerApplication
启动程序
### utils
存放工具类



## 2.resources
### mapper
写SQL接口的XML文件
### application.properties
配置端口和数据库的连接

## 3.Java中的名称命名规范
1. ==包名==：多单词组成时所有字母都小写：xxxyyyzzz
2. ==类名、接口名==：多单词组成时，所有单词的首字母大写：XxxYxxZzz
3. ==变量名、方法名==：多单词组成时，第一个单词的首字母大写，第二个单词开始每个单词首字母大写：xxxYyyZzz
4. ==常量名==：所有字母都大写，多单词时每个单词用下划线连接：XXX_YYY_ZZZ