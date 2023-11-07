const ImageCard = ({
    props,
    children,
    imgsrc,
    bgcolor,
    width,
    height,
    zindex,
}) => {
    return (
        <div
            className={`${width} ${height} relative overflow-hidden rounded-3xl`}
            {...props}
        >
            <img
                className={`relative ${zindex} `}
                src={imgsrc}
                alt="img"
            />
            <div className={`${bgcolor} absolute inset-0`}>
                <div className="p-4 text-white">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ImageCard