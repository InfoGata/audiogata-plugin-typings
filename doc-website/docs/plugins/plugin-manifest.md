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
  "options": "dist/options.html"
}
```

## id?: string

The plugin's unique. If no id is provided, a random id will be used instead.

## name: string

## description?: string

## version?: string

## script: string

Javascript file containing

## options?: string

Optional HTML file for the plugin's options page.
