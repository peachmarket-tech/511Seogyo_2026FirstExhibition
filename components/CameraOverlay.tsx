import React, { useRef, useEffect, useState } from 'react';

export const CameraOverlay = ({ onClose }: { onClose: () => void }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let stream: MediaStream | null = null;

        const startCamera = async () => {
            try {
                stream = await navigator.mediaDevices.getUserMedia({
                    video: { facingMode: 'environment' }
                });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (err) {
                console.error("Camera access denied or not available", err);
                setError("카메라에 접근할 수 없습니다. 권한을 확인해주세요.");
            }
        };

        startCamera();

        return () => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    return (
        <div className="camera-overlay" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#000',
            zIndex: 2000,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {error ? (
                <div style={{ color: 'white', padding: '20px', textAlign: 'center' }}>{error}</div>
            ) : (
                <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            )}

            <button
                onClick={onClose}
                style={{
                    position: 'absolute',
                    bottom: 'calc(50px + env(safe-area-inset-bottom, 0px))',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    padding: '15px 30px',
                    borderRadius: '30px',
                    border: '2px solid white',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    zIndex: 2001
                }}
            >
                닫기 (Close)
            </button>

            {/* Camera UI Decorators for "Photo Zone" feel */}
            <div style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                width: '40px',
                height: '40px',
                borderTop: '4px solid white',
                borderLeft: '4px solid white',
                zIndex: 2001
            }} />
            <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '40px',
                height: '40px',
                borderTop: '4px solid white',
                borderRight: '4px solid white',
                zIndex: 2001
            }} />
            <div style={{
                position: 'absolute',
                bottom: 'calc(120px + env(safe-area-inset-bottom, 0px))',
                left: '20px',
                width: '40px',
                height: '40px',
                borderBottom: '4px solid white',
                borderLeft: '4px solid white',
                zIndex: 2001
            }} />
            <div style={{
                position: 'absolute',
                bottom: 'calc(120px + env(safe-area-inset-bottom, 0px))',
                right: '20px',
                width: '40px',
                height: '40px',
                borderBottom: '4px solid white',
                borderRight: '4px solid white',
                zIndex: 2001
            }} />
        </div>
    );
};
