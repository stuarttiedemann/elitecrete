function Gallery(floor,image){
	this.floor = floor;
	this.image = image
}

var galleryItem = [];

galleryItem.push(new Gallery("overlay","img/overlay1.jpg"));
galleryItem.push(new Gallery("overlay","img/overlay2.jpg"));
galleryItem.push(new Gallery("overlay","img/overlay3.jpg"));
galleryItem.push(new Gallery("overlay","img/overlay4.jpg"));
galleryItem.push(new Gallery("overlay","img/overlay5.jpg"));
galleryItem.push(new Gallery("reflector","img/reflector1.jpg"));
galleryItem.push(new Gallery("reflector","img/reflector2.jpg"));
galleryItem.push(new Gallery("reflector","img/reflector3.jpg"));
galleryItem.push(new Gallery("reflector","img/reflector4.jpg"));
galleryItem.push(new Gallery("reflector","img/reflector5.jpg"));
galleryItem.push(new Gallery("reflector","img/reflector6.jpg"));
galleryItem.push(new Gallery("reflector","img/reflector7.jpg"));
galleryItem.push(new Gallery("reflector","img/reflector8.jpg"));
console.log(galleryItem);
