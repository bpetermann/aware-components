import { Audio, Div } from 'aware-components';

export function MyAudio() {
  return (
    <Div>
      <Audio controls>
        <source src='horse.ogg' type='audio/ogg' />
        <source src='horse.mp3' type='audio/mpeg' />
        Your browser does not support the audio element
      </Audio>
      <p>Transcript: A horse sound</p>
    </Div>
  );
}
