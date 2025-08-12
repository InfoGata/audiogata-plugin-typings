# Interface: Application

## Properties

### networkRequest()

> **networkRequest**: (`input`, `init?`) => `Promise`\<`Response`\>

Make a networkRequest from parent AudioGata frame rather from plugin frame.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/fetch)

#### Parameters

##### input

`RequestInfo` | `URL`

##### init?

`RequestInit`

#### Returns

`Promise`\<`Response`\>

## Methods

### addPlaylists()

> **addPlaylists**(`playlists`): `Promise`\<`void`\>

Adds or updates playlists. Playlists with the same id are updated.

#### Parameters

##### playlists

[`Playlist`](Playlist.md)[]

#### Returns

`Promise`\<`void`\>

***

### addTracksToPlaylist()

> **addTracksToPlaylist**(`playlistId`, `tracks`): `Promise`\<`void`\>

Adds tracks to a playlist

#### Parameters

##### playlistId

`string`

id of playlist

##### tracks

[`Track`](Track.md)[]

Tracks being added to playlist

#### Returns

`Promise`\<`void`\>

***

### createNotification()

> **createNotification**(`notification`): `Promise`\<`void`\>

Show user a notification on the bottom left of the screen

#### Parameters

##### notification

[`NotificationMessage`](NotificationMessage.md)

#### Returns

`Promise`\<`void`\>

***

### endTrack()

> **endTrack**(): `Promise`\<`void`\>

When plugin is acting as an embedded player, used to signal that the track has end.

#### Returns

`Promise`\<`void`\>

***

### getCorsProxy()

> **getCorsProxy**(): `Promise`\<`undefined` \| `string`\>

Get cors proxy configured in settings.

#### Returns

`Promise`\<`undefined` \| `string`\>

***

### getLocale()

> **getLocale**(): `Promise`\<`string`\>

Get locale configured in settings.

#### Returns

`Promise`\<`string`\>

***

### getNowPlayingTracks()

> **getNowPlayingTracks**(): `Promise`\<[`Track`](Track.md)[]\>

Get the user's Now Plyaing Queue track list;

#### Returns

`Promise`\<[`Track`](Track.md)[]\>

***

### getPlaylists()

> **getPlaylists**(): `Promise`\<[`Playlist`](Playlist.md)[]\>

Get the user's current playlists including tracks.

#### Returns

`Promise`\<[`Playlist`](Playlist.md)[]\>

***

### getPlaylistsInfo()

> **getPlaylistsInfo**(): `Promise`\<[`PlaylistInfo`](PlaylistInfo.md)[]\>

Get the users's current playlists metadata without tracks.

#### Returns

`Promise`\<[`PlaylistInfo`](PlaylistInfo.md)[]\>

***

### getPluginId()

> **getPluginId**(): `Promise`\<`string`\>

Get the current plugin's id.

#### Returns

`Promise`\<`string`\>

***

### getPlugins()

> **getPlugins**(): `Promise`\<[`PluginInfo`](PluginInfo.md)[]\>

Get user's currently installed plugins.

#### Returns

`Promise`\<[`PluginInfo`](PluginInfo.md)[]\>

***

### getTheme()

> **getTheme**(): `Promise`\<[`Theme`](../type-aliases/Theme.md)\>

Returns the user's current theme

#### Returns

`Promise`\<[`Theme`](../type-aliases/Theme.md)\>

***

### installPlugins()

> **installPlugins**(`plugins`): `Promise`\<`void`\>

Open user dialog for user to optionally install plugins

#### Parameters

##### plugins

[`PluginInfo`](PluginInfo.md)[]

#### Returns

`Promise`\<`void`\>

***

### isNetworkRequestCorsDisabled()

> **isNetworkRequestCorsDisabled**(): `Promise`\<`boolean`\>

Used to determine whether requests from networkRequest are restricted by CORs.

#### Returns

`Promise`\<`boolean`\>

***

### onCanParseUrl()?

> `optional` **onCanParseUrl**(`url`, `type`): `Promise`\<`boolean`\>

