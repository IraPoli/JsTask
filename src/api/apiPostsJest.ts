
import apiControllerJest from "../api/ApiCall";
 class ApiPostsController {

    async getPosts() {
        return apiControllerJest.getCall("/posts");
    }

    async addPosts(posts: object) {
        return apiControllerJest.addCall("/posts", posts);
    }

    async editPosts(postsId: number, posts: object) {
        return apiControllerJest.editCall("/posts/", postsId, posts);
    }
    

    async deletePosts(poststId: number) {
        return apiControllerJest.deleteCall("/comments/", poststId);
    }

}
export default new ApiPostsController();