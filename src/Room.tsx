import { useNavigate } from 'react-router-dom';
import { Button } from './components/Button';
import { MainHeader, MainWrapper } from './components/MainWrapper';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Settings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const Room = () => {
  const navigate = useNavigate();

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    let stopped = false;

    async function start() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: { ideal: 640 }, height: { ideal: 480 } },
          audio: true,
        });
        if (stopped) return;

        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
        }
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError('Could not get acces to camera or microphone');
        }
      } finally {
        if (!stopped) setLoading(false);
      }
    }

    start();

    return () => {
      stopped = true;
      streamRef.current?.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    };
  }, []);

  const toggleMute = () => {
    const audioTracks = streamRef.current?.getAudioTracks() ?? [];
    const next = !muted;
    audioTracks.forEach((t) => (t.enabled = !next));
    setMuted(next);
  };

  return (
    <MainWrapper>
      <Wrapper>
        <MainHeader>Video room</MainHeader>
        {loading && <div>Loading…</div>}
        {error && <div>{error}</div>}
        <video ref={videoRef} playsInline muted={true} autoPlay />
        <Settings>
          <span>Microphone: {muted ? 'Off' : 'On'}</span>
          <Button $secondary onClick={toggleMute}>
            {muted ? 'Unmute' : 'Mute'}
          </Button>
        </Settings>
        <Button
          onClick={() => {
            navigate('/');
          }}
        >
          Home
        </Button>
      </Wrapper>
    </MainWrapper>
  );
};
