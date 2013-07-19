var keyHandler = require("./../libs/keyHandler"),
    exec = require("child_process").exec,
    expect = require("expect.js");

describe("Key Handler", function(){
  it("Should save the key and the path", function(){
    keyHandler.save("a", process.cwd());
    expect(keyHandler.get("a")).to.equal(process.cwd());
  });

  it("Should delete the key from the list", function(){
    keyHandler.delete("a");
    expect(keyHandler.get("a")).to.be(undefined);
  });

  it("Should list all of the keys", function(){
    keyHandler.save("a", process.cwd());
    keyHandler.save("b", process.cwd());
    keyHandler.save("c", process.cwd());

    expect(keyHandler.list()).to.eql({
      "a": process.cwd(),
      "b": process.cwd(),
      "c": process.cwd()
    });
  });

  it("Should be able to remove all of the saved path", function(){
    keyHandler.removeAll();

    expect(keyHandler.list()).to.be.empty();
  });

  it("Should resolve the path that was mapped to a key", function(){
    keyHandler.save("a", ".");
    expect(keyHandler.get("a")).to.equal(process.cwd());
    keyHandler.delete("a");
  });
});