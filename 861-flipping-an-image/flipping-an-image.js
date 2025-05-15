/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
    for (let i = 0; i < image.length; i++) {
        for (let j = 0; j < image[i].length; j++) {
            image[i][j] = (image[i][j] === 0) ? 1 : 0;
        }
        image[i] = image[i].reverse();
    }
    return image;
};