// Generated by https://github.com/foxglove/schemas
// Options: {}

import { Time } from "./Time";

/** A single frame of a compressed video bitstream */
export type CompressedVideo = {
  /** Timestamp of video frame */
  timestamp: Time;

  /** Frame of reference for the video. The origin of the frame is the optical center of the camera. +x points to the right in the video, +y points down, and +z points into the plane of the video. */
  frame_id: string;

  /** Compressed video frame data. For packet-based video codecs this data must begin and end on packet boundaries (no partial packets), and must contain enough video packets to decode exactly one image (either a keyframe or delta frame). Note: Foxglove Studio does not support video streams that include B frames because they require lookahead. */
  data: Uint8Array;

  /**
   * Video format
   * 
   * Supported values: `h264` (Annex-B formatted data only)
   */
  format: string;
};
