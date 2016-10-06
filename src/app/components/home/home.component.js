class Ctrl {
  constructor ( $element, images, $firebaseArray, Steps, $timeout ) {
    'ngInject';
   
    this._$element = $element;
    this._images = images;
    this._$firebaseArray = $firebaseArray;
    this._Steps = Steps;
    this._$timeout = $timeout;

    this.steps = [{},{}, {}, {}, {}];
    this.activeStep = 0; 
    this.image = 0;
  }

  change($event) {
    if( this.text.length >= this.word.length && $event.code !== 'Backspace') {
      $event.preventDefault();
    }
  }

  modelChange( $index, $event ) { 
    
    var lastChar = $event.target.value.substr($event.target.value.length - 1);

    this.models[$index] = lastChar.toUpperCase();
    if(lastChar.length) {
      this.goto($index + 1);
    }else {
      this.goto($index - 1);
    }

    this.testSuccess();
    $event.target.value = null;
    return; 
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

    this.getWord();
  }

  getWord() {
    
    this.loading = true;
    this._Steps.get(this.activeStep).then(
      word => {
        this.word = word.toUpperCase();
        
        this._images.search( this.word ).then(
          x => this.imgSrcArr = x,
          x => console.log(x)
        );

        this.models = this.word.split("").map(() => null);

        this.goto(0);

        
        this.loading = false;
      } );


  }

  getHint() {

    var emptyIndex = [];

    this.models.map( (x,a) => { if ( !this.testLetter(a) ) emptyIndex.push(a); } );
    
    var index = emptyIndex[Math.floor(Math.random()*emptyIndex.length)];
    
    this.models[index] = this.word[index];

    this.testSuccess();
  }

  goto(num) {
    var blocks = document.querySelectorAll('.block');
    if( blocks[ num ] ) {
      blocks[num].focus();
    }
  }

  testSuccess() {
    if( this.models.join("") === this.word ) {
      this._$timeout(
        () => {
          console.log('done');
          this.steps[this.activeStep]['success'] = true;

          if( this.steps[ this.activeStep + 1 ] ) {
            this.activeStep++;
            this.getWord(); 
          }else {
            alert('All Done')
          }
        },
        500
      )
    }
  }

  imageChange() {
    if( this.imgSrcArr[ this.image +1 ] ) {
      this.image++;
    }else {
      this.image = 0;
    }
  }
 
}


export const HomeComponent = {
  templateUrl: 'app/components/home/home.component.html',
  controller: Ctrl
}