const Card = (props) => {

    return (
        <div className="w-full">
            <a href={props.elem.url} target="_blank">

                {/* Container for the image */}
                <div className="h-40 w-full overflow-hidden rounded-xl">

                    {/* Display the image using the download URL */}
                    <img className="h-full w-full object-cover" src={props.elem.download_url} alt="" />
                </div>

                {/* Display the author's name below the image */}
                <h2 className="font-bold text-lg">{props.elem.author}</h2>
            </a >
        </div>
    )
}

export default Card