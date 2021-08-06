
const manager = require('./task/manager')
const getAllPkgs = require('./task/getAllPkgs')
const updateRelease = require('./task/updateRelease')
const dockerBuild = require('./task/dockerBuild')
manager
    .task(`解析所有包`, getAllPkgs)
    .task(`更新Release目录`, updateRelease)
    .task(`打包镜像`, dockerBuild)
    .start()

