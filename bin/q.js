#!/usr/bin/env node

var quickly = require("./../quickly"),
    nomnom = require("nomnom"),
    command = require("./../libs/commandOptions");

var options = nomnom.options(command).parse();

quickly(options);