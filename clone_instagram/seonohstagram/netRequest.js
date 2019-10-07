import utils from './utils'
import {ContentsModel} from './ContentsModel'


let axiosModule = require('axios')
let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE2NTkyIiwibGFuZyI6MSwib3MiOjEsImNvdW50cnk"
let order = 0
let page = 0
let category = -1

exports.getContents = async()=>{
    let result = '';
    let contentsList = [];
    try {
        result = await axiosModule(`https://api-dev.hanguowenwo.cn/api/v3/contents?wenwo-token=${token}&order=${order}&page=${page}&category=${category}`)

    } catch (err) {
        console.log(`networkRequest ERROR --->> ${err}`)
    }

    result = result['data']['contents'];

    for (let i = 0; i < result.length; i++) {
        console.log('test','@#@# : '+result[i]["contents-id"])
        let contentsItem = new ContentsModel(
            result[i]["contents-id"],
            result[i]["wenwo-user-id"],
            result[i]["position"],
            result[i]["level"],
            result[i]["profile-image"],
            result[i]["certification-type"],
            result[i]["contents-image-count"],
            result[i]["title"],
            result[i]["si"],
            result[i]["gu"],
            result[i]["dong"],
            result[i]["main-image"],
            result[i]["view-count"],
            result[i]["like-count"],
            result[i]["is-like"]
        )
        console.log('test','^^^^ : '+contentsItem.wenwoUserId)
        contentsList.push(contentsItem)
    }

    return contentsList;
}

// export default getContents

