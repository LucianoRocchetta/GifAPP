const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=R7LFfguDosYqWVdfZTMx6m16k6Ve2RYj&q=${ category }&limit=20`;

    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map( gif => {
        const { id, title, images, username } = gif;

        return ({id, title, url: images.downsized_medium.url, username});
    });

    return gifs;
}

export { getGifs };