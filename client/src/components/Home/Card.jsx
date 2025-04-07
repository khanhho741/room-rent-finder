import React from "react";
import "../../styles/home/Card.scss";

const Card = ({
    className,
    imgClassName,
    vectorClassName,
    textIconsClassName,
    title,
    location,
    price,
    area,
    timeAgo,
    isHot,
    imageSrc
}) => {
    return (
        <div className={`card ${className}`}>
            <div
                className={`label-wrapper ${imgClassName}`}
                style={{
                    backgroundImage: `url(${imageSrc})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                {isHot && (
                    <div className="label">
                        <div className="for-sale">Hot</div>
                    </div>
                )}
            </div>


            <div className={`text-icons ${textIconsClassName}`}>
                <div className="text-icons-2">
                    <div className="content-3">
                        <div className="title-4">
                            <div className="text-wrapper-19">{title}</div>
                            <img
                                className={`vector-2 ${vectorClassName}`}
                                alt="Vector"
                                src="https://c.animaapp.com/m8uerufgJVBeV6/img/vector.svg"
                            />
                        </div>
                        <div className="text-wrapper-20">{location}</div>
                    </div>
                    <div className="text-wrapper-21">{price}</div>
                </div>

                <div className="text-icons-3">
                    <div className="size">
                        <div className="icon-text">
                            <img
                                className="img-3"
                                alt="Size fullscreen"
                                src="https://c.animaapp.com/m8uerufgJVBeV6/img/size-fullscreen-svgrepo-com-1.svg"
                            />
                            <div className="text">
                                <div className="text-wrapper-22">{area}</div>
                            </div>
                        </div>
                        <div className="text-wrapper-23">Diện tích</div>
                    </div>

                    <div className="total-area">
                        <div className="total-area-2">
                            <img
                                className="img-3"
                                alt="Time svgrepo com"
                                src="https://c.animaapp.com/m8uerufgJVBeV6/img/time-svgrepo-com-1.svg"
                            />
                            <div className="text-2">
                                <div className="text-wrapper-24">{timeAgo}</div>
                            </div>
                        </div>
                        <div className="text-wrapper-25">Thời gian</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
