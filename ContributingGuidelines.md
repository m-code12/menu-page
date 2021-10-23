## Steps to follow :

### 1. Fork it :

You can get your own fork/copy of [this repo](https://github.com/m-code12/menu-page) by using the <a href="https://github.com/m-code12/menu-page"><kbd><b>Fork</b></kbd></a> button .

[![Fork Button](https://help.github.com/assets/images/help/repository/fork_button.jpg)](https://github.com/m-code12/menu-page)

### 2. Clone it :

You need to clone (download) it to local machine using

```
$ git clone https://github.com/Your_Username/menu-page.git 
```

> This makes a local copy of repository in your machine.

Once you have cloned the `menu-page` repository in Github, move to that folder first using change directory command.

```sh
# This will change directory to a folder menu-page
$ cd internship
```

Move to this folder for all other commands.

### 3. Set it up :

Run the following commands to see that *your local copy* has a reference to *your forked remote repository* in Github :

```sh
$ git remote -v
origin  https://github.com/Your_Username/menu-page.git (fetch)
origin  https://github.com/Your_Username/menu-page.git (push)
```

Now, lets add a reference to the original [menu-page](https://github.com/m-code12/menu-page) repository using

```sh
$ git remote add upstream https://github.com/m-code12/menu-page.git
```

> This adds a new remote named ***upstream***.

See the changes using

```sh
$ git remote -v
origin    https://github.com/Your_Username/menu-page.git (fetch)
origin    https://github.com/Your_Username/menu-page.git (push)
upstream  https://github.com/m-code12/menu-page.git (fetch)
upstream  https://github.com/m-code12/menu-page.git (push)
```

### 4. Sync it :

Always keep your local copy of repository updated with the original repository.
Before making any changes and/or in an appropriate interval, run the following commands *carefully* to update your local repository.

```sh
# Fetch all remote repositories and delete any deleted remote branches
$ git fetch --all --prune

# Switch to `master` branch
$ git checkout master

# Reset local `master` branch to match `upstream` repository's `master` branch
$ git reset --hard upstream/master

# Push changes to your forked `menu-page` repo
$ git push origin master
```

Once you have completed these steps, you are ready to start contributing by checking our `Help Wanted` Issues and creating [pull requests](https://github.com/m-code12/menu-page/pulls) .

### 5. Create a new branch :

Whenever you are going to make contribution. Please create seperate branch using command and keep your `master` branch clean (i.e. synced with remote branch).

```sh
# It will create a new branch with name Branch_Name and switch to branch Folder_Name
$ git checkout -b Folder_Name
```

Create a seperate branch for contibution and try to use same name of branch as of folder.

To switch to a desired branch

```sh
# To switch from one folder to other
$ git checkout Folder_Name
```

To add the changes to the branch, use

```sh
# To add all files to branch Folder_Name
$ git add .
```

Type in a message relevant for the code reveiwer using

```sh
# This message gets associated with all files you have changed
$ git commit -m 'relevant message'
```

Now, Push your awesome work to your remote repository using

```sh
# To push your work to your remote repository
$ git push -u origin Folder_Name
```

Finally, go to your repository in browser and click on `compare and pull requests`.
Then add a title and description to your pull request that explains your efforts.
