---
id: "Application"
title: "Interface: Application"
sidebar_label: "Application"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### networkRequest

• **networkRequest**: (`input`: `RequestInfo` \| `URL`, `init?`: `RequestInit`) => `Promise`<`Response`\>

#### Type declaration

▸ (`input`, `init?`): `Promise`<`Response`\>

Make a networkRequest from parent AudioGata frame rather from plugin frame.

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `RequestInfo` \| `URL` |
| `init?` | `RequestInit` |

##### Returns

`Promise`<`Response`\>

## Methods

### addPlaylists

▸ **addPlaylists**(`playlists`): `Promise`<`void`\>

Adds or updates playlists. Playlists with the same id are updated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlists` | [`Playlist`](Playlist.md)[] |

#### Returns

`Promise`<`void`\>

___

### addTracksToPlaylist

▸ **addTracksToPlaylist**(`playlistId`, `tracks`): `Promise`<`void`\>

Adds tracks to a playlist

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playlistId` | `string` | id of playlist |
| `tracks` | [`Track`](Track.md)[] | Tracks being added to playlist |

#### Returns

`Promise`<`void`\>

___

### createNotification

▸ **createNotification**(`notification`): `Promise`<`void`\>

Show user a notification on the bottom left of the screen

#### Parameters

| Name | Type |
| :------ | :------ |
| `notification` | [`NotificationMessage`](NotificationMessage.md) |

#### Returns

`Promise`<`void`\>

___

### endTrack

▸ **endTrack**(): `Promise`<`void`\>

When plugin is acting as an embedded player, used to signal that the track has end.

#### Returns

`Promise`<`void`\>

___

### getCorsProxy

▸ **getCorsProxy**(): `Promise`<`undefined` \| `string`\>

Get cors proxy configured in settings.

#### Returns

`Promise`<`undefined` \| `string`\>

___

### getLocale

▸ **getLocale**(): `Promise`<`string`\>

Get locale configured in settings.

#### Returns

`Promise`<`string`\>

___

### getNowPlayingTracks

▸ **getNowPlayingTracks**(): `Promise`<[`Track`](Track.md)[]\>

Get the user's Now Plyaing Queue track list;

#### Returns

`Promise`<[`Track`](Track.md)[]\>

___

### getPlaylists

▸ **getPlaylists**(): `Promise`<[`Playlist`](Playlist.md)[]\>

Get the user's current playlists including tracks.

#### Returns

`Promise`<[`Playlist`](Playlist.md)[]\>

___

### getPlaylistsInfo

▸ **getPlaylistsInfo**(): `Promise`<[`PlaylistInfo`](PlaylistInfo.md)[]\>

Get the users's current playlists metadata without tracks.

#### Returns

`Promise`<[`PlaylistInfo`](PlaylistInfo.md)[]\>

___

### getPluginId

▸ **getPluginId**(): `Promise`<`string`\>

Get the current plugin's id.

#### Returns

`Promise`<`string`\>

___

### getPlugins

▸ **getPlugins**(): `Promise`<[`PluginInfo`](PluginInfo.md)[]\>

Get user's currently installed plugins.

#### Returns

`Promise`<[`PluginInfo`](PluginInfo.md)[]\>

___

### getTheme

▸ **getTheme**(): `Promise`<[`Theme`](../#theme)\>

Returns the user's current theme

#### Returns

`Promise`<[`Theme`](../#theme)\>

___

### installPlugins

▸ **installPlugins**(`plugins`): `Promise`<`void`\>

Open user dialog for user to optionally install plugins

#### Parameters

| Name | Type |
| :------ | :------ |
| `plugins` | [`PluginInfo`](PluginInfo.md)[] |

#### Returns

`Promise`<`void`\>

___

### isNetworkRequestCorsDisabled

▸ **isNetworkRequestCorsDisabled**(): `Promise`<`boolean`\>

Used to determine whether requests from networkRequest are restricted by CORs.

#### Returns

`Promise`<`boolean`\>

___

### onCanParseUrl

▸ `Optional` **onCanParseUrl**(`url`, `type`): `Promise`<`boolean`\>

Callback method that checks to see if url can be parsed by plugin
so that onLookupPlaylistUrl returns results

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `type` | [`ParseUrlType`](../#parseurltype) |

#### Returns

`Promise`<`boolean`\>

___

### onChangeTheme

▸ **onChangeTheme**(`theme`): `Promise`<`void`\>

Callback method that is called after a users changes theme

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`Theme`](../#theme) |

#### Returns

`Promise`<`void`\>

___

### onDeepLinkMessage

▸ `Optional` **onDeepLinkMessage**(`message`): `Promise`<`void`\>

Callback method to return deep link messages in mobile

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`Promise`<`void`\>

___

### onGetAlbumTracks

▸ `Optional` **onGetAlbumTracks**(`request`): `Promise`<[`AlbumTracksResult`](AlbumTracksResult.md)\>

Callback method that gets an albums's tracks.  Used on `/plugins/:pluginId/albums/:apiId`

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`AlbumTrackRequest`](AlbumTrackRequest.md) |

#### Returns

`Promise`<[`AlbumTracksResult`](AlbumTracksResult.md)\>

___

### onGetArtistAlbums

▸ `Optional` **onGetArtistAlbums**(`request`): `Promise`<[`ArtistAlbumsResult`](ArtistAlbumsResult.md)\>

Callback method that gets an artists's albums.  Used on `/plugins/:pluginId/artists/:apiId`

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`ArtistAlbumRequest`](ArtistAlbumRequest.md) |

#### Returns

`Promise`<[`ArtistAlbumsResult`](ArtistAlbumsResult.md)\>

___

### onGetLyrics

▸ **onGetLyrics**(`request`): `Promise`<[`GetLyricsResponse`](GetLyricsResponse.md)\>

Callback method to get lyrics based on a track's name and artist name

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`GetLyricsRequest`](GetLyricsRequest.md) |

