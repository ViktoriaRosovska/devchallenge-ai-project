import { MediaRecorder, register } from "extendable-media-recorder";
import { connect } from "extendable-media-recorder-wav-encoder";
await register(await connect());

export class AudioRecorder {
  #recorder;
  #callback;

  constructor() {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      this.#recorder = new MediaRecorder(stream, { mimeType: "audio/wav" });
      this.#recorder.addEventListener("dataavailable", (event) => this.#callback(event.data));
    });
  }

  start() {
    this.#recorder.start();
    console.log("Запис почався");
  }

  stop(callback) {
    this.#callback = callback;
    this.#recorder.stop();

    console.log("Запис зупинився");
  }

  get status() {
    return this.#recorder;
  }
}
