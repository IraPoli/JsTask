
import apiControllerJest from "../api/ApiCall";
 class ApiPostsController {

    async getAlbums() {
        return apiControllerJest.getCall("/albums");
    }

}
export default new ApiPostsController();