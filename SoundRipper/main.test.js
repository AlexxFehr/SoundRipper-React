import {expect, expectTypeOf, test} from "vitest";

import { getYTVideoID } from "./server/getYTVideoID";
import isYTLinkValid from "./src/assets/ts/isYTLinkValid";

test("YouTube video id extraction from link", () =>{
    expect(getYTVideoID("https://www.youtube.com/watch?v=kx1btNYZBJo")).toBe("kx1btNYZBJo");

});

test("YouTube video valid for download", () => {
    expect(isYTLinkValid("https://www.youtube.com/watch?v=kx1btNYZBJo")).toBe(true);
    expect(isYTLinkValid("https://www.youtube.com/watch?v=ks1bfNYZBJo")).toBe(false);
    expect(isYTLinkValid("https://www.sdfjl.com/asd?=kx1btNYZBJo")).toBe(false);
    
});