Callback method that checks to see if url can be parsed by plugin
so that onLookupPlaylistUrl returns results

#### Parameters

##### url

`string`

##### type

[`ParseUrlType`](../type-aliases/ParseUrlType.md)

#### Returns

`Promise`\<`boolean`\>

***

### onChangeTheme()

> **onChangeTheme**(`theme`): `Promise`\<`void`\>

Callback method that is called after a users changes theme

#### Parameters

##### theme

[`Theme`](../type-aliases/Theme.md)

#### Returns

`Promise`\<`void`\>

***

### onDeepLinkMessage()?

> `optional` **onDeepLinkMessage**(`message`): `Promise`\<`void`\>

Callback method to return deep link messages in mobile

#### Parameters

##### message

`string`

#### Returns

`Promise`\<`void`\>

***

### onGetAlbumTracks()?

> `optional` **onGetAlbumTracks**(`request`): `Promise`\<[`AlbumTracksResult`](AlbumTracksResult.md)\>

Callback method that gets an albums's tracks.  Used on `/plugins/:pluginId/albums/:apiId`

#### Parameters

##### request

[`AlbumTrackRequest`](AlbumTrackRequest.md)

#### Returns

`Promise`\<[`AlbumTracksResult`](AlbumTracksResult.md)\>

***

### onGetArtistAlbums()?

> `optional` **onGetArtistAlbums**(`request`): `Promise`\<[`ArtistAlbumsResult`](ArtistAlbumsResult.md)\>

Callback method that gets an artists's albums.  Used on `/plugins/:pluginId/artists/:apiId`

#### Parameters

##### request

[`ArtistAlbumRequest`](ArtistAlbumRequest.md)

#### Returns

`Promise`\<[`ArtistAlbumsResult`](ArtistAlbumsResult.md)\>

***

### onGetArtistTopTracks()?

> `optional` **onGetArtistTopTracks**(`request`): `Promise`\<[`ArtistTopTracksResult`](ArtistTopTracksResult.md)\>

Callback method that gets an artist's top tracks.  Used on `/plugins/:pluginId/artists/:apiId`

#### Parameters

##### request

[`ArtistTopTracksRequest`](ArtistTopTracksRequest.md)

#### Returns

`Promise`\<[`ArtistTopTracksResult`](ArtistTopTracksResult.md)\>

***

### onGetLyrics()

> **onGetLyrics**(`request`): `Promise`\<[`GetLyricsResponse`](GetLyricsResponse.md)\>

Callback method to get lyrics based on a track's name and artist name

#### Parameters

##### request

[`GetLyricsRequest`](GetLyricsRequest.md)

#### Returns

`Promise`\<[`GetLyricsResponse`](GetLyricsResponse.md)\>

***

### onGetPlaylistTracks()?

> `optional` **onGetPlaylistTracks**(`request`): `Promise`\<[`PlaylistTracksResult`](PlaylistTracksResult.md)\>

Callback method that gets a playlist's tracks.  Used on `/plugins/:pluginId/playlists/:apiId`

#### Parameters

##### request

[`PlaylistTrackRequest`](PlaylistTrackRequest.md)

#### Returns

`Promise`\<[`PlaylistTracksResult`](PlaylistTracksResult.md)\>

***

### onGetSearchSuggestions()

> **onGetSearchSuggestions**(`request`): `Promise`\<`string`[]\>

Callback method that returns search suggestions when a query is typed in the search bar

#### Parameters

##### request

[`GetSearchSuggestionsRequest`](GetSearchSuggestionsRequest.md)

#### Returns

`Promise`\<`string`[]\>

***

### onGetTopItems()?

> `optional` **onGetTopItems**(): `Promise`\<[`SearchAllResult`](SearchAllResult.md)\>

Callback method to return items to display on Home page.

#### Returns

`Promise`\<[`SearchAllResult`](SearchAllResult.md)\>

***

### onGetTrack()?

> `optional` **onGetTrack**(`request`): `Promise`\<[`Track`](Track.md)\>

Callback method to get track information. Used on `/track/:id`

#### Parameters

##### request

[`GetTrackRequest`](GetTrackRequest.md)

