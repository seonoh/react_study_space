"use strict";
exports.__esModule = true;
var ContentsModel = /** @class */ (function () {
    function ContentsModel(sendedContentsId, sendedWenwoUserId, sendedPosition, sendedLevel, sendedProfileImage, sendedCertificationType, sendedContentsImageCount, sendedTitle, sendedSi, sendedGu, sendedDong, sendedMainImage, sendedViewCount, sendedLikeCount, sendedIsLike) {
        var contentsModel = Object();
        contentsModel.id = sendedContentsId;
        contentsModel.contentsId = sendedContentsId;
        contentsModel.wenwoUserId = sendedWenwoUserId;
        contentsModel.position = sendedPosition;
        contentsModel.level = sendedLevel;
        contentsModel.profileImage = sendedProfileImage;
        contentsModel.certificationType = sendedCertificationType;
        contentsModel.contentsImageCount = sendedContentsImageCount;
        contentsModel.title = sendedTitle;
        contentsModel.si = sendedSi;
        contentsModel.gu = sendedGu;
        contentsModel.dong = sendedDong;
        contentsModel.mainImage = sendedMainImage;
        contentsModel.viewCount = sendedViewCount;
        contentsModel.likeCount = sendedLikeCount;
        contentsModel.isLike = sendedIsLike;
        return contentsModel;
    }
    return ContentsModel;
}());
exports.ContentsModel = ContentsModel;
exports["default"] = ContentsModel;
