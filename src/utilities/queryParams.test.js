import React from "react";
import { getQueryParams, parseQueryParams } from "./queryParams";

it("should return query params object", () => {
    const queryParamsString = "?character=test&comic=comicId&test=test";
    const queryParams = getQueryParams(queryParamsString);

    expect(queryParams).toStrictEqual({
        character: "test",
        comic: "comicId",
        test: "test",
    });
});

describe("parseQueryParams", () => {
    const query = "?character=test&comic=comicId&test=test";
    const { queryParams, queryParamsString } = parseQueryParams(query);

    it("should return query params object with parsed character param", () => {
        expect(queryParams).toStrictEqual({
            nameStartsWith: "test",
            comic: "comicId",
            test: "test",
        });
    });

    it("should return query params string", () => {
        expect(queryParamsString).toStrictEqual(
            "&comic=comicId&test=test&nameStartsWith=test"
        );
    });
});