#### Returns

`Promise`\<[`Track`](Track.md)\>

***

### onGetTrackUrl()?

> `optional` **onGetTrackUrl**(`request`): `Promise`\<`string`\>

Callback method to get track url. Must be set to play track if onPlay is not set.

#### Parameters

##### request

[`GetTrackUrlRequest`](GetTrackUrlRequest.md)

#### Returns

`Promise`\<`string`\>

Url to play

***

### onGetUserPlaylists()?

> `optional` **onGetUserPlaylists**(`request`): `Promise`\<[`SearchPlaylistResult`](SearchPlaylistResult.md)\>

Callback method that gets user playlists.  Used on `/plugins/:pluginId/playlists`

#### Parameters

##### request

[`UserPlaylistRequest`](UserPlaylistRequest.md)

#### Returns

`Promise`\<[`SearchPlaylistResult`](SearchPlaylistResult.md)\>

***

### onLookupPlaylistUrl()?

> `optional` **onLookupPlaylistUrl**(`url`): `Promise`\<[`Playlist`](Playlist.md)\>

Callback method that takes a url and returns a playlist.
Used on the `/playlists` page.

#### Parameters

##### url

`string`

#### Returns

`Promise`\<[`Playlist`](Playlist.md)\>

***

### onLookupTrack()

> **onLookupTrack**(`request`): `Promise`\<[`Track`](Track.md)\>

Callback method to lookup up track based on track information.
It is used to convert tracks to use a different plugin.

#### Parameters

##### request

[`LookupTrackRequest`](LookupTrackRequest.md)

#### Returns

`Promise`\<[`Track`](Track.md)\>

***

### onLookupTrackUrls()?

> `optional` **onLookupTrackUrls**(`urls`): `Promise`\<[`Track`](Track.md)[]\>

Callback method that takes urls and returns tracks.

#### Parameters

##### urls

`string`[]

#### Returns

`Promise`\<[`Track`](Track.md)[]\>

***

### onNowPlayingTracksAdded()?

> `optional` **onNowPlayingTracksAdded**(`tracks`): `Promise`\<`void`\>

Callback method to detect when new tracks got added to Now Playing queue

#### Parameters

##### tracks

[`Track`](Track.md)[]

Tracks that got added to queue

#### Returns

`Promise`\<`void`\>

***

### onNowPlayingTracksChanged()?

> `optional` **onNowPlayingTracksChanged**(`tracks`): `Promise`\<`void`\>

Callback method to detect when tracks got changed in the Now Playing queue

#### Parameters

##### tracks

[`Track`](Track.md)[]

Tracks that were changed in the queue

#### Returns

`Promise`\<`void`\>

***

### onNowPlayingTracksRemoved()?

> `optional` **onNowPlayingTracksRemoved**(`tracks`): `Promise`\<`void`\>

Callback method to detect when tracks got removed from Now Playing queue

#### Parameters

##### tracks

[`Track`](Track.md)[]

Tracks that got removed to queue

#### Returns

`Promise`\<`void`\>

***

### onNowPlayingTracksSet()?

> `optional` **onNowPlayingTracksSet**(`tracks`): `Promise`\<`void`\>

Callback method to detect when there is a new tracklist in the Now Playing queue

#### Parameters

##### tracks

[`Track`](Track.md)[]

Current track list

#### Returns

`Promise`\<`void`\>

***

### onPause()?

> `optional` **onPause**(): `Promise`\<`void`\>

Callback method to pause embedded player

#### Returns

`Promise`\<`void`\>

***

### onPlay()?

> `optional` **onPlay**(`track`): `Promise`\<`void`\>

Callback method to play the track using an embedded player in the plugin.

#### Parameters

##### track

[`PlayTrackRequest`](PlayTrackRequest.md)

The Track to play

#### Returns

`Promise`\<`void`\>

***

### onResume()?

> `optional` **onResume**(): `Promise`\<`void`\>

Callback method to resume embedded player

#### Returns

`Promise`\<`void`\>

***

### onSearchAlbums()?

