export class ContentsModel {
    constructor(
        sendedContentsId: string,
        sendedWenwoUserId: number,
        sendedPosition: number,
        sendedLevel: number,
        sendedProfileImage: string,
        sendedCertificationType: number,
        sendedContentsImageCount: number,
        sendedTitle: string,
        sendedSi: string,
        sendedGu: string,
        sendedDong: string,
        sendedMainImage: string,
        sendedViewCount: number,
        sendedLikeCount: string,
        sendedIsLike: boolean
    ) {
        let contentsModel = Object();
        contentsModel.id = sendedContentsId
        contentsModel.contentsId = sendedContentsId
        contentsModel.wenwoUserId = sendedWenwoUserId
        contentsModel.position = sendedPosition
        contentsModel.level = sendedLevel
        contentsModel.profileImage = sendedProfileImage
        contentsModel.certificationType = sendedCertificationType
        contentsModel.contentsImageCount = sendedContentsImageCount
        contentsModel.title = sendedTitle
        contentsModel.si = sendedSi
        contentsModel.gu = sendedGu
        contentsModel.dong = sendedDong
        contentsModel.mainImage = sendedMainImage
        contentsModel.viewCount = sendedViewCount
        contentsModel.likeCount = sendedLikeCount
        contentsModel.isLike = sendedIsLike

        return contentsModel

    }


}

export default ContentsModel