import { sendGet, sendPost, sendDelete } from "./requests";

let imagesHandlers = new Map();

export const getImages = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(sendGet('/images').then(res =>
                Object.entries(res)[0][1]
            )
            );
        }, 3000);
    });
};

const loadImages = () => {
    if (imagesHandlers.size === 0) {
        return;
    }

    new Promise((resolve) => {
        setTimeout(() => {
            resolve(sendGet('/images')
                .then(res =>
                    Object.entries(res)[0][1]
                ).then(
                    res => {
                        res.forEach(image => {
                            const handlers = imagesHandlers.get(image.id) ?? [];
                            handlers.forEach(fn => fn(image));
                        });
                    }
                ));
        }, 0);
    });
}

export const postImage = (image) => {
    sendPost('/images', image);
}

export const deleteImage = (imageId) => {
    sendDelete('/images'+ '/' + imageId);
}

export const subscribeToImage = (imageId, cb) => {
    const subscribers = imagesHandlers.get(imageId) || [];
    imagesHandlers.set(imageId, [...subscribers, cb]);
};

export const unsubscribeFromImage = imageId => {
    imagesHandlers.delete(imageId);
};

setInterval(loadImages, 5000);