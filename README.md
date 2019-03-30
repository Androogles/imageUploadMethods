# Image upload and resizing methods.

## ImageMagick
In this aproach, we will use **express-fileupload** to upload images, and **gm** + **ImageMagick** to resize images. 
We will also use path and fs (both core node modules) to define diffrent directory locations where images will be uploaded to and deleted from. When an image is uploaded we will use **uuid** (Universally unique identifier) to rename images with a uniqe key, this is mostly done to decide or shorten the image names, and to keep them consistent.    

### Dependencies
* [express-fileupload](https://www.npmjs.com/package/express-fileupload)
* [gm](https://www.npmjs.com/package/gm) 

### System requirements
ImageMagick must be installed locally on your system n[imageMagick for windows!](https://www.imagemagick.org/script/download.php#windows) 