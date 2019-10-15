import { Draft } from "immer";
import { Cases } from "../../hooks/createImmerReducer";

export interface Point {
  x: number;
  y: number;
  mode: "begin" | "draw" | "end";
}

export interface IArtboardState {
  painting: boolean;
  points: Point[];
}

export interface IArtboardPayload {
  ctx?: CanvasRenderingContext2D;
  x: number;
  y: number;
}

export type ArtboardAction = "START_DRAWING" | "DRAW" | "STOP_DRAWING";

export type ActionFunction = (
  d: Draft<IArtboardState>,
  payload: IArtboardPayload
) => void;

export type ArtboardCases = Cases<IArtboardState> &
  { [_ in ArtboardAction]: ActionFunction };