#### Returns

`Promise`<[`GetLyricsResponse`](GetLyricsResponse.md)\>

___

### onGetPlaylistTracks

▸ `Optional` **onGetPlaylistTracks**(`request`): `Promise`<[`PlaylistTracksResult`](PlaylistTracksResult.md)\>

Callback method that gets a playlist's tracks.  Used on `/plugins/:pluginId/playlists/:apiId`

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`PlaylistTrackRequest`](PlaylistTrackRequest.md) |

#### Returns

`Promise`<[`PlaylistTracksResult`](PlaylistTracksResult.md)\>

___

### onGetTopItems

▸ `Optional` **onGetTopItems**(): `Promise`<[`SearchAllResult`](SearchAllResult.md)\>

Callback method to return items to display on Home page.

#### Returns

`Promise`<[`SearchAllResult`](SearchAllResult.md)\>

___

### onGetTrack

▸ `Optional` **onGetTrack**(`request`): `Promise`<[`Track`](Track.md)\>

Callback method to get track information. Used on `/track/:id`

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`GetTrackRequest`](GetTrackRequest.md) |

#### Returns

`Promise`<[`Track`](Track.md)\>

___

### onGetTrackUrl

▸ `Optional` **onGetTrackUrl**(`request`): `Promise`<`string`\>

Callback method to get track url. Must be set to play track if onPlay is not set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`GetTrackUrlRequest`](GetTrackUrlRequest.md) |

#### Returns

`Promise`<`string`\>

Url to play

___

### onGetUserPlaylists

▸ `Optional` **onGetUserPlaylists**(`request`): `Promise`<[`SearchPlaylistResult`](SearchPlaylistResult.md)\>

Callback method that gets user playlists.  Used on `/plugins/:pluginId/playlists`

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`UserPlaylistRequest`](UserPlaylistRequest.md) |

#### Returns

`Promise`<[`SearchPlaylistResult`](SearchPlaylistResult.md)\>

___

### onLookupPlaylistUrl

▸ `Optional` **onLookupPlaylistUrl**(`url`): `Promise`<[`Playlist`](Playlist.md)\>

Callback method that takes a url and returns a playlist.
Used on the `/playlists` page.

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`Promise`<[`Playlist`](Playlist.md)\>

___

### onLookupTrack

▸ **onLookupTrack**(`request`): `Promise`<[`Track`](Track.md)\>

Callback method to lookup up track based on track information.
It is used to convert tracks to use a different plugin.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`LookupTrackRequest`](LookupTrackRequest.md) |

#### Returns

`Promise`<[`Track`](Track.md)\>

___

### onLookupTrackUrls

▸ `Optional` **onLookupTrackUrls**(`urls`): `Promise`<[`Track`](Track.md)[]\>

Callback method that takes urls and returns tracks.

#### Parameters

| Name | Type |
| :------ | :------ |
| `urls` | `string`[] |

#### Returns

`Promise`<[`Track`](Track.md)[]\>

___

### onNowPlayingTracksAdded

▸ `Optional` **onNowPlayingTracksAdded**(`tracks`): `Promise`<`void`\>

Callback method to detect when new tracks got added to Now Playing queue

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tracks` | [`Track`](Track.md)[] | Tracks that got added to queue |

#### Returns

`Promise`<`void`\>

___

### onNowPlayingTracksChanged

▸ `Optional` **onNowPlayingTracksChanged**(`tracks`): `Promise`<`void`\>

Callback method to detect when tracks got changed in the Now Playing queue

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tracks` | [`Track`](Track.md)[] | Tracks that were changed in the queue |

#### Returns

`Promise`<`void`\>

___

### onNowPlayingTracksRemoved

▸ `Optional` **onNowPlayingTracksRemoved**(`tracks`): `Promise`<`void`\>

