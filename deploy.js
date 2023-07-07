const fs = require("fs")
const path = require('path')
const {NodeSSH} = require('node-ssh')
const chalk = require('chalk');

const config = require("./config.js") 

const ssh = new NodeSSH()

const files = fs.readdirSync("./bundles")
//去掉mac下的'.DS_Store'目录
const outputDirs = files.filter(item => item[0] != '.')

ssh.connect({
  host: config.host,
  username: config.user,
  password: config.pass
}).then(res => {
  if(res.connection) {
    console.log(chalk.bgRed('Server connected successfully'))
    outputDirs.forEach((item)=> {
      ssh.putDirectory(`./bundles/${item}`, config.path + `/${item}`, {
        recursive: true,
        concurrency: 10,
      }).then((_res)=> {
        console.log(chalk.bgGreenBright(`The directory ${item} transfer was`, _res ? 'successful' : 'unsuccessful'))
      })
    })
  }
})