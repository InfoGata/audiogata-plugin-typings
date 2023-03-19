declare global {
  const application: Application;

  interface Application {
    /**
     * Sends a message to ui frames like `options`  set in `manifest.json`.
     */
    postUiMessage(msg: any): Promise<void>;
    /**
     * When plugin is acting as an embedded player, used to signal that the track has end.
     */
    endTrack(): Promise<void>;
    /**
     * When plugin is acting as an embedded player, used to show user current track time.
     */
    setTrackTime(currentTime: number): Promise<void>;
    /**
     * Get the current plugin's id.
     */
    getPluginId(): Promise<string>;
    /**
     * Make a networkRequest from parent AudioGata frame rather from plugin frame.
     */
    networkRequest(input: RequestInfo, init?: RequestInit): Promise<Response>;
    /**
     * Used to determine whether requests from networkRequest are restricted by CORs.
     */
    isNetworkRequestCorsDisabled(): Promise<boolean>;
    /**
     * Get cors proxy configured in settings.
     */
    getCorsProxy(): Promise<string | undefined>;
    /**
     * Get locale configured in settings.
     */
    getLocale(): Promise<string>;
    /**
     * Get user's currently installed plugins.
     */
    getPlugins(): Promise<PluginInfo[]>;
    /**
     * Open user dialog for user to optionally install plugins
     */
    installPlugins(plugins: PluginInfo[]): Promise<void>;
    /**
     * Show user a notification on the bottom left of the screen
     */
    createNotification(notification: NotificationMessage): Promise<void>;
    /**
     * Get the user's Now Plyaing Queue track list;
     */
    getNowPlayingTracks(): Promise<Track[]>;
    /**
     * Set the user's Now Playing Queue track list;
     */
    setNowPlayingTracks(tracks: Track[]): Promise<void>;
    /**
     * Get the user's current playlists including tracks.
     */
    getPlaylists(): Promise<Playlist[]>;
    /**
     * Get the users's current playlists metadata without tracks.
     */
    getPlaylistsInfo(): Promise<PlaylistInfo[]>;
    /**
     * Adds or updates playlists. Playlists with the same id are updated.
     */
    addPlaylists(playlists: Playlist[]): Promise<void>;
    /**
     * Adds tracks to a playlist
     * @param playlistId id of playlist
     * @param tracks Tracks being added to playlist
     */
    addTracksToPlaylist(playlistId: string, tracks: Track[]): Promise<void>;
    /**
     * Callback method to play the track using an embedded player in the plugin.
     * @param track The Track to play
     */
    onPlay?(track: PlayTrackRequest): Promise<void>;
    /**
     * Callback method to set volume of embedded player
     * @param volume Volume of player. 1 is 100% volume.  0.5 is 50%.  min 0, max 1
     */
    onSetVolume?(volume: number): Promise<void>;
    /**
     * Callback method to pause embedded player
     */
    onPause?(): Promise<void>;
    /**
     * Callback method to resume embedded player
     */
    onResume?(): Promise<void>;
    /**
     * Callback method to seek time in the embedded player
     * @param time Time in seconds
     */
    onSeek?(time: number): Promise<void>;
    /**
     * Callback method to set the playback rate of the embedded player
     * @param rate Percent of rate normal play rate. min 0, max 200.
     */
    onSetPlaybackRate?(rate: number): Promise<void>;
    /**
     * Callback method to return search results on `/search`
     *
     * @remarks This method must be set for the plugin to show on the
     * `/search` page
     */
    onSearchAll?(request: SearchRequest): Promise<SearchAllResult>;
    /**
     * Callback method to return track search results on `/search`
     *
     * @remarks This method must be set for track pagination to work on the
     * `/search` page
     */
    onSearchTracks?(request: SearchRequest): Promise<SearchTrackResult>;
    /**
     * Callback method to return artist search results on `/search`
     *
     * @remarks This method must be set for artist pagination to work on the
     * `/search` page
     */
    onSearchArtists?(request: SearchRequest): Promise<SearchArtistResult>;
    /**
     * Callback method to return album search results on `/search`
     *
     * @remarks This method must be set for album pagination to work on the
     * `/search` page
     */
    onSearchAlbums?(request: SearchRequest): Promise<SearchAlbumResult>;
    /**
     * Callback method to return playlist search results on `/search`
     *
     * @remarks This method must be set for playlist pagination to work on the
     * `/search` page
     */
    onSearchPlaylists?(request: SearchRequest): Promise<SearchPlaylistResult>;
    /**
     * Callback method to get track url. Must be set to play track if onPlay is not set.
     *
     * @return Url to play
     */
    onGetTrackUrl?(request: GetTrackUrlRequest): Promise<string>;
    /**
     * Callback method to get track information. Used on `/track/:id`
     */
    onGetTrack?(request: GetTrackRequest): Promise<Track>;
    /**
     * Callback method that gets a playlist's tracks.  Used on `/plugins/:pluginId/playlists/:apiId`
     */
    onGetPlaylistTracks(
      request: PlaylistTrackRequest
    ): Promise<PlaylistTracksResult>;
    /**
     * Callback method that gets an albums's tracks.  Used on `/plugins/:pluginId/albums/:apiId`
     */
    onGetAlbumTracks?(request: AlbumTrackRequest): Promise<AlbumTracksResult>;
    /**
     * Callback method that gets an artists's albums.  Used on `/plugins/:pluginId/artists/:apiId`
     */
    onGetArtistAlbums?(
      request: ArtistAlbumRequest
    ): Promise<ArtistAlbumsResult>;
    /**
     * Callback method that gets user playlists.  Used on `/plugins/:pluginId/playlists`
     */
    onGetUserPlaylists?(
      request: UserPlaylistRequest
    ): Promise<SearchPlaylistResult>;
    /**
     * Callback method to return items to display on Home page.
     */
    onGetTopItems(): Promise<SearchAllResult>;
    /**
     * Callback method that checks to see if url can be parsed by plugin
     * so that onLookupPlaylistUrl returns results
     */
    onCanParseUrl?(url: string, type: ParseUrlType): Promise<boolean>;
    /**
     * Callback method that takes a url and returns a playlist.
     * Used on the `/playlists` page.
     */
    onLookupPlaylistUrl?(url: string): Promise<Playlist>;
    /**
     * Callback method to detect when new tracks got added to Now Playing queue
     * @param tracks Tracks that got added to queue
     */
    onNowPlayingTracksAdded?(tracks: Track[]): Promise<void>;
    /**
     * Callback method to detect when tracks got removed from Now Playing queue
     * @param tracks Tracks that got removed to queue
     */
    onNowPlayingTracksRemoved?(tracks: Track[]): Promise<void>;
    /**
     * Callback method to detect when tracks got changed in the Now Playing queue
     * @param tracks Tracks that were changed in the queue
     */
    onNowPlayingTracksChanged?(tracks: Track[]): Promise<void>;
    /**
     * Callback method to detect when there is a new tracklist in the Now Playing queue
     * @param tracks Current track list
     */
    onNowPlayingTracksSet?(tracks: Track[]): Promise<void>;
    /**
     * Callback method to return deep link messages in mobile
     */
    onDeepLinkMessage?(message: string): Promise<void>;
    /**
     * Callback method that receives parent.postMessage requests from UI frames.
     */
    onUiMessage?(message: any): void;
  }

  interface PluginInfo {
    /**
     * Unique Id of Plugin
     */
    id?: string;
    /**
     * Name of plugin
     */
    name: string;
    /**
     * Javascript code of plugin
     */
    script: string;
    /**
     * Version number
     */
    version?: string;
    /**
     * URL for the plugin's home page.
     */
    homepage?: string;
    /**
     * Description of plugin
     */
    description?: string;
    /**
     * Options page html code
     */
    optionsHtml?: string;
    /**
     * Determines whether the origin of the options iframe
     * should be pluginId.audiogata.com or should be null.
     * Setting to true may be useful for running some libraries
     * on options page.
     */
    optionsSameOrigin?: boolean;
  }

  interface Track {
    /**
     * Unique Id generated by AudioGata
     */
    id?: string;
    /**
     * Name of track
     */
    name: string;
    source?: string;
    /**
     * Plugin Id of plugin where Track was retrieved from. Set by AudioGata.
     */
    pluginId?: string;
    /**
     * Id from third party service this Track was retrieved from.
     */
    apiId?: string;
    /**
     * Length of track in seconds
     */
    duration?: number;
    /**
     * Id of the artist from the third party service this track came from
     */
    albumApiId?: string;
    /**
     * Name of album where this track came from
     */
    albumName?: string;
    /**
     * Id of the artist from the third party service this track came from
     */
    artistApiId?: string;
    /**
     * Name of artist where this track came from
     */
    artistName?: string;
    /**
     * Images associated with this track
     */
    images?: ImageInfo[];
    addtionalArtists?: ArtistInfo[];
    /**
     * Url that points to third party service where to track was retrieved from
     */
    originalUrl?: string;
  }

  interface Album {
    /**
     * Unique Id generated by AudioGata
     */
    id?: string;
    /**
     * Name of Album
     */
    name: string;
    /**
     * Id from third party service this Album was retrieved from.
     */
    apiId: string;
    /**
     * Plugin Id of plugin where Album was retrieved from. Set by AudioGata.
     */
    pluginId?: string;
    /**
     * Name of artist where this track came from
     */
    artistName?: string;
    /**
     * Id of the artist from the third party service this album came from
     */
    artistApiId?: string;
    /**
     * Images associated with this album
     */
    images?: ImageInfo[];
    addtionalArtists?: ArtistInfo[];
    /**
     * Url that points to third party service where to album was retrieved from
     */
    originalUrl?: string;
  }

  interface Artist {
    /**
     * Unique Id generated by AudioGata
     */
    id?: string;
    /**
     * Name of Artist
     */
    name: string;
    /**
     * Plugin Id of plugin where Artist was retrieved from. Set by AudioGata.
     */
    apiId: string;
    /**
     * Plugin Id of plugin where Artist was retrieved from. Set by AudioGata.
     */
    pluginId?: string;
    /**
     * Images associated with this Artist
     */
    images?: ImageInfo[];
    /**
     * Url that points to third party service where to Artist was retrieved from
     */
    originalUrl?: string;
  }

  interface ArtistInfo {
    /**
     * Name of artist
     */
    name: string;
    /**
     * Id of the artist
     */
    apiId?: string;
  }

  interface PlaylistInfo {
    /**
     * Unique Id generated by AudioGata
     */
    id?: string;
    /**
     * Images associated with this Playlist
     */
    images?: ImageInfo[];
    /**
     * Name of playlist
     */
    name?: string;
    /**
     * Determine whether this a private playlist only associated with a user.
     */
    isUserPlaylist?: boolean;
    /**
     * Id from third party service this Playlist was retrieved from.
     */
    apiId?: string;
    /**
     * Plugin Id of plugin where Playlist was retrieved from. Set by AudioGata.
     */
    pluginId?: string;
    /**
     * Url that points to third party service where to Playlist was retrieved from
     */
    originalUrl?: string;
  }

  interface Playlist extends PlaylistInfo {
    tracks: Track[];
  }

  interface ImageInfo {
    /**
     * Url of image
     */
    url: string;
    height?: number;
    width?: number;
  }

  interface NotificationMessage {
    /**
     * Message to show
     */
    message: string;
    type?: "default" | "success" | "error" | "warning" | "info";
  }

  interface PageInfo {
    /**
     * Total number of results returned
     */
    totalResults?: number;
    /**
     * Number of results on current page
     */
    resultsPerPage: number;
    /**
     * Current offset in the number of totalResults
     */
    offset: number;
    /**
     * Optional string containing information about next page. For example, a url to the next page.
     */
    nextPage?: string;
    /**
     * Optional string containing information about previous page. For example, a url to the next page.
     */
    prevPage?: string;
  }

  interface SearchAllResult {
    tracks?: SearchTrackResult;
    albums?: SearchAlbumResult;
    artists?: SearchArtistResult;
    playlists?: SearchPlaylistResult;
  }

  interface SearchRequest {
    /**
     * Search query used to search things like videos, channels, etc.
     */
    query: string;
    /**
     * Current page to search.
     */
    pageInfo?: PageInfo;
    /**
     * Current filters to search based on.
     */
    filterInfo?: FilterInfo;
  }

  interface PlaylistTrackRequest {
    apiId?: string;
    /**
     * Determine whether this a private playlist only associated with a user.
     */
    isUserPlaylist: boolean;
    pageInfo?: PageInfo;
  }

  interface AlbumTrackRequest {
    apiId?: string;
    pageInfo?: PageInfo;
  }

  interface ArtistAlbumRequest {
    apiId?: string;
    pageInfo?: PageInfo;
  }

  interface ArtistAlbumsResult extends SearchAlbumResult {
    artist?: Artist;
  }

  interface AlbumTracksResult extends SearchTrackResult {
    album?: Album;
  }

  interface UserPlaylistRequest {
    pageInfo?: PageInfo;
  }

  interface SearchResult {
    filterInfo?: FilterInfo;
    pageInfo?: PageInfo;
  }

  interface SearchTrackResult extends SearchResult {
    items: Track[];
  }

  interface GetTrackUrlRequest {
    apiId?: string;
  }
  interface PlayTrackRequest {
    apiId?: string;
    source?: string;
    seekTime?: number;
  }

  interface PlaylistTracksResult extends SearchTrackResult {
    playlist?: PlaylistInfo;
  }

  interface SearchArtistResult extends SearchResult {
    items: Artist[];
  }

  interface SearchAlbumResult extends SearchResult {
    items: Album[];
  }

  interface SearchPlaylistResult extends SearchResult {
    items: PlaylistInfo[];
  }

  interface GetTrackRequest {
    apiId: string;
  }

  /**
   * Information used for filtering in search requests.
   */
  interface FilterInfo {
    filters: Filter[];
  }

  type FilterType = "radio" | "select" | "text";

  interface Filter {
    /**
     * Unique identifier of filter.
     */
    id: string;
    /**
     * Name of filter that will be displayed to user.
     */
    displayName: string;
    /**
     * Type of filter used to determine if filter will be displayed
     * as a radio field, select tag, or text field.
     */
    type: FilterType;
    /**
     * Value that this filter is set to.
     */
    value?: string;
    /**
     * Selectable options for filter used when filter
     * is type "radio" or "select"
     */
    options?: FilterOption[];
  }

  interface FilterOption {
    displayName: string;
    value: string;
  }

  type ParseUrlType = "playlist";
}

export {};