> `optional` **onSearchAlbums**(`request`): `Promise`\<[`SearchAlbumResult`](SearchAlbumResult.md)\>

Callback method to return album search results on `/search`

#### Parameters

##### request

[`SearchRequest`](SearchRequest.md)

#### Returns

`Promise`\<[`SearchAlbumResult`](SearchAlbumResult.md)\>

#### Remarks

This method must be set for album pagination to work on the
`/search` page

***

### onSearchAll()?

> `optional` **onSearchAll**(`request`): `Promise`\<[`SearchAllResult`](SearchAllResult.md)\>

Callback method to return search results on `/search`

#### Parameters

##### request

[`SearchRequest`](SearchRequest.md)

#### Returns

`Promise`\<[`SearchAllResult`](SearchAllResult.md)\>

#### Remarks

This method must be set for the plugin to show on the
`/search` page

***

### onSearchArtists()?

> `optional` **onSearchArtists**(`request`): `Promise`\<[`SearchArtistResult`](SearchArtistResult.md)\>

Callback method to return artist search results on `/search`

#### Parameters

##### request

[`SearchRequest`](SearchRequest.md)

#### Returns

`Promise`\<[`SearchArtistResult`](SearchArtistResult.md)\>

#### Remarks

This method must be set for artist pagination to work on the
`/search` page

***

### onSearchPlaylists()?

> `optional` **onSearchPlaylists**(`request`): `Promise`\<[`SearchPlaylistResult`](SearchPlaylistResult.md)\>

Callback method to return playlist search results on `/search`

#### Parameters

##### request

[`SearchRequest`](SearchRequest.md)

#### Returns

`Promise`\<[`SearchPlaylistResult`](SearchPlaylistResult.md)\>

#### Remarks

This method must be set for playlist pagination to work on the
`/search` page

***

### onSearchTracks()?

> `optional` **onSearchTracks**(`request`): `Promise`\<[`SearchTrackResult`](SearchTrackResult.md)\>

Callback method to return track search results on `/search`

#### Parameters

##### request

[`SearchRequest`](SearchRequest.md)

#### Returns

`Promise`\<[`SearchTrackResult`](SearchTrackResult.md)\>

#### Remarks

This method must be set for track pagination to work on the
`/search` page

***

### onSeek()?

> `optional` **onSeek**(`time`): `Promise`\<`void`\>

Callback method to seek time in the embedded player

#### Parameters

##### time

`number`

Time in seconds

#### Returns

`Promise`\<`void`\>

***

### onSetPlaybackRate()?

> `optional` **onSetPlaybackRate**(`rate`): `Promise`\<`void`\>

Callback method to set the playback rate of the embedded player

#### Parameters

##### rate

`number`

Percent of rate normal play rate. min 0, max 200.

#### Returns

`Promise`\<`void`\>

***

### onSetVolume()?

> `optional` **onSetVolume**(`volume`): `Promise`\<`void`\>

Callback method to set volume of embedded player

#### Parameters

##### volume

`number`

Volume of player. 1 is 100% volume.  0.5 is 50%.  min 0, max 1

#### Returns

`Promise`\<`void`\>

***

### onUiMessage()?

> `optional` **onUiMessage**(`message`): `void`

Callback method that receives parent.postMessage requests from UI frames.

#### Parameters

##### message

`any`

#### Returns

`void`

***

### postUiMessage()

> **postUiMessage**(`msg`): `Promise`\<`void`\>

Sends a message to ui frames like `options`  set in `manifest.json`.

#### Parameters

##### msg

`any`

#### Returns

`Promise`\<`void`\>

***

### setNowPlayingTracks()

> **setNowPlayingTracks**(`tracks`): `Promise`\<`void`\>

Set the user's Now Playing Queue track list;

#### Parameters

##### tracks

[`Track`](Track.md)[]

#### Returns

`Promise`\<`void`\>

***

### setTrackTime()

> **setTrackTime**(`currentTime`): `Promise`\<`void`\>

When plugin is acting as an embedded player, used to show user current track time.

#### Parameters

##### currentTime

`number`

#### Returns

`Promise`\<`void`\>
