import { Component } from '@angular/core';
import { WowzaWebRTCPlayer } from "wowza-webrtc-player";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng15';
  async ngAfterViewInit() {
    const videoElement = document.querySelector("video");
    const player = new WowzaWebRTCPlayer(videoElement as HTMLVideoElement, {
      sdpUrl: "wss://zeezzrezrezr.streamlock.net/webrtc-session.json",
      applicationName: "webrtc",
      streamName: "myStream"
    });
    await player.playRemote();
  }
}
