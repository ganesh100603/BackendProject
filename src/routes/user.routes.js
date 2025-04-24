import { Router } from "express";
import { getCurrentUser, getUserChannelProfile, getWatchHistory, loginUser, 
        logoutUser, refreshAccessToken, updateUserAvatar, updateUserCoverImage,
        updateUserDetails, userRegister } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount:1
        },
        {
            name:"coverImage",
            maxCount:1
        }
    ])
    ,userRegister
)

router.route("/login").post(loginUser)
router.route("/logout").post(verifyJWT,logoutUser)
router.route("/refresh-route").post(refreshAccessToken)
router.route("/change-password").post(verifyJWT,getCurrentUser)
router.route("/current-user").post(verifyJWT,getCurrentUser)
router.route("/update-user").patch(verifyJWT,updateUserDetails)
router.route("/update-avatar").patch(verifyJWT,upload.single("avatar"),updateUserAvatar)
router.route("/update-avatar").patch(verifyJWT,upload.single("coverImage"),updateUserCoverImage)
router.route("/c/:userName").get(verifyJWT,getUserChannelProfile)
router.route("/history").get(verifyJWT,getWatchHistory)
export default router