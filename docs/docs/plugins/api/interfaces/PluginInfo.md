---
id: "PluginInfo"
title: "Interface: PluginInfo"
sidebar_label: "PluginInfo"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### description

• `Optional` **description**: `string`

Description of plugin

___

### homepage

• `Optional` **homepage**: `string`

URL for the plugin's home page.

___

### id

• `Optional` **id**: `string`

Unique Id of Plugin

___

### manifest

• `Optional` **manifest**: [`Manifest`](Manifest.md)

Plugin's manifest

___

### name

• **name**: `string`

Name of plugin

___

### optionsHtml

• `Optional` **optionsHtml**: `string`

Options page html code

___

### optionsSameOrigin

• `Optional` **optionsSameOrigin**: `boolean`

Determines whether the origin of the options iframe
should be pluginId.audiogata.com or should be null.
Setting to true may be useful for running some libraries
on options page.

___

### script

• **script**: `string`

Javascript code of plugin

___

### version

• `Optional` **version**: `string`

Version number
