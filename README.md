# Node Quickly

** ALPHA **

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

After that please follow the instruction printed on your console. I haven't been able to figure out a simple way for that last step.

If you've missed the last instruction, please type this function inside your `~/.bashrc` file:

    q(){
      res=$(q.js $@)

      if [ -d "$res" ]; then
          cd $res
      else
          echo -e "$res"
      fi
    }

After that, you need to:

    source ~/.bashrc

## Credits

(c) 2013 Akbar Hidayat. MIT License