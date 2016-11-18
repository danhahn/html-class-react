---
title: Lesson 9
author: Dan Hahn
date: 3/30/2016 15:00
template: article.jade
---

# Classwork

* [HTML Forms]()
* [Class Work](classwork.html)
* [Intro to JS and Jquery](javascript.html)

We will building a page that looks like this.gi

![](Intro to Forms.png);

<style>
img {
	max-width: 100%;
}
</style>

## MAMP

We will need to create a local web server to be able to submit or page. To do this we are going to use an app called MAMP.

MAMP = Mac Apache MySql PHP

* Mac - you should know this one
* Apache - Web Server
* MySql - Database
* PHP - [Hypertext Preprocessor](http://www.php.net/manual/en/intro-whatis.php)

Since HTML pages are read only we need a sever to process the data that we send.

## Setting Home Directory

We need to go in to the setting of MAMP to update the hope directory

![](php2.png)

1. Click "Preferences"
2. Click "Apache" tag
3. Click Select
4. Choose the folder with your files.
5. Click "ok"
6. Click "Start Severs"

If everything Worked you MAMP should look like this

![](php1.png)

Note the two green lights.  If it does not work try restarting your computer.

## viewing the page.

If the severs start you will get this page

[http://localhost:8888/MAMP/?language=English](http://localhost:8888/MAMP/?language=English)

We do not want that page.  Replace that page with this page

[http://localhost:8888](http://localhost:8888)

You should see a list of all the files in your "home" folder.

If you load the page and it can not be found that mean the server is not running.
