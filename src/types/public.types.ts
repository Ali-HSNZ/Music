export type  TSlider = {
     img : string
     title : string
}
export enum ETypes{
     SINGER = "Singer",
     POTCAST = "podcast",
     SONG = "song",
     PLAYLIST = "playList"
}
export interface ISliderProps {
     sliders : Array<TSlider>
     title : string
     type : ETypes
}
export type TMiniSongItemProps = {
     title : string
     singer : string
     imgSrc : string
}