import { Video } from 'aware-components';

export function MyVideo() {
  return (
    <Video id='video' controls preload='metadata'>
      <source src='video/sintel-short.mp4' type='video/mp4' />
      <source src='video/sintel-short.webm' type='video/webm' />
      <>
        <track
          label='English'
          kind='captions'
          srcLang='en'
          src='captions/vtt/sintel-en.vtt'
          default
        />
      </>
    </Video>
  );
}
