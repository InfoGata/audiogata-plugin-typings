# Interface: Filter

## Properties

### displayName

> **displayName**: `string`

Name of filter that will be displayed to user.

***

### id

> **id**: `string`

Unique identifier of filter.

***

### options?

> `optional` **options**: [`FilterOption`](FilterOption.md)[]

Selectable options for filter used when filter
is type "radio" or "select"

***

### type

> **type**: [`FilterType`](../type-aliases/FilterType.md)

Type of filter used to determine if filter will be displayed
as a radio field, select tag, or text field.

***

### value?

> `optional` **value**: `string`

Value that this filter is set to.
