declare global {
  const application: Application;

  interface Application {
    postUiMessage: (msg: any) => Promise<void>;
    endTrack: () => Promise<void>;
    getPluginId: () => Promise<string>;
    setTrackTime: (currentTime: number) => Promise<void>;
    isNetworkRequestCorsDisabled: () => Promise<boolean>;
    getCorsProxy: () => Promise<string>;
    networkRequest(input: RequestInfo, init?: RequestInit): Promise<Response>;
    getPlugins: () => Promise<PluginInfo[]>;
    createNotification: (notification: NotificationMessage) => Promise<void>;
    getNowPlayingTracks: () => Promise<Track[]>;
    setNowPlayingTracks: (tracks: Track[]) => Promise<void>;
    installPlugins: (plugins: PluginInfo[]) => void;
    getPlaylists: () => Promise<Playlist[]>;
    addPlaylists: (playlists: Playlist[]) => Promise<void>;
    onPlay?: (track: Track) => Promise<void>;
    onSetVolume?: (volume: number) => Promise<void>;
    onPause?: () => Promise<void>;
    onResume?: () => Promise<void>;
    onSeek?: (time: number) => Promise<void>;
    onSetPlaybackRate?: (rate: number) => Promise<void>;
    onSearchAll?: (request: SearchRequest) => Promise<SearchAllResult>;
    onSearchTracks?: (request: SearchRequest) => Promise<SearchTrackResult>;
    onSearchArtists?: (request: SearchRequest) => Promise<SearchArtistResult>;
    onSearchAlbums?: (request: SearchRequest) => Promise<SearchAlbumResult>;
    onSearchPlaylists?: (
      request: SearchRequest
    ) => Promise<SearchPlaylistResult>;
    onGetTrackUrl?: (track: Track) => Promise<string>;
    onGetPlaylistTracks?: (
      request: PlaylistTrackRequest
    ) => Promise<SearchTrackResult>;
    onGetAlbumTracks?: (album: Album) => Promise<Track[]>;
    onGetArtistAlbums?: (artist: Artist) => Promise<Album[]>;
    onGetUserPlaylists?: (
      request: UserPlaylistRequest
    ) => Promise<SearchPlaylistResult>;
    onGetTopItems: () => Promise<SearchAllResult>;
    onNowPlayingTracksAdded?: (track: Track[]) => Promise<void>;
    onNowPlayingTracksRemoved?: (track: Track[]) => Promise<void>;
    onNowPlayingTracksChanged?: (track: Track[]) => Promise<void>;
    onNowPlayingTracksSet?: (track: Track[]) => Promise<void>;
    onDeepLinkMessage?: (message: string) => Promise<void>;
    onUiMessage?: (message: any) => void;
  }

  interface PluginInfo {
    id?: string;
    name: string;
    script: string;
    version?: string;
    description?: string;
    optionsHtml?: string;
    optionsSameOrigin?: boolean;
  }

  interface Track {
    id?: string;
    name: string;
    source?: string;
    pluginId?: string;
    apiId?: string;
    duration?: number;
    albumApiId?: string;
    albumName?: string;
    artistApiId?: string;
    artistName?: string;
    images?: ImageInfo[];
  }

  interface Album {
    name: string;
    apiId: string;
    pluginId?: string;
    artistName?: string;
    artistApiId?: string;
    images?: ImageInfo[];
  }

  interface Artist {
    name: string;
    apiId: string;
    pluginId?: string;
    images?: ImageInfo[];
  }

  interface PlaylistInfo {
    id?: string;
    images?: ImageInfo[];
    name?: string;
    isUserPlaylist?: boolean;
    apiId?: string;
    pluginId?: string;
  }

  interface Playlist extends PlaylistInfo {
    tracks: Track[];
  }

  interface ImageInfo {
    url: string;
    height: number;
    width: number;
  }

  interface NotificationMessage {
    message: string;
    type?: "default" | "success" | "error" | "warning" | "info";
  }

  interface PageInfo {
    totalResults: number;
    resultsPerPage: number;
    offset: number;
    nextPage?: string;
    prevPage?: string;
  }

  interface SearchAllResult {
    tracks?: SearchTrackResult;
    albums?: SearchAlbumResult;
    artists?: SearchArtistResult;
    playlists?: SearchPlaylistResult;
  }

  interface SearchRequest {
    query: string;
    page?: PageInfo;
  }

  interface PlaylistTrackRequest {
    playlist: PlaylistInfo;
    page?: PageInfo;
  }

  interface UserPlaylistRequest {
    page?: PageInfo;
  }

  interface SearchTrackResult {
    items: Track[];
    pageInfo?: PageInfo;
  }

  interface SearchArtistResult {
    items: Artist[];
    pageInfo?: PageInfo;
  }

  interface SearchAlbumResult {
    items: Album[];
    pageInfo?: PageInfo;
  }

  interface SearchPlaylistResult {
    items: PlaylistInfo[];
    pageInfo?: PageInfo;
  }
}

export {};
