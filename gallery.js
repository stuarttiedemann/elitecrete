function Gallery(floor,image,imageNumber){
	this.floor = floor;
	this.image = image;
	this.imageNumber = imageNumber;
}

var galleryItem = [];

galleryItem.push(new Gallery("overlay","img/overlay1.jpg","image-one"));
galleryItem.push(new Gallery("overlay","img/overlay2.jpg","image-2"));
galleryItem.push(new Gallery("overlay","img/overlay3.jpg","image-3"));
galleryItem.push(new Gallery("overlay","img/overlay4.jpg","image-4"));
galleryItem.push(new Gallery("overlay","img/overlay5.jpg","image-5"));
galleryItem.push(new Gallery("reflector","img/reflector1.jpg","image-6"));
galleryItem.push(new Gallery("reflector","img/reflector2.jpg","image-7"));
galleryItem.push(new Gallery("reflector","img/reflector4.jpg","image-8"));
galleryItem.push(new Gallery("reflector","img/reflector5.jpg","image-9"));
galleryItem.push(new Gallery("reflector","img/reflector6.jpg","image-10"));
galleryItem.push(new Gallery("reflector","img/reflector7.jpg","image-11"));
galleryItem.push(new Gallery("reflector","img/reflector8.jpg","image-12"));
