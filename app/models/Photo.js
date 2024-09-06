export class Photo {
  constructor(data) {
    this.url = data.imgUrl;
    this.img = data.img;
    this.query = data.query;
    this.author = data.author;
    this.largeImgUrl = data.largeImgUrl;
  }

  get photoTaken() {
    return `<p class="text-light">Photo taken by ${this.author}<p>`;
  }
}
