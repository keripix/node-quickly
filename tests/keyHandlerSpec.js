var keyHandler = require("./../libs/keyHandler"),
    exec = require("child_process").exec,
    expect = require("expect.js"),
    fs = require("fs");

describe("Key Handler", function(){
  beforeEach(function(){
    keyHandler.add("a", process.cwd());
  });

  afterEach(function(){
    keyHandler.removeAll();
  });

  it("Should add the key and the path", function(){
    expect(keyHandler.get("a")).to.equal(process.cwd());
  });

  it("Should delete the key from the list", function(){
    keyHandler.delete("a");
    expect(keyHandler.get("a")).to.be(undefined);
  });

  it("Should list all of the keys", function(){
    keyHandler.add("b", process.cwd());
    keyHandler.add("c", process.cwd());

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
    keyHandler.add("b", ".");
    expect(keyHandler.get("b")).to.equal(process.cwd());
  });

  it("Should be able to edit an existing key", function(){
    keyHandler.edit("a", "..");
    expect(keyHandler.get("a")).to.equal(fs.realpathSync(".."));

    keyHandler.delete("a");
  });
});