# Interface: PluginInfo

## Properties

### description?

> `optional` **description**: `string`

Description of plugin

***

### homepage?

> `optional` **homepage**: `string`

URL for the plugin's home page.

***

### id?

> `optional` **id**: `string`

Unique Id of Plugin

***

### manifest?

> `optional` **manifest**: [`Manifest`](Manifest.md)

Plugin's manifest

***

### name

> **name**: `string`

Name of plugin

***

### optionsHtml?

> `optional` **optionsHtml**: `string`

Options page html code

***

### optionsSameOrigin?

> `optional` **optionsSameOrigin**: `boolean`

Determines whether the origin of the options iframe
should be pluginId.audiogata.com or should be null.
Setting to true may be useful for running some libraries
on options page.

***

### script

> **script**: `string`

Javascript code of plugin

***

### version?

> `optional` **version**: `string`

Version number
