import Image from 'next/image'
import React from 'react'

interface SVGProps {
    img?: any;
    height?: number;
    width?: number;
    alt?: any;
}

const Svg: React.FC<SVGProps> = ({ img, height, width, alt }) => {
    return (
        <Image
            src={img}
            alt={alt}
            width={width}
            height={height}
        />
    )
}

export default Svg
