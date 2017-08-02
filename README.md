# Commitr
Automatically make Github commits every day.

## Installation

1. Create a folder in your root directory (~) called 'test_file'
2. Create a folder inside 'test_file' called 'projects'
3. Create a file inside 'projects' called 'test.txt'
4. From inside your 'test_file' folder, do a `git init` and then push the repository up to your Github account

Then either:

#### npm install

5. From inside your 'test_file' folder, do an `npm init -y`
6. `npm install commitr`
7. `cd node_modules/commitr`
8. `npm start`


OR


#### clone install (don't do this one yet)

5. From inside your 'test_file' folder, use the command `git clone https://github.com/dainchatel/commitr.git`
6. `cd commitr`
7. `npm start`

Commitr will then run in the background on your machine. 

To stop it, run `npm stop`. If you stop it, it's important to run `npm run-script clear` before you restart, or it may try to create files that already exist or delete ones that don't.

## Mechanism

On initalization, Commitr selects a random number between 3 and 13 and makes that many dummy commits to the repo. After that, it checks every five minutes to see if it's a new day. If so, it again selects a random number between 3 and 13 and makes that number of commits. This keeps your Github commit chart nice and green. 

## Issues

* Be sure to check that the commits are going through. 
* Commitr has not yet integrated Upstart, so it needs to be restarted after the computer is turned off. 
* Commitr could be made more simple by incorporating the Commander plugin, so users can flag their own repository path from the command line instead of creating the exact file path necessary.

## Author

Dain Chatel 
[website](http://dainchatel.com)
[linkedin](https://linkedin.com/in/dain-chatel)
[github](https://github.com/dainchatel)

## Open Source

**Fork and Clone this repository to submit a Pull Request**
