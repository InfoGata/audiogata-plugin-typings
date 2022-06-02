declare const application: Application;

export interface Application {
  postUiMessage: (msg: any) => Promise<void>;
  endTrack: () => Promise<void>;
  getPluginId: () => Promise<string>;
  setTrackTime: (currentTime: number) => Promise<void>;
  isNetworkRequestCorsDisabled: () => Promise<boolean>;
  getCorsProxy: () => Promise<string>;
  networkRequest(input: RequestInfo, init?: RequestInit): Promise<Response>;
  getPlugins: () => Promise<PluginInfo[]>;
  createNotification: (notification: NotificationMessage) => Promise<void>;
  getNowPlayingTracks: () => Promise<ISong[]>;
  setNowPlayingTracks: (tracks: ISong[]) => Promise<void>;
  installPlugins: (plugins: PluginInfo[]) => void;
  getPlaylists: () => Promise<IPlaylist[]>;
  addPlaylists: (playlists: IPlaylist[]) => Promise<void>;

  // Optional Methods
  searchAll?: (request: SearchRequest) => Promise<SearchAllResult>;
  searchTracks?: (request: SearchRequest) => Promise<SearchTrackResult>;
  searchArtists?: (request: SearchRequest) => Promise<SearchArtistResult>;
  searchAlbums?: (request: SearchRequest) => Promise<SearchAlbumResult>;
  searchPlaylists?: (request: SearchRequest) => Promise<SearchPlaylistResult>;
  getTrackUrl?: (song: ISong) => Promise<void>;
  getPlaylistTracks?: (
    request: PlaylistTrackRequest
  ) => Promise<SearchTrackResult>;
  onDeepLinkMessage?: (message: string) => Promise<void>;
  onUiMessage?: (message: any) => void;
  play?: (song: ISong) => Promise<void>;
  setVolume?: (volume: number) => Promise<void>;
  pause?: () => Promise<void>;
  resume?: () => Promise<void>;
  seek?: (time: number) => Promise<void>;
  getAlbumTracks?: (album: IAlbum) => Promise<ISong[]>;
  getArtistAlbums?: (artist: IArtist) => Promise<IAlbum[]>;
  setPlaybackRate?: (rate: number) => Promise<void>;
  getUserPlaylists?: (
    request: UserPlaylistRequest
  ) => Promise<SearchPlaylistResult>;
  onNowPlayingTracksAdded?: (track: ISong[]) => Promise<void>;
  onNowPlayingTracksRemoved?: (track: ISong[]) => Promise<void>;
  onNowPlayingTracksChanged?: (track: ISong[]) => Promise<void>;
  onNowPlayingTracksSet?: (track: ISong[]) => Promise<void>;
}

export interface PluginInfo {
  id?: string;
  name: string;
  script: string;
  version?: string;
  description?: string;
  optionsHtml?: string;
  optionsSameOrigin?: boolean;
}

export interface ISong {
  id?: string;
  name: string;
  source: string;
  from?: string;
  apiId?: string;
  duration?: number;
  albumId?: string;
  artistId?: string;
  artistName?: string;
  images: IImage[];
}

export interface IAlbum {
  name: string;
  apiId: string;
  from: string;
  artistName?: string;
  artistId?: string;
  images: IImage[];
}

export interface IArtist {
  name: string;
  apiId: string;
  from: string;
  images: IImage[];
}

export interface IPlaylist {
  id?: string;
  name: string;
  songs?: ISong[];
  apiId?: string;
  images?: IImage[];
  from?: string;
}

export interface IImage {
  url: string;
  height: number;
  width: number;
}

export interface NotificationMessage {
  message: string;
  type?: "default" | "success" | "error" | "warning" | "info";
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
  offset: number;
  nextPage?: string;
  prevPage?: string;
}

export interface SearchAllResult {
  tracks?: SearchTrackResult;
  albums?: SearchAlbumResult;
  artists?: SearchArtistResult;
  playlists?: SearchPlaylistResult;
}

export interface SearchTrackResult {
  items: ISong[];
  pageInfo?: PageInfo;
}

export interface SearchArtistResult {
  items: IArtist[];
  pageInfo?: PageInfo;
}

export interface SearchAlbumResult {
  items: IAlbum[];
  pageInfo?: PageInfo;
}

export interface SearchPlaylistResult {
  items: IPlaylist[];
  pageInfo?: PageInfo;
}

export interface SearchRequest {
  query: string;
  page?: PageInfo;
}

export interface PlaylistTrackRequest {
  playlist: IPlaylist;
  page?: PageInfo;
}

export interface UserPlaylistRequest {
  page?: PageInfo;
}
