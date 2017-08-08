# Commitr

![commitr downloads](https://img.shields.io/npm/dt/commitr.svg?style=flat-square)
![commitr downloads](https://img.shields.io/npm/v/commitr.svg?style=flat-square)

Commitr is a local background script that makes a random number of Github commits once a day. This keeps your Github commit chart nice and green, even if you need to work on other things - like a frantic job search. 

## Installation

1. Create a folder in your root directory (~) called 'new_projects'
2. Create a folder inside 'new_projects' called 'projects'
3. Create a file inside 'projects' called 'test.txt'
4. From inside your 'new_projects' folder, do a `git init` and then push the repository up to your Github account

Then either:

#### npm install

5. From inside your 'new_projects' folder, do an `npm init -y`
6. `npm install commitr`
7. `cd node_modules/commitr`
8. `npm start`

**or**

#### clone install

5. From inside your 'new_projects' folder, use the command `git clone https://github.com/dainchatel/commitr.git`
6. `cd commitr`
7. `npm start`

Commitr will then run in the background on your machine. 

To stop it, run `npm stop`. If you stop it, it's important to run `npm run-script clear` before you restart, or it may try to create files that already exist or delete ones that don't.

## Issues

* You must open your computer once a day for this locally-running script to work. Be sure to check Github so you know your commits are going through. 
* Commitr has not yet integrated Upstart, so it needs to be cleared and restarted after the computer is turned off. 
* Commitr could be made more simple by incorporating the Commander plugin, so users can flag their own repository path from the command line instead of creating the exact file path necessary.

## Disclaimer

Commitr uses the `child_process` module to access your command line. Open the commitr.js file before you start the script so you can see exactly what commands it will call. Giving this kind of control to a file you downloaded can be dangerous. 

## Author

Dain Chatel 

[website](http://dainchatel.com) | [linkedin](https://linkedin.com/in/dain-chatel) | [github](https://github.com/dainchatel)

## Open Source

**Fork and Clone this repository to submit a Pull Request**
