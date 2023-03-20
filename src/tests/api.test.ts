import {describe, expect, test} from "@jest/globals"

import apiPostsJest from "../api/apiPostsJest";
import getAlbumsSchema from "../jsonSchemas/getAlbumsSchema.json";
import apiAlbumsJest from "../api/apiAlbumsJest";
import getPostsSchema from "../jsonSchemas/getPostsSchema.json";
import addPostsSchema from "../jsonSchemas/addPostsSchema.json"
import editPostsSchema from "../jsonSchemas/editPostsSchema.json";
import {validate} from "jsonschema";

describe("Albums API tests", () => {

    it("GET albums test", async () => {
      let responseAlbums = await apiAlbumsJest.getAlbums();

        expect(responseAlbums.statusCode).toEqual(200);

        let resultA = validate(responseAlbums.body, getAlbumsSchema);
        expect(resultA.valid).toBeTruthy();
    });
});


describe("Posts API tests", () => {

    it("GET posts test", async () => {
      let response = await apiPostsJest.getPosts();

        expect(response.statusCode).toEqual(200);

        let result = validate(response.body, getPostsSchema);
        expect(result.valid).toBeTruthy();
    });

    describe("POST posts API tests", () => {

        let newPost = {
            "userId": 1,
            "id": 101,
            "title": "Test Titel",
            "body": "Test body"
        }

        it("POST a new post", async () => {
            let response = await apiPostsJest.addPosts(newPost);

            expect(response.statusCode).toEqual(201);

            let result = validate(response.body, addPostsSchema);
       
            expect(result.valid).toBeTruthy();

            newPost["id"] = response.body.id;
            expect(response.body).toMatchObject(newPost);
        });
    });

    it("PUT posts test", async () => {

        let updatedPosts = {
            "userId": 1,
            "id": 101,
            "title": "updated Titel",
            "body": "updated body"
        }

        let response = await apiPostsJest.editPosts(1, updatedPosts);

        expect(response.statusCode).toEqual(200);

        let result = validate(response.body, editPostsSchema);

        expect(result.valid).toBeTruthy();

        updatedPosts["id"] = response.body.id;
        expect(response.body).toMatchObject(updatedPosts);
    });

    it("DELETE posts test", async () => {
        let response = await apiPostsJest.deletePosts(1);

        expect(response.statusCode).toEqual(200);
    });

}); 


