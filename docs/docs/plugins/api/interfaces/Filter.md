---
id: "Filter"
title: "Interface: Filter"
sidebar_label: "Filter"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### displayName

• **displayName**: `string`

Name of filter that will be displayed to user.

___

### id

• **id**: `string`

Unique identifier of filter.

___

### options

• `Optional` **options**: [`FilterOption`](FilterOption.md)[]

Selectable options for filter used when filter
is type "radio" or "select"

___

### type

• **type**: [`FilterType`](../#filtertype)

Type of filter used to determine if filter will be displayed
as a radio field, select tag, or text field.

___

### value

• `Optional` **value**: `string`

Value that this filter is set to.
