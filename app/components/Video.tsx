export default function Video () {
    return (
        <>
        <div className="video-background absolute z-10 w-auto min-w-full min-h-full max-w-none">
            <video autoPlay loop muted>
                <source src="media/video_bg.webm" type="video/webm" />
            </video>
        </div>
        </>
    );
}      