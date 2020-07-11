---
title: "Tweepy Twitter Bot"
date: "2020-01-07"
description: "This post is about making a Twitter bot with Python and Tweepy."
img: "1.jpg"
youtube: "https://www.youtube.com/embed/RkWsOW1Du3s"
snippet: "In this post we use Python and the Python module Tweepy to make a Twitter bot that replies to all tweets which mention the authenticated user and include the hashtag '100DaysOfOCode'."
author: "Benjamin Carlson"
category: "Python"
readTime: "10"
---

## Introduction

In this post we use Python and the Python module Tweepy to make a Twitter bot that replies to all tweets which mention the authenticated user (you) and include the hashtag '#100DaysOfOCode'. You will learn the basics of authenticating and how to go about using Tweepy. You can build of this tutorial by using any of the other hundered + methods that Tweepy provides.

## Resourses

Here are some helpful links:

- Tweepy installation - http://docs.tweepy.org/en/latest/install.html
- Twitter Apps creation/registration: https://developer.twitter.com/en/apps
- Tweepy docs: http://docs.tweepy.org/en/latest/api.html

## Setting Up Our Environment

In this tutorial I will be using Visual Studio Code for my IDE. The first step is to create a Python virtual environment. Open up a terminal or cmd window and navigate to where you want to have your project. Then type `python3 -m venv env` if you are on mac and `python -m venv c:\path\to\myenv` on windows. See [this link](https://docs.python.org/3/library/venv.html) or watch [this video](https://youtu.be/phBzQGcbAKY) if you need additional help setting up your virtual environment.
 
Next, create a file nammed `bot.py` or another name that you like. 

