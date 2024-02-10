export type Competition = {
    id:                    string;
    uid:                   string;
    date:                  string;
    attendance:            number;
    type:                  CompetitionType;
    timeValid:             boolean;
    neutralSite:           boolean;
    conferenceCompetition: boolean;
    playByPlayAvailable:   boolean;
    recent:                boolean;
    venue:                 CompetitionVenue;
    competitors:           Competitor[];
    notes:                 any[];
    status:                Status;
    broadcasts:            Broadcast[];
    format:                Format;
    startDate:             string;
    geoBroadcasts:         GeoBroadcast[];
    headlines:             Headline[];
}

export type Broadcast = {
    market: string;
    names:  string[];
}

export type Competitor = {
    id:         string;
    uid:        string;
    type:       TypeElement;
    order:      number;
    homeAway:   HomeAway;
    winner:     boolean;
    team:       Team;
    score:      string;
    linescores: Linescore[];
    statistics: Statistic[];
    leaders:    CompetitorLeader[];
    records:    Record[];
}

export enum HomeAway {
    Away = "away",
    Home = "home",
}

export type CompetitorLeader = {
    name:             LeaderName;
    displayName:      DisplayName;
    shortDisplayName: ShortDisplayNameEnum;
    abbreviation:     ShortDisplayNameEnum;
    leaders:          LeaderLeader[];
}

export enum ShortDisplayNameEnum {
    AST = "Ast",
    Pts = "Pts",
    Rat = "RAT",
    Reb = "Reb",
}

export enum DisplayName {
    Assists = "Assists",
    Points = "Points",
    Rating = "Rating",
    Rebounds = "Rebounds",
}

export type LeaderLeader = {
    displayValue: string;
    value:        number;
    athlete:      Athlete;
    team:         TeamClass;
}

export type Athlete = {
    id:          string;
    fullName:    string;
    displayName: string;
    shortName:   string;
    links:       AthleteLink[];
    headshot:    string;
    jersey:      string;
    position:    Position;
    team:        TeamClass;
    active:      boolean;
}

export type AthleteLink = {
    rel:  PurpleRel[];
    href: string;
}

export enum PurpleRel {
    Athlete = "athlete",
    Desktop = "desktop",
    Playercard = "playercard",
}

export type Position = {
    abbreviation: PositionAbbreviation;
}

export enum PositionAbbreviation {
    C = "C",
    G = "G",
    PG = "PG",
    Pf = "PF",
    Sf = "SF",
    Sg = "SG",
}

export type TeamClass = {
    id: string;
}

export enum LeaderName {
    Assists = "assists",
    Points = "points",
    Rating = "rating",
    Rebounds = "rebounds",
}

export type Linescore = {
    value: number;
}

export type Record = {
    name:          RecordName;
    abbreviation?: RecordAbbreviation;
    type:          RecordType;
    summary:       string;
}

export enum RecordAbbreviation {
    Game = "Game",
}

export enum RecordName {
    Home = "Home",
    Overall = "overall",
    Road = "Road",
}

export enum RecordType {
    Home = "home",
    Road = "road",
    Total = "total",
}

export type Statistic = {
    name:         string;
    abbreviation: StatisticAbbreviation;
    displayValue: string;
}

export enum StatisticAbbreviation {
    AST = "AST",
    Fg = "FG%",
    Fga = "FGA",
    Fgm = "FGM",
    Ft = "FT%",
    Fta = "FTA",
    Ftm = "FTM",
    Pts = "PTS",
    Reb = "REB",
    The3P = "3P%",
    The3Pa = "3PA",
    The3Pm = "3PM",
}

export type Team = {
    id:               string;
    uid:              string;
    location:         string;
    name:             string;
    abbreviation:     string;
    displayName:      string;
    shortDisplayName: string;
    color:            string;
    alternateColor:   string;
    isActive:         boolean;
    venue:            TeamClass;
    links:            TeamLink[];
    logo:             string;
}

