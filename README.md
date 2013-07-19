# Node Quickly

A port of my [quickly](https://github.com/keripix/quickly) command line utility to NodeJS. It was previously written in Python.

Quickly allows you to change directory (`cd`) without typing the whole path of that directory. Instead, you just type the key which has been mapped to a directory.

## Usage

To map a path to a key:

> $ q node /path/to/my/node/projects

Now, to go to `/path/to/my/node/projects`:

> $ q node

To edit the path:

> $ q -e node /path/to/a/different/node/

To remove a key:

> $ q -r node

To list all of keys that have been recorded so far:

> $ q -l

## Install

> $ npm install -g node-quickly