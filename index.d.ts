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

    // Optional Methods
    searchAll?: (request: SearchRequest) => Promise<SearchAllResult>;
    searchTracks?: (request: SearchRequest) => Promise<SearchTrackResult>;
    searchArtists?: (request: SearchRequest) => Promise<SearchArtistResult>;
    searchAlbums?: (request: SearchRequest) => Promise<SearchAlbumResult>;
    searchPlaylists?: (request: SearchRequest) => Promise<SearchPlaylistResult>;
    getTrackUrl?: (track: Track) => Promise<string>;
    getPlaylistTracks?: (
      request: PlaylistTrackRequest
    ) => Promise<SearchTrackResult>;
    onDeepLinkMessage?: (message: string) => Promise<void>;
    onUiMessage?: (message: any) => void;
    play?: (track: Track) => Promise<void>;
    setVolume?: (volume: number) => Promise<void>;
    pause?: () => Promise<void>;
    resume?: () => Promise<void>;
    seek?: (time: number) => Promise<void>;
    getAlbumTracks?: (album: Album) => Promise<Track[]>;
    getArtistAlbums?: (artist: Artist) => Promise<Album[]>;
    setPlaybackRate?: (rate: number) => Promise<void>;
    getUserPlaylists?: (
      request: UserPlaylistRequest
    ) => Promise<SearchPlaylistResult>;
    onNowPlayingTracksAdded?: (track: Track[]) => Promise<void>;
    onNowPlayingTracksRemoved?: (track: Track[]) => Promise<void>;
    onNowPlayingTracksChanged?: (track: Track[]) => Promise<void>;
    onNowPlayingTracksSet?: (track: Track[]) => Promise<void>;
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
    source: string;
    from?: string;
    apiId?: string;
    duration?: number;
    albumId?: string;
    artistId?: string;
    artistName?: string;
    images: ImageInfo[];
  }

  interface Album {
    name: string;
    apiId: string;
    from: string;
    artistName?: string;
    artistId?: string;
    images: ImageInfo[];
  }

  interface Artist {
    name: string;
    apiId: string;
    from: string;
    images: ImageInfo[];
  }

  interface Playlist {
    id?: string;
    name: string;
    tracks?: Track[];
    apiId?: string;
    images?: ImageInfo[];
    from?: string;
    isUserPlaylist?: boolean;
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
    items: Playlist[];
    pageInfo?: PageInfo;
  }

  interface SearchRequest {
    query: string;
    page?: PageInfo;
  }

  interface PlaylistTrackRequest {
    playlist: Playlist;
    page?: PageInfo;
  }

  interface UserPlaylistRequest {
    page?: PageInfo;
  }
}

export {};