export type TeamLink = {
    rel:        TypeElement[];
    href:       string;
    text:       Text;
    isExternal: boolean;
    isPremium:  boolean;
}

export enum TypeElement {
    Clubhouse = "clubhouse",
    Desktop = "desktop",
    Roster = "roster",
    Schedule = "schedule",
    Stats = "stats",
    Team = "team",
}

export enum Text {
    Clubhouse = "Clubhouse",
    Roster = "Roster",
    Schedule = "Schedule",
    Statistics = "Statistics",
}

export type Format = {
    regulation: Regulation;
}

export type Regulation = {
    periods: number;
}

export type GeoBroadcast = {
    type:   GeoBroadcastType;
    market: Market;
    media:  Media;
    lang:   string;
    region: string;
}

export type Market = {
    id:   string;
    type: string;
}

export type Media = {
    shortName: string;
}

export type GeoBroadcastType = {
    id:        string;
    shortName: string;
}

export type Headline = {
    description:   string;
    type:          ShortText;
    shortLinkText: string;
    video:         Video[];
}

export enum ShortText {
    BoxScore = "Box Score",
    Gamecast = "Gamecast",
    Highlights = "Highlights",
    PlayByPlay = "Play-by-Play",
    Recap = "Recap",
}

export type Video = {
    id:                 number;
    source:             string;
    headline:           string;
    thumbnail:          string;
    duration:           number;
    tracking:           Tracking;
    deviceRestrictions: DeviceRestrictions;
    geoRestrictions:    GeoRestrictions;
    links:              Links;
}

export type DeviceRestrictions = {
    type:    string;
    devices: Device[];
}

export enum Device {
    Desktop = "desktop",
    Handset = "handset",
    Settop = "settop",
    Tablet = "tablet",
}

export type GeoRestrictions = {
    type:      string;
    countries: string[];
}

export type Links = {
    api:    API;
    web:    Web;
    source: Source;
    mobile: Mobile;
}

export type API = {
    self:    Artwork;
    artwork: Artwork;
}

export type Artwork = {
    href: string;
}

export type Mobile = {
    alert:               Artwork;
    source:              Artwork;
    href:                string;
    streaming:           Artwork;
    progressiveDownload: Artwork;
}

export type Source = {
    mezzanine: Artwork;
    flash:     Artwork;
    hds:       Artwork;
    HLS:       HLS;
    HD:        Artwork;
    full:      Artwork;
    href:      string;
}

export type HLS = {
    href: string;
    HD:   Artwork;
}

export type Web = {
    href:  string;
    short: Artwork;
    self:  Artwork;
}

export type Tracking = {
    sportName:    string;
    leagueName:   string;
    coverageType: string;
    trackingName: string;
    trackingId:   string;
}

export type Status = {
    clock:        number;
    displayClock: string;
    period:       number;
    type:         StatusType;
}

export type StatusType = {
    id:          string;
    name:        TypeName;
    state:       State;
    completed:   boolean;
    description: Description;
    detail:      Description;
    shortDetail: Description;
}

export enum Description {
    Final = "Final",
}

export enum TypeName {
    StatusFinal = "STATUS_FINAL",
}

export enum State {
    Post = "post",
}

export type CompetitionType = {
    id:           string;
    abbreviation: string;
}

export type CompetitionVenue = {
    id:       string;
    fullName: string;
    address:  Address;
    capacity: number;
    indoor:   boolean;
}

export type Address = {
    city:  string;
    state: string;
}

export type PokedexLink = {
    language:   Language;
    rel:        FluffyRel[];
    href:       string;
    text:       ShortText;
    shortText:  ShortText;
    isExternal: boolean;
    isPremium:  boolean;
}

export enum Language {
    EnUS = "en-US",
}

export enum FluffyRel {
    Boxscore = "boxscore",
    Desktop = "desktop",
    Event = "event",
    Highlights = "highlights",
    Pbp = "pbp",
    Recap = "recap",
    Summary = "summary",
}

export type Season = {
    year: number;
    type: number;
    slug: string;
}
