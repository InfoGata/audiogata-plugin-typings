---
sidebar_position: 1
---

# Plugin Manifest

Plugins must have a `manifest.json` file in the plugin's root folder.

Example:

```json title=manifest.json
{
  "id": "xxxxxxxxxxx",
  "name": "PluginName",
  "description": "description",
  "version": "1.1.1",
  "script": "dist/script.js",
  "options": "dist/options.html",
  "updateUrl": "https://example.com/manifest.json",
  "homepage": "https://example.com"
}
```

## id?: string

The plugin's unique. If no id is provided, a random id will be used instead.

## name: string

Name of plugin

## description?: string

Description of plugin.

## version?: string

Version number of plugin.

## script: string

Javascript file containing the plugin code.

## options?: string

Optional HTML file for the plugin's options page.

## updateUrl?: string

Optional url to get future updated versions of the manifest.json file.

## hompage?: string

Optional URL for the plugin's home page.