Callback method to detect when tracks got removed from Now Playing queue

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tracks` | [`Track`](Track.md)[] | Tracks that got removed to queue |

#### Returns

`Promise`<`void`\>

___

### onNowPlayingTracksSet

▸ `Optional` **onNowPlayingTracksSet**(`tracks`): `Promise`<`void`\>

Callback method to detect when there is a new tracklist in the Now Playing queue

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tracks` | [`Track`](Track.md)[] | Current track list |

#### Returns

`Promise`<`void`\>

___

### onPause

▸ `Optional` **onPause**(): `Promise`<`void`\>

Callback method to pause embedded player

#### Returns

`Promise`<`void`\>

___

### onPlay

▸ `Optional` **onPlay**(`track`): `Promise`<`void`\>

Callback method to play the track using an embedded player in the plugin.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `track` | [`PlayTrackRequest`](PlayTrackRequest.md) | The Track to play |

#### Returns

`Promise`<`void`\>

___

### onResume

▸ `Optional` **onResume**(): `Promise`<`void`\>

Callback method to resume embedded player

#### Returns

`Promise`<`void`\>

___

### onSearchAlbums

▸ `Optional` **onSearchAlbums**(`request`): `Promise`<[`SearchAlbumResult`](SearchAlbumResult.md)\>

Callback method to return album search results on `/search`

**`Remarks`**

This method must be set for album pagination to work on the
`/search` page

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`SearchRequest`](SearchRequest.md) |

#### Returns

`Promise`<[`SearchAlbumResult`](SearchAlbumResult.md)\>

___

### onSearchAll

▸ `Optional` **onSearchAll**(`request`): `Promise`<[`SearchAllResult`](SearchAllResult.md)\>

Callback method to return search results on `/search`

**`Remarks`**

This method must be set for the plugin to show on the
`/search` page

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`SearchRequest`](SearchRequest.md) |

#### Returns

`Promise`<[`SearchAllResult`](SearchAllResult.md)\>

___

### onSearchArtists

▸ `Optional` **onSearchArtists**(`request`): `Promise`<[`SearchArtistResult`](SearchArtistResult.md)\>

Callback method to return artist search results on `/search`

**`Remarks`**

This method must be set for artist pagination to work on the
`/search` page

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`SearchRequest`](SearchRequest.md) |

#### Returns

`Promise`<[`SearchArtistResult`](SearchArtistResult.md)\>

___

### onSearchPlaylists

▸ `Optional` **onSearchPlaylists**(`request`): `Promise`<[`SearchPlaylistResult`](SearchPlaylistResult.md)\>

Callback method to return playlist search results on `/search`

**`Remarks`**

This method must be set for playlist pagination to work on the
`/search` page

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`SearchRequest`](SearchRequest.md) |

#### Returns

`Promise`<[`SearchPlaylistResult`](SearchPlaylistResult.md)\>

___

### onSearchTracks

▸ `Optional` **onSearchTracks**(`request`): `Promise`<[`SearchTrackResult`](SearchTrackResult.md)\>

Callback method to return track search results on `/search`

**`Remarks`**

This method must be set for track pagination to work on the
`/search` page

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`SearchRequest`](SearchRequest.md) |

#### Returns

`Promise`<[`SearchTrackResult`](SearchTrackResult.md)\>

___

### onSeek

▸ `Optional` **onSeek**(`time`): `Promise`<`void`\>

Callback method to seek time in the embedded player

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` | Time in seconds |

#### Returns

`Promise`<`void`\>

___

### onSetPlaybackRate

▸ `Optional` **onSetPlaybackRate**(`rate`): `Promise`<`void`\>

Callback method to set the playback rate of the embedded player

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rate` | `number` | Percent of rate normal play rate. min 0, max 200. |

#### Returns

`Promise`<`void`\>

___

### onSetVolume

▸ `Optional` **onSetVolume**(`volume`): `Promise`<`void`\>

Callback method to set volume of embedded player

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `volume` | `number` | Volume of player. 1 is 100% volume.  0.5 is 50%.  min 0, max 1 |

#### Returns

`Promise`<`void`\>

___

### onUiMessage

▸ `Optional` **onUiMessage**(`message`): `void`

Callback method that receives parent.postMessage requests from UI frames.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |

#### Returns

`void`

___

### postUiMessage

▸ **postUiMessage**(`msg`): `Promise`<`void`\>

Sends a message to ui frames like `options`  set in `manifest.json`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `any` |

#### Returns

`Promise`<`void`\>

___

### setNowPlayingTracks

▸ **setNowPlayingTracks**(`tracks`): `Promise`<`void`\>

Set the user's Now Playing Queue track list;

#### Parameters

| Name | Type |
| :------ | :------ |
| `tracks` | [`Track`](Track.md)[] |

#### Returns

`Promise`<`void`\>

___

### setTrackTime

▸ **setTrackTime**(`currentTime`): `Promise`<`void`\>

When plugin is acting as an embedded player, used to show user current track time.

#### Parameters

| Name | Type |
| :------ | :------ |
| `currentTime` | `number` |

#### Returns

`Promise`<`void`\>
