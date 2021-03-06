# Node Quickly

A port of my [quickly](https://github.com/keripix/quickly) command line utility to NodeJS. It was previously written in Python.

Quickly allows you to change directory (`cd`) without typing the whole path of that directory. Instead, you just type the key which has been mapped to a directory.

Currently only supports **bash**.

![](pics/quickly.jpeg)

## Usage

To map a path to a key:

> $ q -a node /path/to/my/node/projects

Now, to go to `/path/to/my/node/projects`:

> $ q node

To edit the path:

> $ q -e node /path/to/a/different/node/

To remove a key:

> $ q -r node

To list all of keys that have been recorded so far:

> $ q -l

## Auto Completion Feature

This feature is still in development. Currently, I'm using [omelette](https://github.com/f/omelette) to implement this feature. However, I'm having trouble writing the results from omelette to the bash function.

## Install

> $ npm install -g node-quickly

After that please follow the instruction printed on your console. I haven't been able to figure out a simple way for that last step.

## Testing

To run the test, you need to have **testem** and **mocha** installed.

> $ npm install -g testem

> $ npm install -g mocha

And then just run *testem* from the projet root directory.

> $ testem

## TODO

- Code Completion
- Better command options

## Credits

(c) 2013 Akbar Hidayat. MIT License