exports.createContentsModel = (contentsId, wenwoUserId, position, level, profileImage, certificationType,
    contentsImageCount, title, si, gu, dong, mainImage, viewCount, likeCount, isLike) => {
    let model = new Object()
        model.contentsId = contentsId
        model.wenwoUserId = wenwoUserId
        model.position = position
        model.level = level
        model.profileImage = profileImage
        model.certificationType = certificationType
        model.contentsImageCount = contentsImageCount
        model.title = title
        model.si = si
        model.gu = gu
        model.dong = dong
        model.mainImage = mainImage
        model.viewCount = viewCount
        model.likeCount = likeCount
        model.isLike = isLike
    return model;
}