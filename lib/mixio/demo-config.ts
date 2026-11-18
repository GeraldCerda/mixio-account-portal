export interface DemoStage {
  id: string;
  src: string | null;
  volume?: number;
  enabled?: boolean;
}

// Demo player config. Stages match the tabs in index.html, in order.
// `src` is the audio file for that stage (MP3 or M4A). All files must be the same track, time-aligned, so switching
// stage keeps your place. A stage with `src: null` runs as a silent preview on a simulated timeline.
// `enabled: false` hides the stage's tab until its audio exists (the Assistant stage, for now).
// `volume` (0 to 1) can level-match the stages: the Mixio file measures about 3.1 LU louder than the bypassed one
// (-6.6 against -9.7 LUFS), so `volume: 0.70` would play both at the same loudness. 1 plays the files as supplied.
export const DEMO: { previewDuration: number; stages: DemoStage[] } = {
  previewDuration: 181.8, // seconds: the clip length, shown as the total before the audio has loaded
  stages: [
    { id: "initial-mix", src: "/assets/audio/dance-demo-bypassed.mp3", volume: 1 },
    { id: "mixio-result", src: "/assets/audio/dance-demo-mixio.mp3", volume: 1 },
    { id: "assistant-adjustment", src: null, enabled: false },
  ],
};
