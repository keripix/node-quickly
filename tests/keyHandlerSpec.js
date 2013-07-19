var keyHandler = require("./../libs/keyHandler");

describe("Key Handler", function(){
    it("Should save the key and the path", function(){
        keyHandler.save("a", "/path/to/a");
        expect(keyHandler.get("a")).toEqual("/path/to/a");
    });

    it("Should delete the key from the list", function(){
        keyHandler.delete("a");
        expect(keyHandler.get("a")).toBeUndefined();
    });

    it("Should list all of the keys", function(){
        keyHandler.save("a", "/path/to/a");
        keyHandler.save("b", "/path/to/b");
        keyHandler.save("c", "/path/to/c");

        expect(keyHandler.list()).toEqual({
            "a": "/path/to/a",
            "b": "/path/to/b",
            "c": "/path/to/c"
        });
    });
});