Compass for Meteor
==================

[Compass](http://compass-style.org/) **0.13.alpha.4** packaged for [Meteor](https://www.meteor.com)

## Install

1. Make sure to add sass support to your meteor app:

```bash
$ meteor add fourseven:scss
```

2. From within your Meteor app's directory:

```bash
$ meteor add francocatena:compass
```

3. Create a `scss.json` configuration file in the app's root with:

```json
{
  "includePaths": [
    ".meteor/local/build/programs/server/assets/packages/francocatena_compass"
  ]
}
```

## Usage

1. Simply import any Compass mixin at the top of your sass file

```scss
@import "compass/reset";
```

---

## Important note

Because Meteor will attempt to compile you app's local stylesheets prior to
copying the server assets directory, the first time you run the app after
installing the package your app will complain that it is unable to find it.
For the moment this can be resolved by either stopping and restarting the app,
at which point you should no longer get this error message, our running
`touch` on you local stylesheet thats attempting to access the package,
triggering a reload.
