var keyHandler = require("./../libs/keyHandler"),
    exec = require("child_process").exec,
    expect = require("expect.js");

describe("Key Handler", function(){
  it("Should save the key and the path", function(){
    keyHandler.save("a", "/path/to/a");
    expect(keyHandler.get("a")).to.equal("/path/to/a");
  });

  it("Should delete the key from the list", function(){
    keyHandler.delete("a");
    expect(keyHandler.get("a")).to.be(undefined);
  });

  it("Should list all of the keys", function(){
    keyHandler.save("a", "/path/to/a");
    keyHandler.save("b", "/path/to/b");
    keyHandler.save("c", "/path/to/c");

    expect(keyHandler.list()).to.eql({
      "a": "/path/to/a",
      "b": "/path/to/b",
      "c": "/path/to/c"
    });
  });

  it("Should update the key and path", function(){
    expect(keyHandler.get("a")).to.equal("/path/to/a");

    keyHandler.save("a", "/path/to/aa");
    expect(keyHandler.get("a")).to.equal("/path/to/aa");
  });

  it("Should be able to remove all of the saved path", function(){
    keyHandler.removeAll();

    expect(keyHandler.list()).to.be.empty();
  });

  it("Should resolve the path that was mapped to a key", function(){
    keyHandler.save("a", ".");

  });
});