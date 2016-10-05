class Ctrl {
  constructor ( $element, images ) {
    'ngInject';
    this.text = 'CARMEL';
    this.word = 'elephent';

    this._$element = $element;
    this._images = images;
    this.models = [];
  }

  change($event) {
    if( this.text.length >= this.word.length && $event.code !== 'Backspace') {
      $event.preventDefault();
    }

  }

  modelChange( $index ) {

      if( this.text === this.word) {
        alert("Success");
      }

      // console.log($index, this.models[$index].length ,this.models);

      console.log(this._$element);

      if(this.models[$index].length) {

      }
  }

  focus($event, $index) {
    this.activeLetter = $index;
    angular.element($event.target).find("input").focus();
  }

  testLetter($index) {
    var isValid = this.word[$index] === this.models[$index];
    //  console.log($index, isValid);
    return isValid;
  }

  $onInit() {
    this._images.search( this.word ).then(
      x => this.imgSrc = x,
      x => console.log(x)
    );
  }

  getHint(){

  }
}


export const HomeComponent = {
  templateUrl: 'app/components/home/home.component.html',
  controller: Ctrl
}