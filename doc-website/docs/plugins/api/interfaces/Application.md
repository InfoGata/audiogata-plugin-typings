---
id: "Application"
title: "Interface: Application"
sidebar_label: "Application"
sidebar_position: 0
custom_edit_url: null
---

## Methods

### addPlaylists

▸ **addPlaylists**(`playlists`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlists` | [`Playlist`](Playlist.md)[] |

#### Returns

`Promise`<`void`\>

___

### createNotification

▸ **createNotification**(`notification`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `notification` | [`NotificationMessage`](NotificationMessage.md) |

#### Returns

`Promise`<`void`\>

___

### endTrack

▸ **endTrack**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

___

### getCorsProxy

▸ **getCorsProxy**(): `Promise`<`undefined` \| `string`\>

#### Returns

`Promise`<`undefined` \| `string`\>

___

### getNowPlayingTracks

▸ **getNowPlayingTracks**(): `Promise`<[`Track`](Track.md)[]\>

#### Returns

`Promise`<[`Track`](Track.md)[]\>

___

### getPlaylists

▸ **getPlaylists**(): `Promise`<[`Playlist`](Playlist.md)[]\>

#### Returns

`Promise`<[`Playlist`](Playlist.md)[]\>

___

### getPluginId

▸ **getPluginId**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

___

### getPlugins

▸ **getPlugins**(): `Promise`<[`PluginInfo`](PluginInfo.md)[]\>

#### Returns

`Promise`<[`PluginInfo`](PluginInfo.md)[]\>

___

### installPlugins

▸ **installPlugins**(`plugins`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `plugins` | [`PluginInfo`](PluginInfo.md)[] |

#### Returns

`Promise`<`void`\>

___

### isNetworkRequestCorsDisabled

▸ **isNetworkRequestCorsDisabled**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

___

### networkRequest

▸ **networkRequest**(`input`, `init?`): `Promise`<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `RequestInfo` |
| `init?` | `RequestInit` |

#### Returns

`Promise`<`Response`\>

___

### onDeepLinkMessage

▸ `Optional` **onDeepLinkMessage**(`message`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`Promise`<`void`\>

___

### onGetAlbumTracks

▸ `Optional` **onGetAlbumTracks**(`request`): `Promise`<[`AlbumTracksResult`](AlbumTracksResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`AlbumTrackRequest`](AlbumTrackRequest.md) |

#### Returns

`Promise`<[`AlbumTracksResult`](AlbumTracksResult.md)\>

___

### onGetArtistAlbums

▸ `Optional` **onGetArtistAlbums**(`request`): `Promise`<[`ArtistAlbumsResult`](ArtistAlbumsResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`ArtistAlbumRequest`](ArtistAlbumRequest.md) |

#### Returns

`Promise`<[`ArtistAlbumsResult`](ArtistAlbumsResult.md)\>

___

### onGetPlaylistTracks

▸ **onGetPlaylistTracks**(`request`): `Promise`<[`PlaylistTracksResult`](PlaylistTracksResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`PlaylistTrackRequest`](PlaylistTrackRequest.md) |

#### Returns

`Promise`<[`PlaylistTracksResult`](PlaylistTracksResult.md)\>

___

### onGetTopItems

▸ **onGetTopItems**(): `Promise`<[`SearchAllResult`](SearchAllResult.md)\>

#### Returns

`Promise`<[`SearchAllResult`](SearchAllResult.md)\>

___

### onGetTrackUrl

▸ `Optional` **onGetTrackUrl**(`request`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`GetTrackUrlRequest`](GetTrackUrlRequest.md) |

#### Returns

`Promise`<`string`\>

___

### onGetUserPlaylists

▸ `Optional` **onGetUserPlaylists**(`request`): `Promise`<[`SearchPlaylistResult`](SearchPlaylistResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`UserPlaylistRequest`](UserPlaylistRequest.md) |

#### Returns

`Promise`<[`SearchPlaylistResult`](SearchPlaylistResult.md)\>

___

### onNowPlayingTracksAdded

▸ `Optional` **onNowPlayingTracksAdded**(`track`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `track` | [`Track`](Track.md)[] |

#### Returns

`Promise`<`void`\>

___

### onNowPlayingTracksChanged

▸ `Optional` **onNowPlayingTracksChanged**(`track`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `track` | [`Track`](Track.md)[] |

#### Returns

`Promise`<`void`\>

___

### onNowPlayingTracksRemoved

▸ `Optional` **onNowPlayingTracksRemoved**(`track`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `track` | [`Track`](Track.md)[] |

#### Returns

`Promise`<`void`\>

___

### onNowPlayingTracksSet

▸ `Optional` **onNowPlayingTracksSet**(`track`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `track` | [`Track`](Track.md)[] |

#### Returns

`Promise`<`void`\>

___

### onPause

▸ `Optional` **onPause**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

___

### onPlay

▸ `Optional` **onPlay**(`track`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `track` | [`PlayTrackRequest`](PlayTrackRequest.md) |

#### Returns

`Promise`<`void`\>

___

### onResume

▸ `Optional` **onResume**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

___

### onSearchAlbums

▸ `Optional` **onSearchAlbums**(`request`): `Promise`<[`SearchAlbumResult`](SearchAlbumResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`SearchRequest`](SearchRequest.md) |

#### Returns

`Promise`<[`SearchAlbumResult`](SearchAlbumResult.md)\>

___

### onSearchAll

▸ `Optional` **onSearchAll**(`request`): `Promise`<[`SearchAllResult`](SearchAllResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`SearchRequest`](SearchRequest.md) |

#### Returns

`Promise`<[`SearchAllResult`](SearchAllResult.md)\>

___

### onSearchArtists

▸ `Optional` **onSearchArtists**(`request`): `Promise`<[`SearchArtistResult`](SearchArtistResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`SearchRequest`](SearchRequest.md) |

#### Returns

`Promise`<[`SearchArtistResult`](SearchArtistResult.md)\>

___

### onSearchPlaylists

▸ `Optional` **onSearchPlaylists**(`request`): `Promise`<[`SearchPlaylistResult`](SearchPlaylistResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`SearchRequest`](SearchRequest.md) |

#### Returns

`Promise`<[`SearchPlaylistResult`](SearchPlaylistResult.md)\>

___

### onSearchTracks

▸ `Optional` **onSearchTracks**(`request`): `Promise`<[`SearchTrackResult`](SearchTrackResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`SearchRequest`](SearchRequest.md) |

#### Returns

`Promise`<[`SearchTrackResult`](SearchTrackResult.md)\>

___

### onSeek

▸ `Optional` **onSeek**(`time`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |

#### Returns

`Promise`<`void`\>

___

### onSetPlaybackRate

▸ `Optional` **onSetPlaybackRate**(`rate`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `rate` | `number` |

#### Returns

`Promise`<`void`\>

___

### onSetVolume

▸ `Optional` **onSetVolume**(`volume`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `volume` | `number` |

#### Returns

`Promise`<`void`\>

___

### onUiMessage

▸ `Optional` **onUiMessage**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |

#### Returns

`void`

___

### postUiMessage

▸ **postUiMessage**(`msg`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `any` |

#### Returns

`Promise`<`void`\>

___

### setNowPlayingTracks

▸ **setNowPlayingTracks**(`tracks`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tracks` | [`Track`](Track.md)[] |

#### Returns

`Promise`<`void`\>

___

### setTrackTime

▸ **setTrackTime**(`currentTime`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `currentTime` | `number` |

#### Returns

`Promise`<`void`\>
